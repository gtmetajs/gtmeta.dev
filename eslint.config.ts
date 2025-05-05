import eslint from '@eslint/js';
import stylisticPlugin from '@stylistic/eslint-plugin';
import { TSESLint } from '@typescript-eslint/utils';
import prettierConfig from 'eslint-config-prettier';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import tsdocPlugin from 'eslint-plugin-tsdoc';
import tseslint from 'typescript-eslint';

export default [
	eslint.configs.recommended,
	...tseslint.configs.strictTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	reactPlugin.configs.flat['recommended']!,
	reactPlugin.configs.flat['jsx-runtime']!,
	reactHooksPlugin.configs['recommended-latest'],
	reactRefreshPlugin.configs.vite,
	jsxA11yPlugin.flatConfigs.strict,
	prettierConfig,
	{
		ignores: ['dist/'],
	},
	{
		plugins: {
			'@stylistic': stylisticPlugin,
			'tsdoc': tsdocPlugin,
		},
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			'eqeqeq': 'error',
			'no-console': [
				'error',
				{
					allow: ['info', 'warn', 'error'],
				},
			],
			'no-empty': [
				'error',
				{
					allowEmptyCatch: true,
				},
			],
			'@typescript-eslint/explicit-member-accessibility': 'error',
			'@typescript-eslint/no-confusing-void-expression': [
				'error',
				{
					ignoreArrowShorthand: true,
				},
			],
			'@typescript-eslint/no-empty-object-type': [
				'error',
				{
					allowObjectTypes: 'always',
				},
			],
			'@typescript-eslint/no-floating-promises': 'off',
			'@typescript-eslint/no-misused-promises': [
				'error',
				{
					checksVoidReturn: false,
				},
			],
			'@typescript-eslint/no-namespace': [
				'error',
				{
					allowDeclarations: true,
				},
			],
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/restrict-template-expressions': [
				'error',
				{
					allowNumber: true,
				},
			],
			'@typescript-eslint/switch-exhaustiveness-check': 'error',
			'react/prefer-read-only-props': 'warn',
			'@stylistic/max-len': [
				'error',
				{
					code: 120,
					comments: 80,
					ignorePattern: 'eslint-disable-next-line',
				},
			],
			'tsdoc/syntax': 'error',
		},
	},
	{
		files: ['*.js'],
		rules: {
			'tsdoc/syntax': 'off',
		},
	},
] satisfies TSESLint.FlatConfig.ConfigFile;
