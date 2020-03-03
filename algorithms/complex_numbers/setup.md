
1) npm init
2) npm install --save-dev jest
3) npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node
4) create .babelrc and add
```
{
  "presets": [
    "@babel/preset-env"
  ]
}
```
5) verify
```
npm run test
```
