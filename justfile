_default:
    @just --list --unsorted

start:
  pnpm start

start-prod:
  pnpm start:prod

build:
  pnpm build

resume:
  cd src/_resume && \
    pandoc -s \
      --to=pdf \
      --lua-filter filter.lua \
      --pdf-engine=tectonic \
      --template mcdowell.tex \
      --pdf-engine-opt=-Zsearch-path=${FONT_DIR} \
      cv.md \
      -o cv.pdf

html-resume:
  cd src/_resume && \
    pandoc -s \
      --to=html \
      --lua-filter filter.lua \
      cv.md \
      -o -

native-resume:
  cd src/_resume && \
    pandoc -s \
      --to=native \
      --lua-filter filter.lua \
      cv.md \
      -o -

update-deps:
  #!/usr/bin/env bash
  set -euxo pipefail
  nix flake update
  pnpm update --latest

post title:
  #!/usr/bin/env bash
  set -euo pipefail
  slug="$(echo "{{ title }}" | iconv -t ascii//TRANSLIT | sed -r s/[^a-zA-Z0-9]+/-/g | sed -r s/^-+\|-+$//g | tr A-Z a-z)"
  cat <<EOF > ./src/blog/"$slug".md
  ---
  title: "{{ title }}"
  date: $(date '+%F')
  ---
  EOF

cfp title:
  #!/usr/bin/env bash
  set -euo pipefail
  slug="$(echo "{{ title }}" | iconv -t ascii//TRANSLIT | sed -r s/[^a-zA-Z0-9]+/-/g | sed -r s/^-+\|-+$//g | tr A-Z a-z)"
  cat <<EOF > ./src/cfps/"$slug".md
  ---
  title: "{{ title }}"
  date: $(date '+%F')
  ---
  EOF

podcast title:
  #!/usr/bin/env bash
  set -euo pipefail
  slug="$(echo "{{ title }}" | iconv -t ascii//TRANSLIT | sed -r s/[^a-zA-Z0-9]+/-/g | sed -r s/^-+\|-+$//g | tr A-Z a-z)"
  cat <<EOF > ./src/podcasts/"$slug".md
  ---
  title: "{{ title }}"
  event:
  date: $(date '+%F')
  abstract:  |
  event_site:
  talk_page:
  video:
  audio:
  ---
  EOF

talk event title date=`date +%Y`:
  #!/usr/bin/env bash
  set -euo pipefail
  event_slug="$(echo "{{ event }}" | iconv -t ascii//TRANSLIT | sed -r s/[^a-zA-Z0-9]+/-/g | sed -r s/^-+\|-+$//g | tr A-Z a-z)"
  title_slug="$(echo "{{ title }}" | iconv -t ascii//TRANSLIT | sed -r s/[^a-zA-Z0-9]+/-/g | sed -r s/^-+\|-+$//g | tr A-Z a-z)"
  year="$(date --date='{{date}}' '+%Y')"
  cat <<EOF > ./src/talks/"${event_slug}-${year}--${title_slug}".md
  ---
  title: "{{ title }}"
  event: "{{ event }}"
  location:
  date: {{ date }}
  abstract:  |
  talk_page:
  event_site:
  video:
  eleventyComputed:
    slides: "/talks/{{{{ page.fileSlug }}/slides"
  ---
  EOF

slides event title date=`date +%Y`:
  #!/usr/bin/env bash
  set -euo pipefail
  event_slug="$(echo "{{ event }}" | iconv -t ascii//TRANSLIT | sed -r s/[^a-zA-Z0-9]+/-/g | sed -r s/^-+\|-+$//g | tr A-Z a-z)"
  title_slug="$(echo "{{ title }}" | iconv -t ascii//TRANSLIT | sed -r s/[^a-zA-Z0-9]+/-/g | sed -r s/^-+\|-+$//g | tr A-Z a-z)"
  year="$(date --date='{{date}}' '+%Y')"
  dest=./src/_talks/"${event_slug}-${year}--${title_slug}"

  cp -R ./src/_talks/scale-22x-2025--source-available-is-thriving-but-open-source-is-dying/ "$dest"
  sed -i "s/source-available-is-thriving-but-open-source-is-dying/$title_slug/g" "$dest"/package.json
  sed -i '3s/:.*$/: "{{title}}"/' "$dest"/slides.md
  sed -i -e '5,19d' -e '41,$d' "$dest"/slides.md
  echo "# {{title}}" >> "$dest"/slides
