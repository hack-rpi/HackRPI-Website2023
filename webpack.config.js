const path=require('path');
const HtmlWebpackPlugin= require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname,'frontend/src/index.js'),
  output : {
    path: path.resolve(__dirname,'build'),
    filename: '[name][contenthash].js',
    //publicPath: 'http:://www.hackrpi.com',
    assetModuleFilename:'[name][ext]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|geojson)$/i,
        type: 'asset/resource'

      },
      {
        test:/\.css$/i,
        use: ['style-loader','css-loader']
      },
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({
        title:"HackRPI X",
        filename:"index.html",
        template: "frontend/assets/index.html"
      })
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'], // <-- added `.jsx` here
  },
  devtool: 'source-map',
  devServer: {
      static: {
        directory: path.join(__dirname, 'build'),
      },
      port: 3000,
   },
}
