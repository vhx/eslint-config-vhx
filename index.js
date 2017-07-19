module.exports = {
	"extends": "airbnb",
	"plugins": [
		"react",
		"jsx-a11y",
		"import"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		}
	},
	"globals": {
		"vhxjs": true,
		"vhx": true,
		"_vhx": true,
		"$": true,
		"REACT_VHX": true
	},
	"env": {
		"browser": true,
		"mocha": true
	},
	"rules": {
		"max-len": 0,
		"import/no-unresolved": 0,
		"import/no-extraneous-dependencies": 0,
		"import/extensions": 0,
		"no-plusplus": [0],
		"new-cap": [0],
		"no-unused-expressions": [0],
		"consistent-return": [0],
		"array-bracket-spacing": [1, "always", { "objectsInArrays": false, "arraysInArrays": false }],
		"no-underscore-dangle": [0],
		"arrow-body-style": [0],
		"jsx-quotes": [2, "prefer-single"],
		"jsx-a11y/no-static-element-interactions": [1],
		"jsx-a11y/href-no-hash": [0],
		"react/jsx-curly-spacing": [0, "always"],
		"react/jsx-boolean-value": [0],
		"react/no-danger": [0],
		"react/no-find-dom-node": [0],
		"react/no-array-index-key": [0],
		"eqeqeq": [1, "smart"],
		"key-spacing": [2, {"mode": "minimum"}],
		"no-multi-spaces": [1, {
				"exceptions": {
					"VariableDeclarator": true,
					"ImportDeclaration": true
				}
			}
		]
	}
};