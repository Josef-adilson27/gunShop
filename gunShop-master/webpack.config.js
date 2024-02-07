const path = require("path");

const HtmlWebpackPlugin    = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./Public/index.js",
  
  output:{
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
    publicPath: "/" 
  },
  
  devServer: {
    historyApiFallback: true,
    static: {
     directory: path.join(__dirname, "/"),
   },
    port: 3000,
    open: true
  },

  plugins:[
    new HtmlWebpackPlugin({ template: "./Public/index.html" }),
    new CleanWebpackPlugin(),  
    new MiniCssExtractPlugin({
      filename: "[name].css",    
    })
  ],
  
  module:{
    rules: [
       ///styles
      { 
        test: /\.(css|scss)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader","sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          outputPath: './public/Images',         
        },
      },
      ///babel      
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
            presets: ["@babel/preset-react",'@babel/preset-env']
          }
        }       
      },
      {
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
            presets: ["@babel/preset-react",'@babel/preset-env']
          }
        }       
      },       
    ],
 
  },

};
