"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rule = {
    defaultOptions: [],
    meta: {
        type: "problem",
        docs: {
            description: "Disallow .tsx files without JSX",
        },
        messages: {
            noJsxInTsx: "This file has a .tsx extension but does not contain any JSX elements.",
        },
        schema: [],
    },
    create(context) {
        const filename = context.filename;
        if (!filename.endsWith(".tsx")) {
            return {};
        }
        let containsJSX = false;
        return {
            JSXElement() {
                containsJSX = true;
            },
            JSXFragment() {
                containsJSX = true;
            },
            "Program:exit"(node) {
                if (!containsJSX) {
                    context.report({
                        node,
                        messageId: "noJsxInTsx",
                    });
                }
            },
        };
    },
};
exports.default = rule;
