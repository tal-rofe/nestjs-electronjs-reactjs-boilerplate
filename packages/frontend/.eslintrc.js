module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'plugin:react/jsx-runtime'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		project: 'tsconfig.json',
		sourceType: 'module',
	},
	plugins: ['react'],
	settings: {
		react: {
			version: 'latest',
		},
	},
};
