module.exports = {
  //  Tell webpack to run babel on every file it runs through (take jsx and es2015/16/17 syntax, and convert it to es5)
  module: {
    rules: [
      {// only run babel on js files
        test: /\.js?$/, // when a js is found, run the loader on it
        loader: 'babel-loader', // this is the webpack babel transpiler
        exclude: /node_modules/, // this regex tells babel what directories to skip
        options: {
          presets: [ // these are the actual babel transpiling rules we want
            'react', // take jsx and turn it into normal js function calls
            'stage-0', // handles async code
            // env is a webpack master preset that says
            // run all the different transform rules needed to meet the requirements
            // of the latest two versions of all popular browsers
            ['env', { targets: { browsers: ['last 2 versions'] } }],
          ],
        },
      },
    ],
  },
};
