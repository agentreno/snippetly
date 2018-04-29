#!/usr/bin/env bash

# Installs create-react-app build outputs into the express API static folders
# to serve them up
rm ../api/public/css/main.*
rm ../api/public/js/main.*
rm ../api/public/pages/index.html
cp build/static/css/* ../api/public/css/
cp build/static/js/* ../api/public/js/
cp build/index.html ../api/public/pages/

# Fix the paths to work on Heroku which seems to have a rewrite rule for static
# paths: /static/js/main.hash.js -> /js/main.hash.js
sed -i 's/\/static//g' ../api/public/pages/index.html
