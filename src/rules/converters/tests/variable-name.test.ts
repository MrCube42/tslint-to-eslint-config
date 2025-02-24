import {
    convertVariableName,
    IgnoreLeadingTrailingUnderscoreMsg,
    ForbiddenLeadingTrailingIdentifierMsg,
    IgnoreLeadingTrailingIdentifierMsg,
    ForbiddenPascalSnakeMsg,
    ConstRequiredForAllCapsMsg,
    IgnoreOnlyLeadingUnderscoreMsg,
    IgnoreOnlyTrailingUnderscoreMsg,
} from "../variable-name";

describe(convertVariableName, () => {
    test("conversion without arguments", () => {
        const result = convertVariableName({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "camelcase",
                    notices: [IgnoreLeadingTrailingUnderscoreMsg],
                },
                {
                    ruleName: "no-underscore-dangle",
                    ruleArguments: [],
                    notices: [ForbiddenLeadingTrailingIdentifierMsg],
                },
                {
                    ruleName: "id-blacklist",
                    ruleArguments: [],
                },
                {
                    ruleName: "id-match",
                },
            ],
        });
    });

    test("conversion with require-const-for-all-caps argument", () => {
        const result = convertVariableName({
            ruleArguments: ["require-const-for-all-caps"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "camelcase",
                    notices: [IgnoreLeadingTrailingUnderscoreMsg, ConstRequiredForAllCapsMsg],
                },
                {
                    ruleName: "no-underscore-dangle",
                    ruleArguments: [],
                    notices: [ForbiddenLeadingTrailingIdentifierMsg],
                },
                {
                    ruleName: "id-blacklist",
                    ruleArguments: [],
                },
                {
                    ruleName: "id-match",
                },
            ],
        });
    });

    test("conversion with allow-pascal-case argument", () => {
        const result = convertVariableName({
            ruleArguments: ["allow-pascal-case"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "camelcase",
                    notices: [IgnoreLeadingTrailingUnderscoreMsg, ForbiddenPascalSnakeMsg],
                },
                {
                    ruleName: "no-underscore-dangle",
                    ruleArguments: [],
                    notices: [ForbiddenLeadingTrailingIdentifierMsg],
                },
                {
                    ruleName: "id-blacklist",
                    ruleArguments: [],
                },
                {
                    ruleName: "id-match",
                },
            ],
        });
    });

    test("conversion with allow-snake-case argument", () => {
        const result = convertVariableName({
            ruleArguments: ["allow-snake-case"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "camelcase",
                    notices: [IgnoreLeadingTrailingUnderscoreMsg, ForbiddenPascalSnakeMsg],
                },
                {
                    ruleName: "no-underscore-dangle",
                    ruleArguments: [],
                    notices: [ForbiddenLeadingTrailingIdentifierMsg],
                },
                {
                    ruleName: "id-blacklist",
                    ruleArguments: [],
                },
                {
                    ruleName: "id-match",
                },
            ],
        });
    });

    test("conversion with allow-leading-underscore without check-format argument", () => {
        const result = convertVariableName({
            ruleArguments: ["allow-leading-underscore"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "camelcase",
                    notices: [IgnoreLeadingTrailingUnderscoreMsg],
                },
                {
                    ruleName: "no-underscore-dangle",
                    ruleArguments: [],
                    notices: [ForbiddenLeadingTrailingIdentifierMsg],
                },
                {
                    ruleName: "id-blacklist",
                    ruleArguments: [],
                },
                {
                    ruleName: "id-match",
                },
            ],
        });
    });

    test("conversion with allow-trailing-underscore without check-format argument", () => {
        const result = convertVariableName({
            ruleArguments: ["allow-trailing-underscore"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "camelcase",
                    notices: [IgnoreLeadingTrailingUnderscoreMsg],
                },
                {
                    ruleName: "no-underscore-dangle",
                    ruleArguments: [],
                    notices: [ForbiddenLeadingTrailingIdentifierMsg],
                },
                {
                    ruleName: "id-blacklist",
                    ruleArguments: [],
                },
                {
                    ruleName: "id-match",
                },
            ],
        });
    });

    test("conversion with check-format argument", () => {
        const result = convertVariableName({
            ruleArguments: ["check-format"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "camelcase",
                    notices: [IgnoreLeadingTrailingUnderscoreMsg],
                },
                {
                    ruleName: "no-underscore-dangle",
                    ruleArguments: [],
                    notices: [ForbiddenLeadingTrailingIdentifierMsg],
                },
                {
                    ruleName: "id-blacklist",
                    ruleArguments: [],
                },
                {
                    ruleName: "id-match",
                },
            ],
        });
    });

    test("conversion with allow-leading-underscore and check-format argument", () => {
        const result = convertVariableName({
            ruleArguments: ["check-format", "allow-leading-underscore"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "camelcase",
                    notices: [IgnoreOnlyLeadingUnderscoreMsg],
                },
                {
                    ruleName: "no-underscore-dangle",
                    ruleArguments: ["off"],
                    notices: [IgnoreLeadingTrailingIdentifierMsg],
                },
                {
                    ruleName: "id-blacklist",
                    ruleArguments: [],
                },
                {
                    ruleName: "id-match",
                },
            ],
        });
    });

    test("conversion with allow-trailing-underscore and check-format argument", () => {
        const result = convertVariableName({
            ruleArguments: ["check-format", "allow-trailing-underscore"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "camelcase",
                    notices: [IgnoreOnlyTrailingUnderscoreMsg],
                },
                {
                    ruleName: "no-underscore-dangle",
                    ruleArguments: ["off"],
                    notices: [IgnoreLeadingTrailingIdentifierMsg],
                },
                {
                    ruleName: "id-blacklist",
                    ruleArguments: [],
                },
                {
                    ruleName: "id-match",
                },
            ],
        });
    });

    test("conversion with allow-leading-underscore, allow-trailing-underscore and check-format argument", () => {
        const result = convertVariableName({
            ruleArguments: [
                "check-format",
                "allow-leading-underscore",
                "allow-trailing-underscore",
            ],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "camelcase",
                    notices: [],
                },
                {
                    ruleName: "no-underscore-dangle",
                    ruleArguments: ["off"],
                    notices: [IgnoreLeadingTrailingIdentifierMsg],
                },
                {
                    ruleName: "id-blacklist",
                    ruleArguments: [],
                },
                {
                    ruleName: "id-match",
                },
            ],
        });
    });

    test("conversion with all arguments", () => {
        const result = convertVariableName({
            ruleArguments: [
                "check-format",
                "allow-leading-underscore",
                "allow-pascal-case",
                "allow-snake-case",
                "allow-trailing-underscore",
                "require-const-for-all-caps",
                "ban-keywords",
            ],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "camelcase",
                    notices: [ConstRequiredForAllCapsMsg, ForbiddenPascalSnakeMsg],
                },
                {
                    ruleName: "no-underscore-dangle",
                    ruleArguments: ["off"],
                    notices: [IgnoreLeadingTrailingIdentifierMsg],
                },
                {
                    ruleName: "id-blacklist",
                    ruleArguments: [
                        "any",
                        "Number",
                        "number",
                        "String",
                        "string",
                        "Boolean",
                        "boolean",
                        "Undefined",
                        "undefined",
                    ],
                },
                {
                    ruleName: "id-match",
                },
            ],
        });
    });
});
