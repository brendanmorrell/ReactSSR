// REMEMBER: need to configure package.json to have a script that executes webpack
const path = require('path');
const merge = require('webpack-merge');// this is a dependency you need in package.json. It allows us to merge the parts of the webpack config that are the same on the client and server,
// and just have one base file that you can change which will apply the changes to the webpack files for client and server simultaneously
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');// not crucial, but this library allows you to skip bundling all the import modules like react/express on the server side bundle.js file since, unlike the browser, node can automatically go and grab these from the node_modules folder(if it exists there) when it starts the server

const config = {
  // Inform webpack that we're building a bundle for nodeJS rather than for the browser
  target: 'node',

  // tell webpack the root file of our server application (the entry point into our app)
  entry: './src/index.js',

  // tell webpack where to put output file once it is generated
  output: {
    filename: 'bundle.js',
    // path is a node module. __dirname means the same path as the current working directory file but with the extension at the end
    // be sure to require path at the top
    path: path.resolve(__dirname, 'build'), // build is the name of the new folder webpack will create when it runs
  },

  externals: [webpackNodeExternals()], // tells webpack not to bundle libraries into bundle.js if the library already exists in the node-modules folder
};


module.exports = merge(baseConfig, config);
