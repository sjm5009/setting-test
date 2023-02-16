module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'functional', 'import'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        // General
        'no-console': ['error', { allow: ['debug', 'warn', 'error'] }],
        // React
        'react/jsx-boolean-value': 'warn',
        'react/jsx-curly-brace-presence': 'warn',
        'react/jsx-fragments': 'warn',
        'react/jsx-no-useless-fragment': 'warn',
        'react/jsx-uses-react': 'off',
        'react/prefer-stateless-function': 'warn',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        // Functional
        'functional/prefer-readonly-type': [
            'error',
            {
                allowLocalMutation: true,
                allowMutableReturnType: true,
                ignoreClass: true,
            },
        ],
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal'],
                pathGroups: [
                    {
                        pattern: '{react,react-dom/**}',
                        group: 'external',
                        position: 'before',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'linebreak-style': ['error', 'unix'],
        eqeqeq: ['error', 'always', { null: 'ignore' }],
        camelcase: ['error', { properties: 'never' }],
        quotes: ['error', 'single', { avoidEscape: true }],
    },
};