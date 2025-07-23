import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';


export default defineConfig([
    { files : [ '**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}' ], languageOptions : { globals : globals.browser } },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        rules : {
            //"semi": ["error", "always"],
            'indent' : [ 'warn', 4 ],
            'quotes' : [ 'warn', 'single' ],
            'react/jsx-indent-props' : [ 2, 'first' ],
            'react/react-in-jsx-scope' : 'off',
            'object-curly-spacing' : [ 'error', 'always' ],
            'array-bracket-spacing' : [ 'error', 'always' ],
            'key-spacing' : [ 'error', { 'beforeColon' : true, 'afterColon' : true } ],
            'space-infix-ops' : [ 'error' ],
            "react/jsx-equals-spacing": ["error", "always"],
            '@typescript-eslint/type-annotation-spacing' : [ 'error', {
                'before' : false,
                'after' : true,
                'overrides' : {
                    'colon' : {
                        'before' : false,
                        'after' : true
                    }
                }
            } ]
        }
    }
]);
