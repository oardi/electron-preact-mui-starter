const webpack = require('webpack');
const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');
const path = require('path');
const PreactRefreshPlugin = require('@prefresh/webpack');

rules.push({
	test: /\.css$/,
	use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

rules.push({
	test: /\.s[ac]ss$/i,
	use: [
		'style-loader',
		'css-loader',
		'sass-loader',
	],
});

plugins.push(
	new webpack.HotModuleReplacementPlugin(),
	new PreactRefreshPlugin()
);

module.exports = {
	module: {
		rules,
	},
	plugins: plugins,
	resolve: {
		extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
		alias: {
			"react": "preact/compat",
			"react-dom": "preact/compat",
			preact: path.resolve(__dirname, 'node_modules', 'preact'),
			"preact/hooks": path.resolve(__dirname, 'node_modules', 'preact', 'hooks')
		}
	},
};
