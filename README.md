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

## Commit Message Format

Commits should adhere to the following format:

```
<type>(<scope>): <subject>

<body>

<references>
```

The following rules apply to the above format:

1. A commit message consists of a header, body, and references.
1. The header is the only mandatory part of the commit message.
1. The header must have a type and a subject; scope is optional.
1. Scope should be surrounded by parenthesis; otherwise they are omitted.
1. The type and scope should be lower case.
1. The subject and body should be sentence case.
1. The header line is limited to 72 characters.
1. Any other line should be wrapped at 100 characters.

### Types

Must be one of the following:

| Type | Description |
| --- | --- |
| chore | Build process or auxiliary tool changes |
| docs | Documentation only changes |
| feat | A new feature |
| fix | A bug fix |
| refactor | A code change that neither fixes a bug or adds a feature |
| release | Create a release commit |
| test | Add missing tests |
