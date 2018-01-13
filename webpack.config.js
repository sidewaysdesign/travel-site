var path = require('path');

module.exports = {
 entry: "./app/assets/scripts/App.js",
 output: {
  path: path.resolve(__dirname,"./app/temp/scripts"),
  // path: "./app/temp/scripts",
  filename: "App.js"
 },
 module: {
  loaders: [
   {
    loader: 'babel-loader',
    query: {
     // presets: ["@babel/preset-env"]
     presets: ["es2015"]
     // presets: ["env"]
    },
    test: /\.js$/,
    exclude: /node_modules/
   }
  ]
 }
}
