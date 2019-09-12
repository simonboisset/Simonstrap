const path = require("path");
module.exports = {
  entry: "./src/index.ts",
  mode: 'production',
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    path: path.join(__dirname, './'),
    filename: 'index.js',
    library: "simonstrap",
    libraryTarget: 'umd',
    publicPath: "/",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
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
}