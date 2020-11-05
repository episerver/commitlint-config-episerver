module.exports = {
    rules: {
        "body-leading-blank": [2, "always"],
        "body-max-line-length": [2, "always", 100],
        "footer-leading-blank": [2, "always"],
        "header-max-length": [2, "always", 72],
        "references-empty": [1, "never"],
        "scope-case": [2, "always", "lower-case"],
        "subject-case": [2, "always", "sentence-case"],
        "subject-empty": [2, "never"],
        "subject-full-stop": [2, "never", "."],
        "type-case": [2, "always", "lower-case"],
        "type-empty": [2, "never"],
        "type-enum": [
            2,
            "always",
            [
                "chore",
                "docs",
                "feat",
                "fix",
                "refactor",
                "release",
                "revert",
                "test"
            ]
        ]
    },
    parserPreset: {
        parserOpts: {
            issuePrefixes: ["CMS-", "PUI-"]
        }
    }
};
