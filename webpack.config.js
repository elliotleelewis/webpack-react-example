const path = require('node:path');

const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	mode: 'development',
	output: {
		clean: true,
		filename: '[name].[hash].js',
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ['ts-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html'),
		}),
		new CopyPlugin({
			patterns: [
				{ from: "src/favicon.ico", to: "favicon.ico" },
				{ from: "src/assets", to: "assets" },
			],
		}),
	],
};
