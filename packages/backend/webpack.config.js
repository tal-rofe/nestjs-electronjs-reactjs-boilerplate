const path = require('path');

const nodeExternals = require('webpack-node-externals');

module.exports = (options, webpack) => ({
	...options,
	externals: [
		...options.externals,
		nodeExternals({
			modulesDir: path.resolve(__dirname, '../../node_modules'),
		}),
	],
	plugins: [
		...options.plugins,
		new webpack.NormalModuleReplacementPlugin(/.\[BUNDLE_OS_TARGET\]./, (resource) => {
			resource.request = resource.request.replace(/\[BUNDLE_OS_TARGET\]/, process.env.OS_TARGET || 'darwin');
		}),
	],
});
