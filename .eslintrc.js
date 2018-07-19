module.exports = {
    env: {
        es6: true,
        node: true
    },
    extends: ["eslint:recommended", "google"],
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        indent: [2, 2],
        "object-curly-spacing": ["error", "never"],
        "no-console": "error",
        "semi": "error",
        "no-undefined": "error",
        "arrow-parens": ["error", "always"],
        "comma-dangle": ["error", "never"],
        "no-underscore-dangle": ["error", {
            allow: ["foo_", "_bar"]
        }],
        "max-len": ["error", {
            code: 100
        }],
        "require-jsdoc": [
            "error",
            {
                require: {
                    FunctionDeclaration: true,
                    MethodDefinition: false,
                    ClassDeclaration: false,
                    ArrowFunctionExpression: false,
                    FunctionExpression: false
                }
            }
        ]
    }
};