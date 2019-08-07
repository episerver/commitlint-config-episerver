# @episerver/commitlint-config

Shareable `commitlint` config enforcing the Episerver commit convention.

## Installation

**yarn**
```sh
yarn add --dev @commitlint/cli @episerver/commitlint-config
```

**npm**
```sh
npm install --save-dev @commitlint/cli @episerver/commitlint-config
```

## Usage

Configure commitlint to use the episerver configuration via a `commitlint.config.js` file or a `commitlint` field in `package.json`.

**commitlint.config.js**
```js
module.exports = {
    extends: ['@episerver']
};
```

**package.json**
```json
"commitlint": {
    "extends": ["@episerver"]
}
```
