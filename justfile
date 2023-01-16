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
