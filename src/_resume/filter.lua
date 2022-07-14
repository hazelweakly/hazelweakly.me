pandoc = require("pandoc")

local function parse_attributes(attrs)
	return "{" .. (attrs.title or "") .. "}" .. "{" .. (attrs.company or "") .. "}" .. "{" .. (attrs.time or "") .. "}"
end

local function is_plain_section(attrs)
	return attrs.title == nil and attrs.company == nil and attrs.time == nil
end

function Pandoc(doc)
	doc.blocks = pandoc.utils.make_sections(false, FORMAT:match("latex") and 1 or 2, doc.blocks)
	return doc
end

function parse_sentence(strs)
	local attrs = { title = "", company = "", time = "" }
	local attr_idx = { "title", "company", "time" }
	local idx = 1

	for i, el in pairs(strs) do
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
	if div.content[1].t == "LineBlock" then
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
		elseif FORMAT:match("html") and not is_plain_section(div.attributes) then
			local attrs = div.attributes
			local lst = {}
			local tbl = {
				{
					key = attrs.company,
					value = { pandoc.Str("Company"), pandoc.Plain({ pandoc.Str(attrs.company) }) },
				},
				{ key = attrs.time, value = { pandoc.Str("Date"), pandoc.Plain({ pandoc.Str(attrs.time) }) } },
				{ key = div.content[1], value = { pandoc.Str("Overview"), div.content[1] } },
				{ key = div.content[2], value = { pandoc.Str("Accomplishments"), div.content[2] } },
			}
			for i, x in pairs(tbl) do
				if x.key ~= nil and x.key ~= "" then
					table.insert(lst, x.value)
				end
			end
			div = pandoc.Div({
				pandoc.HorizontalRule(),
				pandoc.Header(3, { pandoc.Str(attrs.title) }),
				pandoc.DefinitionList(lst),
			})
		end
	end
	return div
end

local function slugify(str)
	str = string.lower(str)
	str = string.gsub(str, " ", "-")
	str = string.gsub(str, "[^%w-_]+", "")
	return str
end

local function linkify_headers(header)
	if FORMAT:match("latex") then
		return header
	end

	local text = header.content
	header.attributes.id = slugify(pandoc.utils.stringify(text))
	header.attributes.tabindex = "-1"
	header.content = pandoc.Link(pandoc.Span(text), "#" .. header.attributes.id)
	header.content.classes[1] = "header-anchor"
	return header
end

return {
	{ Pandoc = Pandoc },
	{ Div = process_div },
	{ Div = subsection_transform },
	{ Header = linkify_headers },
}
