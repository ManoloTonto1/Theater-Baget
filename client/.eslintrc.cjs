module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:react-hooks/recommended'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'project': ['./client/tsconfig.json','./client/tsconfig.node.json'],
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'import-newlines',
		'import',
		'react',
		'@typescript-eslint'
	],
	'rules': {
		'no-mixed-spaces-and-tabs': 0,
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'warn',
			'windows',
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'no-multiple-empty-lines': [
			'error',
			{
				'max': 1,
				'maxEOF': 0
			}
		],
		'object-curly-newline': ['error',
			{
				'ObjectExpression': 'always',
				'ObjectPattern': {
					'multiline': true
				},
				'ImportDeclaration': 'always',
				'ExportDeclaration': {
					'multiline': true, 'minProperties': 3
				}
			}],
		'no-useless-return': ['error'],
		'max-len': ['error', {
			'code': 120
		}],
		'max-statements-per-line': ['error', {
			'max': 1
		}],
		'react/jsx-max-props-per-line': [1, {
			'maximum': 2,
			'when': 'always'
		}],
		"@typescript-eslint/consistent-type-imports": "warn",
		"@typescript-eslint/consistent-type-exports": "warn",
		'@typescript-eslint/explicit-function-return-type': 'warn',
	}
};
