_default:
    @just --list --unsorted

start:
  pnpm start

start-prod:
  pnpm start:prod

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

talk eventdate:
  #!/usr/bin/env bash
  set -euo pipefail
  slug="$(echo "{{ eventdate }}" | iconv -t ascii//TRANSLIT | sed -r s/[^a-zA-Z0-9]+/-/g | sed -r s/^-+\|-+$//g | tr A-Z a-z)"
  cat <<EOF > ./src/talks/"$slug".md
  ---
  title: ""
  event:
  location:
  date: $(date '+%F')
  abstract:  |
  slides:
  talk_page:
  event_site:
  video:
  ---
  EOF
