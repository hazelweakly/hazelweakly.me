pandoc = require("pandoc")

local function parse_attr(a)
	return pandoc.read(a, "markdown").blocks[1] and pandoc.read(a, "markdown").blocks[1].content or pandoc.Null()
end

local function parse_attributes(attrs)
	return "{"
		.. (attrs.Title and pandoc.utils.stringify(parse_attr(attrs.Title)) or "")
		.. "}"
		.. "{"
		.. (attrs.Company and pandoc.utils.stringify(parse_attr(attrs.Company)) or "")
		.. "}"
		.. "{"
		.. (attrs.Date and pandoc.utils.stringify(parse_attr(attrs.Date)) or "")
		.. "}"
		.. "{"
		.. (attrs.Location and pandoc.utils.stringify(parse_attr(attrs.Location)) or "")
		.. "}"
end

local function is_plain_section(attrs)
	return attrs.Title == nil and attrs.Company == nil and attrs.Date == nil
end

function Pandoc(doc)
	doc.blocks = pandoc.utils.make_sections(false, FORMAT:match("latex") and 1 or 2, doc.blocks)
	return doc
end

function parse_sentence(strs)
	local attrs = { Title = "", Company = "", Date = "", Location = "" }
	local attr_idx = { "Title", "Company", "Date", "Location" }
	local idx = 1

	for _, el in ipairs(strs) do
		if el.text == "|" then
			idx = idx + 1
		else
			attrs[attr_idx[idx]] = attrs[attr_idx[idx]] .. (el.text or " ")
		end
	end

	for i, x in pairs(attrs) do
		attrs[i] = x:gsub("^%s*(.-)%s*$", "%1")
	end

	return attrs
end

function process_div(div)
	if div.classes:includes("hidden") then
		div = {}
	elseif div.content[1].t == "LineBlock" then
		local attrs = parse_sentence(div.content[1].content[1])
		attrs.class = div.classes[1]
		div.attr = attrs
		div.content:remove(1)
	end
	return div
end

function subsection_transform(div)
	if div.classes[1] == "cv" then
		div.classes:remove(1)

		if FORMAT:match("latex") then
			div.content:insert(1, pandoc.RawBlock("latex", "\\begin{cvsubsection}" .. parse_attributes(div.attributes)))
			div.content:insert(pandoc.RawBlock("latex", "\\end{cvsubsection}"))
		elseif (FORMAT:match("native") or FORMAT:match("html")) and not is_plain_section(div.attributes) then
			local lst = {}
			for _, a in ipairs({ "Company", "Date", "Location" }) do
				if div.attributes[a] ~= nil and div.attributes[a] ~= "" then
					table.insert(lst, { pandoc.Str(a), pandoc.Plain(parse_attr(div.attributes[a])) })
				end
			end

			local first = {}
			local second = {}
			local div_contents = pandoc.List:new()
			local split = false
			for i = 1, #div.content do
				if div.content[i].t == "Para" and not split then
					table.insert(first, div.content[i])
				else
					split = true
					table.insert(second, div.content[i])
				end
			end
			if #div.content > 1 then
				table.insert(lst, { pandoc.Str("Overview"), { first } })
			end

			div_contents:insert(pandoc.Header(3, { pandoc.Str(div.attributes.Title) }))
			div_contents:insert(pandoc.DefinitionList(lst))
			if #div.content == 1 then
				div_contents:extend(first)
			end
			div_contents:extend(second)

			div = {
				pandoc.Div(div_contents),
			}
		end
	end
	return div
end

local function slugify(str)
	str = string.lower(str)
	str = string.gsub(str, "[\192-\255][\128-\191]*", "-")
	str = string.gsub(str, "[%s]+", "-")
	str = string.gsub(str, "[^%w-_]+", "")
	return str
end

local function linkify_headers(header)
	if FORMAT:match("latex") then
		return header.level == 2 and pandoc.Null() or header
	end

	local text = header.content
	header.attributes.id = slugify(pandoc.utils.stringify(text))
	header.attributes.tabindex = "-1"
	header.content = pandoc.Link(pandoc.Span(text), "#" .. header.attributes.id)
	header.content.classes[1] = "header-anchor"
	return header
end

local function remove_comments(blocks)
	for i = #blocks - 1, 1, -1 do
		local b = blocks[i]
		if b.t == "RawBlock" and b.format == "html" and pandoc.text.sub(b.text, 1, 4) == "<!--" then
			blocks:remove(i)
		end
	end
	return blocks
end

return {
	{ Blocks = remove_comments },
	{ Div = process_div },
	{ Div = subsection_transform },
	{ Pandoc = Pandoc },
	{ Header = linkify_headers },
}
