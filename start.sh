#!/bin/sh

if [ ! -d "./node_modules" ];
then
  npm install
  npm install @vue/cli
else
  npm update
fi

npm run "$STAND"
