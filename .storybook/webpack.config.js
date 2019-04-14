const path = require('path');
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        include: path.resolve(__dirname, '../')
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
        ],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
}