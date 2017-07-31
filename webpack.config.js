var webpack = require('webpack');
//var fs = require('fs');
var WebpackDevServer = require('webpack-dev-server');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');



module.exports = {
        entry: __dirname + "/app/route.js", //已多次提及的唯一入口文件
        output: {
            path: __dirname + "/public", //打包后的文件存放的地方
            filename: "bundle.js" //打包后输出文件的文件名
        },
        devtool: 'source-map',
        devServer: {
            watch: true,
            keepalive: true,
            //在webpack.config.js中编辑
            historyApiFallback: true,
            hot: true,
            progress: true,
            contentBase: './public',
            inline: true,
            port: 6060,
            colors: true,
            //host: '192.168.8.102'
        }, 
        module: {

            loaders: [

                {

                   test: /\.(less|css)$/,
                    loader: ExtractTextPlugin.extract(['css', 'less']),
                    loaders: ['style', 'css', 'autoprefixer', 'less', ]
                }, {
                    test: /\.json$/,
                    loader: "json"
                }, {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel', //在webpack的module部分的loaders里进行配置即可
                    query: {
                        presets: ['es2015', 'react']
                    }
                }, {
                    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: "url-loader?limit=10000&mimetype=application/font-woff"
                }, {
                    test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: "file-loader"
                }, {
                    test: /\.(png|jpg|svg)$/,
                    loader: 'url?limit=1200&name=[hash].[ext]' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
                }
            ]
        },


        plugins: [
        new CopyWebpackPlugin([
        { from: './img', to: './img' },
            ]),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),

            /*css文件打包*/
            new ExtractTextPlugin("./main.css"),

            new webpack.HotModuleReplacementPlugin(),
        ],
    }
   