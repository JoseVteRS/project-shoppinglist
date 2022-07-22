module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'standard',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'nexT/core-web-vitals',
		'prettier'
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {}
};
