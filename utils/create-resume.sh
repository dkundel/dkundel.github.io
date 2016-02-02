#!/bin/sh

wkhtmltopdf \
  --dpi 300 --no-background \
  --footer-spacing 3 \
  --footer-center 'Dominik Kundel | Web Developer | Software Engineer' \
  --footer-right '[page]/[toPage]' \
  --footer-font-name 'Lato' --footer-font-size 6 --print-media-type \
  http://localhost:9000/resume.html app/dominik-kundel.pdf