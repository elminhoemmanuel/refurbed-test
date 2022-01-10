const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
	},
	plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' }), new MiniCssExtractPlugin()],
	module: {
		rules: [
			{
				test: /\.(scss|css)$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader", "postcss-loader"],
			},
		],
	},
	devServer: {
		static: 'dist',
    watchFiles: ['src/**/*', 'dist/**/*'],
	},
};