#!/bin/sh

if [ ! -d "./node_modules" ];
then
  npm install
  npm install --save portal-vue
  npm install @vue/cli @vue/cli-service-global
else
  npm update
fi

npm run "$STAND"
