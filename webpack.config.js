
// First, we need to tell webpack where to start bundling the javascript files, this we can do by specifying entry property.
// Here we are using path this is native NodeJs module, it helps us in the concatenation of file paths.
const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require("webpack-merge");
const modeConfiguration = env => require(`./build-utils/webpack.${env}`)(env);


module.exports = ({ mode } = { mode: "production" }) => { // defaults to prod
    console.log('mode is:', mode);

    return merge(
        {
            mode,
            entry: "./src/index.js",
            // entry: path.join(__dirname, "src", "index.js"), // First, we need to tell webpack where to start bundling the javascript files, this we can do by specifying entry property.
            devServer: { 
              open: true, // if true, opens our app in the browser
              hot: true // enables hot reload, HMR (Hot Module Replacement)
            },
            output: {  // Define output path for the bundled file
              // Here we tell webpack to create the final bundled file in dist folder in the root of the project.
              publicPath: "/",
              path: path.resolve(__dirname, "build"),
              filename: "bundle.js"
            },
            module: { // We now need to tell webpack to transpile javascript files using babel before bundling them. To do that we need to define some rules for the module bundling.
              rules: [
                {
                  test: /\.?js$/, // Here we tell webpack to use babel-loader to transpile files that end with .js.
                  exclude: /node_modules/,
                  loader: "babel-loader", // Babel is a transpiler so we need to tell it what to transpile, we do this using presets. These are predefined configuration that is used to transpile different type to javascript to browsers understandable one.
                },
              ],
            },
            plugins: [ // Once the bundled javascript file is created we need to tell webpack to inject it as a script tag to the HTML file. To do that we first need to install a webpack plugin that will help us do it.
              new HtmlWebpackPlugin({
                template: "./public/index.html"
              }),
              new webpack.HotModuleReplacementPlugin() // enables hot reload
            ],
        },
        modeConfiguration(mode)
    );
};


//     use: {
//       options: {
//         presets: ['@babel/preset-env', '@babel/preset-react'] // Here we have 2 presets @babel/preset-env for transpiling ES2015+ syntax and we have @babel/preset-react for transpiling react code.
//       }
//     }
//   },
//   {
//     test: /\.css$/i, // Babel config for CSS files
//     use: ["style-loader", "css-loader"],
//   },
//   {
//     test: /\.(png|jp(e*)g|svg|gif)$/, // Babel config for images
//     use: ['file-loader'],
//   },
//   {
//     test: /\.svg$/, // Babel config for SVG as react component
//     use: ['@svgr/webpack'],
//   },
// ]
// },