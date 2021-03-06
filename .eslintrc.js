module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    '@vue/standard',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console':
      process.env.NODE_ENV === 'production'
        ? ['error', { allow: ['warn', 'error'] }]
        : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-v-html': 0,
    'vue/no-parsing-error': [
      'error',
      {
        'invalid-first-character-of-tag-name': false
      }
    ],
    'no-underscore-dangle': 0,
    'arrow-body-style': 0,
    'no-plusplus': 0,
    'no-prototype-builtins': 0,
    'no-shadow': 0,
    'linebreak-style': 0,
    'no-param-reassign': ['error', { props: false }],
    'no-useless-return': 2,
    'arrow-parens': 0,
    'max-len': 0,
    'generator-star-spacing': 'off',
    'space-before-function-paren': ['error', 'never'],
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    curly: ['error', 'all'],
    eqeqeq: ['error', 'always'],
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-multi-spaces': 'error',
    'no-loop-func': 'error',
    'no-undefined': 0,
    'no-use-before-define': ['error', { functions: true, classes: true }],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': ['error', 'consistent'],
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs'],
    'no-multi-assign': 0,
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 'first',
        MemberExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1
      }
    ],
    'import/prefer-default-export': 'off',
    'vue/attributes-order': 'error',
    'vue/multiline-html-element-content-newline': 2,
    'vue/html-closing-bracket-spacing': 2,
    'vue/html-closing-bracket-newline': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/no-multi-spaces': 'error',
    'vue/no-shared-component-data': 'error',
    'vue/require-valid-default-prop': 'error',
    'vue/require-render-return': 'error',
    'vue/use-v-on-exact': ['error'],
    'vue/v-on-style': 'error',
    'vue/valid-template-root': 2,
    'vue/valid-v-bind': 'error',
    'vue/v-bind-style': 'error',
    'vue/attribute-hyphenation': 'error',
    'vue/html-end-tags': 'error',
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true
      }
    ],
    'vue/html-quotes': 'error',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 2,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/no-template-shadow': 'error',
    'vue/require-default-prop': 'error',
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true
      }
    ],
    'vue/no-confusing-v-for-v-if': 'error',
    'vue/this-in-template': ['error', 'never'],
    'import/no-cycle': 'off',
    'import/extensions': [
      'error',
      {
        js: 'ignorePackages',
        json: 'ignorePackages',
        vue: 'ignorePackages'
      }
    ],
    'import/no-unresolved': [
      'error',
      {
        ignore: ['@/']
      }
    ],
    'import/named': 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
