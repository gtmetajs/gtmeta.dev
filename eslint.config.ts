import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import stylisticPlugin from '@stylistic/eslint-plugin';
import { TSESLint } from '@typescript-eslint/utils';
import prettierConfig from 'eslint-config-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import tsdocPlugin from 'eslint-plugin-tsdoc';
import tseslint from 'typescript-eslint';

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

export default [
	eslint.configs.recommended,
	...tseslint.configs.strictTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	reactPlugin.configs.flat['recommended']!,
	reactPlugin.configs.flat['jsx-runtime']!,
	reactRefreshPlugin.configs.vite,
	...compat.extends('plugin:react-hooks/recommended'),
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
