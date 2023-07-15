module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'prettier',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier', 'i18next'],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],

        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],

        'i18next/no-literal-string': [
            'warn',
            { markupOnly: true, ignoreAttribute: ['data-testid'] },
        ],

        'max-len': [
            'error',
            {
                code: 100,
                tabWidth: 4,
                comments: 80,
                ignorePattern: '',
                ignoreComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            },
        ],

        'no-unused-vars': 'warn',
        'react/jsx-props-no-spreading': 'warn',

        'react/require-default-props': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'no-unused-expressions': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'react/react-in-jsx-scope': 'off',
    },

    globals: {
        __IS_DEV__: true,
    },

    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],

            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
}
