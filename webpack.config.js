module.exports = {
  devtool: 'inline-sourcemap',
  entry: './index.jsx',
  output: {
    filename:'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module:{
    loaders:[
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders:[
          'babel-loader'
        ]
      },
      {
        test:/\.css$/,
        loader:'style-loader!css-loader'
      }
    ]
  }
};
