var path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './'),
    filename: 'index.js',
    library: "simonstrap",
    libraryTarget: 'umd',
    publicPath: "/",
    umdNamedDefine: true
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      // build:path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './[name].[ext]'
            }
          }
        ]
      }
    ]
  }
};
