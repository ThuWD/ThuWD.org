const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      { 
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[sha1:hash:hex:4]'
            },
          },
        ],
      },

      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
          
        ],
      },
    ],
  },
  //...
};