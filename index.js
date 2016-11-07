module.exports = {
  plugins: [
    [
      require("babel-plugin-import-globals"),
      {
        Component: 'moped-runtime/lib/globals/component',
        connect: 'moped-bicycle/lib/connect',
        connectErrors: 'moped-bicycle/lib/connect-errors',
        Link: 'moped-runtime/lib/globals/link',
        logout: 'moped-runtime/lib/globals/logout',
        Match: 'moped-runtime/lib/globals/match',
        Miss: 'moped-runtime/lib/globals/miss',
        NavigationPrompt: 'moped-runtime/lib/globals/navigation-prompt',
        PropTypes: 'moped-runtime/lib/globals/prop-types',
        React: 'moped-runtime/lib/globals/react',
        ReactDOM: 'moped-runtime/lib/globals/react-dom',
        Redirect: 'moped-runtime/lib/globals/redirect',
        render: 'moped-runtime/lib/globals/render',
        request: 'moped-runtime/lib/globals/request',
        styled: 'moped-runtime/lib/globals/styled'
      }
    ],

    require("babel-plugin-transform-bql").default,

    require("babel-plugin-syntax-trailing-function-commas"),
    require("babel-plugin-transform-class-properties"), // N.B. class-properties must come before classes
    require("babel-plugin-transform-export-extensions"),
    require("babel-plugin-transform-object-rest-spread"),
    require("babel-plugin-transform-react-display-name"),
    require("babel-plugin-transform-react-jsx"),
    require("babel-plugin-transform-strict-mode"),

    require("babel-plugin-transform-es2015-template-literals"),
    require("babel-plugin-transform-es2015-literals"),
    require("babel-plugin-transform-es2015-function-name"),
    require("babel-plugin-transform-es2015-arrow-functions"),
    require("babel-plugin-transform-es2015-block-scoped-functions"),
    require("babel-plugin-transform-es2015-classes"),
    require("babel-plugin-transform-es2015-object-super"),
    require("babel-plugin-transform-es2015-shorthand-properties"),
    require("babel-plugin-transform-es2015-computed-properties"),
    require("babel-plugin-transform-es2015-for-of"),
    require("babel-plugin-transform-es2015-sticky-regex"),
    require("babel-plugin-transform-es2015-unicode-regex"),
    require("babel-plugin-check-es2015-constants"),
    require("babel-plugin-transform-es2015-spread"),
    require("babel-plugin-transform-es2015-parameters"),
    require("babel-plugin-transform-es2015-destructuring"),
    require("babel-plugin-transform-es2015-block-scoping"),
    require("babel-plugin-transform-es2015-typeof-symbol"),
    require("babel-plugin-transform-es2015-modules-commonjs"),
    require("babel-plugin-transform-regenerator"),

    [require("babel-plugin-transform-runtime"), {
      "polyfill": false,
      "regenerator": true
    }]
  ]
};
