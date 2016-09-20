module.exports = {
  entry: './app.jsx' ,
  output: {
    // path: 'build',
    filename:'bundle.js'
  },
  module:{
    loaders:[
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader:'babel-loader'
      },
      {
        test:/\.css$/,
        loader:'style-loader!css-loader'
      }
    ]
  }
};
