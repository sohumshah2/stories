"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/vfile-message";
exports.ids = ["vendor-chunks/vfile-message"];
exports.modules = {

/***/ "(ssr)/./node_modules/vfile-message/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/vfile-message/lib/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VFileMessage: () => (/* binding */ VFileMessage)\n/* harmony export */ });\n/* harmony import */ var unist_util_stringify_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unist-util-stringify-position */ \"(ssr)/./node_modules/unist-util-stringify-position/lib/index.js\");\n/**\n * @typedef {import('unist').Node} Node\n * @typedef {import('unist').Point} Point\n * @typedef {import('unist').Position} Position\n */ /**\n * @typedef {object & {type: string, position?: Position | undefined}} NodeLike\n *\n * @typedef Options\n *   Configuration.\n * @property {Array<Node> | null | undefined} [ancestors]\n *   Stack of (inclusive) ancestor nodes surrounding the message (optional).\n * @property {Error | null | undefined} [cause]\n *   Original error cause of the message (optional).\n * @property {Point | Position | null | undefined} [place]\n *   Place of message (optional).\n * @property {string | null | undefined} [ruleId]\n *   Category of message (optional, example: `'my-rule'`).\n * @property {string | null | undefined} [source]\n *   Namespace of who sent the message (optional, example: `'my-package'`).\n */ \n/**\n * Message.\n */ class VFileMessage extends Error {\n    /**\n   * Create a message for `reason`.\n   *\n   * > 🪦 **Note**: also has obsolete signatures.\n   *\n   * @overload\n   * @param {string} reason\n   * @param {Options | null | undefined} [options]\n   * @returns\n   *\n   * @overload\n   * @param {string} reason\n   * @param {Node | NodeLike | null | undefined} parent\n   * @param {string | null | undefined} [origin]\n   * @returns\n   *\n   * @overload\n   * @param {string} reason\n   * @param {Point | Position | null | undefined} place\n   * @param {string | null | undefined} [origin]\n   * @returns\n   *\n   * @overload\n   * @param {string} reason\n   * @param {string | null | undefined} [origin]\n   * @returns\n   *\n   * @overload\n   * @param {Error | VFileMessage} cause\n   * @param {Node | NodeLike | null | undefined} parent\n   * @param {string | null | undefined} [origin]\n   * @returns\n   *\n   * @overload\n   * @param {Error | VFileMessage} cause\n   * @param {Point | Position | null | undefined} place\n   * @param {string | null | undefined} [origin]\n   * @returns\n   *\n   * @overload\n   * @param {Error | VFileMessage} cause\n   * @param {string | null | undefined} [origin]\n   * @returns\n   *\n   * @param {Error | VFileMessage | string} causeOrReason\n   *   Reason for message, should use markdown.\n   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]\n   *   Configuration (optional).\n   * @param {string | null | undefined} [origin]\n   *   Place in code where the message originates (example:\n   *   `'my-package:my-rule'` or `'my-rule'`).\n   * @returns\n   *   Instance of `VFileMessage`.\n   */ // eslint-disable-next-line complexity\n    constructor(causeOrReason, optionsOrParentOrPlace, origin){\n        super();\n        if (typeof optionsOrParentOrPlace === \"string\") {\n            origin = optionsOrParentOrPlace;\n            optionsOrParentOrPlace = undefined;\n        }\n        /** @type {string} */ let reason = \"\";\n        /** @type {Options} */ let options = {};\n        let legacyCause = false;\n        if (optionsOrParentOrPlace) {\n            // Point.\n            if (\"line\" in optionsOrParentOrPlace && \"column\" in optionsOrParentOrPlace) {\n                options = {\n                    place: optionsOrParentOrPlace\n                };\n            } else if (\"start\" in optionsOrParentOrPlace && \"end\" in optionsOrParentOrPlace) {\n                options = {\n                    place: optionsOrParentOrPlace\n                };\n            } else if (\"type\" in optionsOrParentOrPlace) {\n                options = {\n                    ancestors: [\n                        optionsOrParentOrPlace\n                    ],\n                    place: optionsOrParentOrPlace.position\n                };\n            } else {\n                options = {\n                    ...optionsOrParentOrPlace\n                };\n            }\n        }\n        if (typeof causeOrReason === \"string\") {\n            reason = causeOrReason;\n        } else if (!options.cause && causeOrReason) {\n            legacyCause = true;\n            reason = causeOrReason.message;\n            options.cause = causeOrReason;\n        }\n        if (!options.ruleId && !options.source && typeof origin === \"string\") {\n            const index = origin.indexOf(\":\");\n            if (index === -1) {\n                options.ruleId = origin;\n            } else {\n                options.source = origin.slice(0, index);\n                options.ruleId = origin.slice(index + 1);\n            }\n        }\n        if (!options.place && options.ancestors && options.ancestors) {\n            const parent = options.ancestors[options.ancestors.length - 1];\n            if (parent) {\n                options.place = parent.position;\n            }\n        }\n        const start = options.place && \"start\" in options.place ? options.place.start : options.place;\n        /* eslint-disable no-unused-expressions */ /**\n     * Stack of ancestor nodes surrounding the message.\n     *\n     * @type {Array<Node> | undefined}\n     */ this.ancestors = options.ancestors || undefined;\n        /**\n     * Original error cause of the message.\n     *\n     * @type {Error | undefined}\n     */ this.cause = options.cause || undefined;\n        /**\n     * Starting column of message.\n     *\n     * @type {number | undefined}\n     */ this.column = start ? start.column : undefined;\n        /**\n     * State of problem.\n     *\n     * * `true` — error, file not usable\n     * * `false` — warning, change may be needed\n     * * `undefined` — change likely not needed\n     *\n     * @type {boolean | null | undefined}\n     */ this.fatal = undefined;\n        /**\n     * Path of a file (used throughout the `VFile` ecosystem).\n     *\n     * @type {string | undefined}\n     */ this.file;\n        // Field from `Error`.\n        /**\n     * Reason for message.\n     *\n     * @type {string}\n     */ this.message = reason;\n        /**\n     * Starting line of error.\n     *\n     * @type {number | undefined}\n     */ this.line = start ? start.line : undefined;\n        // Field from `Error`.\n        /**\n     * Serialized positional info of message.\n     *\n     * On normal errors, this would be something like `ParseError`, buit in\n     * `VFile` messages we use this space to show where an error happened.\n     */ this.name = (0,unist_util_stringify_position__WEBPACK_IMPORTED_MODULE_0__.stringifyPosition)(options.place) || \"1:1\";\n        /**\n     * Place of message.\n     *\n     * @type {Point | Position | undefined}\n     */ this.place = options.place || undefined;\n        /**\n     * Reason for message, should use markdown.\n     *\n     * @type {string}\n     */ this.reason = this.message;\n        /**\n     * Category of message (example: `'my-rule'`).\n     *\n     * @type {string | undefined}\n     */ this.ruleId = options.ruleId || undefined;\n        /**\n     * Namespace of message (example: `'my-package'`).\n     *\n     * @type {string | undefined}\n     */ this.source = options.source || undefined;\n        // Field from `Error`.\n        /**\n     * Stack of message.\n     *\n     * This is used by normal errors to show where something happened in\n     * programming code, irrelevant for `VFile` messages,\n     *\n     * @type {string}\n     */ this.stack = legacyCause && options.cause && typeof options.cause.stack === \"string\" ? options.cause.stack : \"\";\n        // The following fields are “well known”.\n        // Not standard.\n        // Feel free to add other non-standard fields to your messages.\n        /**\n     * Specify the source value that’s being reported, which is deemed\n     * incorrect.\n     *\n     * @type {string | undefined}\n     */ this.actual;\n        /**\n     * Suggest acceptable values that can be used instead of `actual`.\n     *\n     * @type {Array<string> | undefined}\n     */ this.expected;\n        /**\n     * Long form description of the message (you should use markdown).\n     *\n     * @type {string | undefined}\n     */ this.note;\n        /**\n     * Link to docs for the message.\n     *\n     * > 👉 **Note**: this must be an absolute URL that can be passed as `x`\n     * > to `new URL(x)`.\n     *\n     * @type {string | undefined}\n     */ this.url;\n    /* eslint-enable no-unused-expressions */ }\n}\nVFileMessage.prototype.file = \"\";\nVFileMessage.prototype.name = \"\";\nVFileMessage.prototype.reason = \"\";\nVFileMessage.prototype.message = \"\";\nVFileMessage.prototype.stack = \"\";\nVFileMessage.prototype.column = undefined;\nVFileMessage.prototype.line = undefined;\nVFileMessage.prototype.ancestors = undefined;\nVFileMessage.prototype.cause = undefined;\nVFileMessage.prototype.fatal = undefined;\nVFileMessage.prototype.place = undefined;\nVFileMessage.prototype.ruleId = undefined;\nVFileMessage.prototype.source = undefined;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdmZpbGUtbWVzc2FnZS9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7OztDQUlDLEdBRUQ7Ozs7Ozs7Ozs7Ozs7OztDQWVDLEdBRThEO0FBRS9EOztDQUVDLEdBQ00sTUFBTUMscUJBQXFCQztJQUNoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxREMsR0FDRCxzQ0FBc0M7SUFDdENDLFlBQVlDLGFBQWEsRUFBRUMsc0JBQXNCLEVBQUVDLE1BQU0sQ0FBRTtRQUN6RCxLQUFLO1FBRUwsSUFBSSxPQUFPRCwyQkFBMkIsVUFBVTtZQUM5Q0MsU0FBU0Q7WUFDVEEseUJBQXlCRTtRQUMzQjtRQUVBLG1CQUFtQixHQUNuQixJQUFJQyxTQUFTO1FBQ2Isb0JBQW9CLEdBQ3BCLElBQUlDLFVBQVUsQ0FBQztRQUNmLElBQUlDLGNBQWM7UUFFbEIsSUFBSUwsd0JBQXdCO1lBQzFCLFNBQVM7WUFDVCxJQUNFLFVBQVVBLDBCQUNWLFlBQVlBLHdCQUNaO2dCQUNBSSxVQUFVO29CQUFDRSxPQUFPTjtnQkFBc0I7WUFDMUMsT0FFSyxJQUNILFdBQVdBLDBCQUNYLFNBQVNBLHdCQUNUO2dCQUNBSSxVQUFVO29CQUFDRSxPQUFPTjtnQkFBc0I7WUFDMUMsT0FFSyxJQUFJLFVBQVVBLHdCQUF3QjtnQkFDekNJLFVBQVU7b0JBQ1JHLFdBQVc7d0JBQUNQO3FCQUF1QjtvQkFDbkNNLE9BQU9OLHVCQUF1QlEsUUFBUTtnQkFDeEM7WUFDRixPQUVLO2dCQUNISixVQUFVO29CQUFDLEdBQUdKLHNCQUFzQjtnQkFBQTtZQUN0QztRQUNGO1FBRUEsSUFBSSxPQUFPRCxrQkFBa0IsVUFBVTtZQUNyQ0ksU0FBU0o7UUFDWCxPQUVLLElBQUksQ0FBQ0ssUUFBUUssS0FBSyxJQUFJVixlQUFlO1lBQ3hDTSxjQUFjO1lBQ2RGLFNBQVNKLGNBQWNXLE9BQU87WUFDOUJOLFFBQVFLLEtBQUss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QVMsQ0FBQ0wsS0FBSyxHQUFHO0FBQy9CNUIsYUFBYWlDLFNBQVMsQ0FBQ1YsTUFBTSxHQUFHakI7QUFDaENOLGFBQWFpQyxTQUFTLENBQUNQLElBQUksR0FBR3BCO0FBQzlCTixhQUFhaUMsU0FBUyxDQUFDdEIsU0FBUyxHQUFHTDtBQUNuQ04sYUFBYWlDLFNBQVMsQ0FBQ3BCLEtBQUssR0FBR1A7QUFDL0JOLGFBQWFpQyxTQUFTLENBQUNULEtBQUssR0FBR2xCO0FBQy9CTixhQUFhaUMsU0FBUyxDQUFDdkIsS0FBSyxHQUFHSjtBQUMvQk4sYUFBYWlDLFNBQVMsQ0FBQ2xCLE1BQU0sR0FBR1Q7QUFDaENOLGFBQWFpQyxTQUFTLENBQUNqQixNQUFNLEdBQUdWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3Rvcmllcy8uL25vZGVfbW9kdWxlcy92ZmlsZS1tZXNzYWdlL2xpYi9pbmRleC5qcz9lYzY5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5Ob2RlfSBOb2RlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBvaW50fSBQb2ludFxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5Qb3NpdGlvbn0gUG9zaXRpb25cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtvYmplY3QgJiB7dHlwZTogc3RyaW5nLCBwb3NpdGlvbj86IFBvc2l0aW9uIHwgdW5kZWZpbmVkfX0gTm9kZUxpa2VcbiAqXG4gKiBAdHlwZWRlZiBPcHRpb25zXG4gKiAgIENvbmZpZ3VyYXRpb24uXG4gKiBAcHJvcGVydHkge0FycmF5PE5vZGU+IHwgbnVsbCB8IHVuZGVmaW5lZH0gW2FuY2VzdG9yc11cbiAqICAgU3RhY2sgb2YgKGluY2x1c2l2ZSkgYW5jZXN0b3Igbm9kZXMgc3Vycm91bmRpbmcgdGhlIG1lc3NhZ2UgKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7RXJyb3IgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2F1c2VdXG4gKiAgIE9yaWdpbmFsIGVycm9yIGNhdXNlIG9mIHRoZSBtZXNzYWdlIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1BvaW50IHwgUG9zaXRpb24gfCBudWxsIHwgdW5kZWZpbmVkfSBbcGxhY2VdXG4gKiAgIFBsYWNlIG9mIG1lc3NhZ2UgKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3J1bGVJZF1cbiAqICAgQ2F0ZWdvcnkgb2YgbWVzc2FnZSAob3B0aW9uYWwsIGV4YW1wbGU6IGAnbXktcnVsZSdgKS5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3NvdXJjZV1cbiAqICAgTmFtZXNwYWNlIG9mIHdobyBzZW50IHRoZSBtZXNzYWdlIChvcHRpb25hbCwgZXhhbXBsZTogYCdteS1wYWNrYWdlJ2ApLlxuICovXG5cbmltcG9ydCB7c3RyaW5naWZ5UG9zaXRpb259IGZyb20gJ3VuaXN0LXV0aWwtc3RyaW5naWZ5LXBvc2l0aW9uJ1xuXG4vKipcbiAqIE1lc3NhZ2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBWRmlsZU1lc3NhZ2UgZXh0ZW5kcyBFcnJvciB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBtZXNzYWdlIGZvciBgcmVhc29uYC5cbiAgICpcbiAgICogPiDwn6qmICoqTm90ZSoqOiBhbHNvIGhhcyBvYnNvbGV0ZSBzaWduYXR1cmVzLlxuICAgKlxuICAgKiBAb3ZlcmxvYWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvblxuICAgKiBAcGFyYW0ge09wdGlvbnMgfCBudWxsIHwgdW5kZWZpbmVkfSBbb3B0aW9uc11cbiAgICogQHJldHVybnNcbiAgICpcbiAgICogQG92ZXJsb2FkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb25cbiAgICogQHBhcmFtIHtOb2RlIHwgTm9kZUxpa2UgfCBudWxsIHwgdW5kZWZpbmVkfSBwYXJlbnRcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkfSBbb3JpZ2luXVxuICAgKiBAcmV0dXJuc1xuICAgKlxuICAgKiBAb3ZlcmxvYWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvblxuICAgKiBAcGFyYW0ge1BvaW50IHwgUG9zaXRpb24gfCBudWxsIHwgdW5kZWZpbmVkfSBwbGFjZVxuICAgKiBAcGFyYW0ge3N0cmluZyB8IG51bGwgfCB1bmRlZmluZWR9IFtvcmlnaW5dXG4gICAqIEByZXR1cm5zXG4gICAqXG4gICAqIEBvdmVybG9hZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29yaWdpbl1cbiAgICogQHJldHVybnNcbiAgICpcbiAgICogQG92ZXJsb2FkXG4gICAqIEBwYXJhbSB7RXJyb3IgfCBWRmlsZU1lc3NhZ2V9IGNhdXNlXG4gICAqIEBwYXJhbSB7Tm9kZSB8IE5vZGVMaWtlIHwgbnVsbCB8IHVuZGVmaW5lZH0gcGFyZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29yaWdpbl1cbiAgICogQHJldHVybnNcbiAgICpcbiAgICogQG92ZXJsb2FkXG4gICAqIEBwYXJhbSB7RXJyb3IgfCBWRmlsZU1lc3NhZ2V9IGNhdXNlXG4gICAqIEBwYXJhbSB7UG9pbnQgfCBQb3NpdGlvbiB8IG51bGwgfCB1bmRlZmluZWR9IHBsYWNlXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29yaWdpbl1cbiAgICogQHJldHVybnNcbiAgICpcbiAgICogQG92ZXJsb2FkXG4gICAqIEBwYXJhbSB7RXJyb3IgfCBWRmlsZU1lc3NhZ2V9IGNhdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29yaWdpbl1cbiAgICogQHJldHVybnNcbiAgICpcbiAgICogQHBhcmFtIHtFcnJvciB8IFZGaWxlTWVzc2FnZSB8IHN0cmluZ30gY2F1c2VPclJlYXNvblxuICAgKiAgIFJlYXNvbiBmb3IgbWVzc2FnZSwgc2hvdWxkIHVzZSBtYXJrZG93bi5cbiAgICogQHBhcmFtIHtOb2RlIHwgTm9kZUxpa2UgfCBPcHRpb25zIHwgUG9pbnQgfCBQb3NpdGlvbiB8IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWR9IFtvcHRpb25zT3JQYXJlbnRPclBsYWNlXVxuICAgKiAgIENvbmZpZ3VyYXRpb24gKG9wdGlvbmFsKS5cbiAgICogQHBhcmFtIHtzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkfSBbb3JpZ2luXVxuICAgKiAgIFBsYWNlIGluIGNvZGUgd2hlcmUgdGhlIG1lc3NhZ2Ugb3JpZ2luYXRlcyAoZXhhbXBsZTpcbiAgICogICBgJ215LXBhY2thZ2U6bXktcnVsZSdgIG9yIGAnbXktcnVsZSdgKS5cbiAgICogQHJldHVybnNcbiAgICogICBJbnN0YW5jZSBvZiBgVkZpbGVNZXNzYWdlYC5cbiAgICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG4gIGNvbnN0cnVjdG9yKGNhdXNlT3JSZWFzb24sIG9wdGlvbnNPclBhcmVudE9yUGxhY2UsIG9yaWdpbikge1xuICAgIHN1cGVyKClcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9uc09yUGFyZW50T3JQbGFjZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG9yaWdpbiA9IG9wdGlvbnNPclBhcmVudE9yUGxhY2VcbiAgICAgIG9wdGlvbnNPclBhcmVudE9yUGxhY2UgPSB1bmRlZmluZWRcbiAgICB9XG5cbiAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICBsZXQgcmVhc29uID0gJydcbiAgICAvKiogQHR5cGUge09wdGlvbnN9ICovXG4gICAgbGV0IG9wdGlvbnMgPSB7fVxuICAgIGxldCBsZWdhY3lDYXVzZSA9IGZhbHNlXG5cbiAgICBpZiAob3B0aW9uc09yUGFyZW50T3JQbGFjZSkge1xuICAgICAgLy8gUG9pbnQuXG4gICAgICBpZiAoXG4gICAgICAgICdsaW5lJyBpbiBvcHRpb25zT3JQYXJlbnRPclBsYWNlICYmXG4gICAgICAgICdjb2x1bW4nIGluIG9wdGlvbnNPclBhcmVudE9yUGxhY2VcbiAgICAgICkge1xuICAgICAgICBvcHRpb25zID0ge3BsYWNlOiBvcHRpb25zT3JQYXJlbnRPclBsYWNlfVxuICAgICAgfVxuICAgICAgLy8gUG9zaXRpb24uXG4gICAgICBlbHNlIGlmIChcbiAgICAgICAgJ3N0YXJ0JyBpbiBvcHRpb25zT3JQYXJlbnRPclBsYWNlICYmXG4gICAgICAgICdlbmQnIGluIG9wdGlvbnNPclBhcmVudE9yUGxhY2VcbiAgICAgICkge1xuICAgICAgICBvcHRpb25zID0ge3BsYWNlOiBvcHRpb25zT3JQYXJlbnRPclBsYWNlfVxuICAgICAgfVxuICAgICAgLy8gTm9kZS5cbiAgICAgIGVsc2UgaWYgKCd0eXBlJyBpbiBvcHRpb25zT3JQYXJlbnRPclBsYWNlKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgYW5jZXN0b3JzOiBbb3B0aW9uc09yUGFyZW50T3JQbGFjZV0sXG4gICAgICAgICAgcGxhY2U6IG9wdGlvbnNPclBhcmVudE9yUGxhY2UucG9zaXRpb25cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gT3B0aW9ucy5cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gey4uLm9wdGlvbnNPclBhcmVudE9yUGxhY2V9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjYXVzZU9yUmVhc29uID09PSAnc3RyaW5nJykge1xuICAgICAgcmVhc29uID0gY2F1c2VPclJlYXNvblxuICAgIH1cbiAgICAvLyBFcnJvci5cbiAgICBlbHNlIGlmICghb3B0aW9ucy5jYXVzZSAmJiBjYXVzZU9yUmVhc29uKSB7XG4gICAgICBsZWdhY3lDYXVzZSA9IHRydWVcbiAgICAgIHJlYXNvbiA9IGNhdXNlT3JSZWFzb24ubWVzc2FnZVxuICAgICAgb3B0aW9ucy5jYXVzZSA9IGNhdXNlT3JSZWFzb25cbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMucnVsZUlkICYmICFvcHRpb25zLnNvdXJjZSAmJiB0eXBlb2Ygb3JpZ2luID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgaW5kZXggPSBvcmlnaW4uaW5kZXhPZignOicpXG5cbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgb3B0aW9ucy5ydWxlSWQgPSBvcmlnaW5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbnMuc291cmNlID0gb3JpZ2luLnNsaWNlKDAsIGluZGV4KVxuICAgICAgICBvcHRpb25zLnJ1bGVJZCA9IG9yaWdpbi5zbGljZShpbmRleCArIDEpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFvcHRpb25zLnBsYWNlICYmIG9wdGlvbnMuYW5jZXN0b3JzICYmIG9wdGlvbnMuYW5jZXN0b3JzKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSBvcHRpb25zLmFuY2VzdG9yc1tvcHRpb25zLmFuY2VzdG9ycy5sZW5ndGggLSAxXVxuXG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIG9wdGlvbnMucGxhY2UgPSBwYXJlbnQucG9zaXRpb25cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydCA9XG4gICAgICBvcHRpb25zLnBsYWNlICYmICdzdGFydCcgaW4gb3B0aW9ucy5wbGFjZVxuICAgICAgICA/IG9wdGlvbnMucGxhY2Uuc3RhcnRcbiAgICAgICAgOiBvcHRpb25zLnBsYWNlXG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbiAgICAvKipcbiAgICAgKiBTdGFjayBvZiBhbmNlc3RvciBub2RlcyBzdXJyb3VuZGluZyB0aGUgbWVzc2FnZS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtBcnJheTxOb2RlPiB8IHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICB0aGlzLmFuY2VzdG9ycyA9IG9wdGlvbnMuYW5jZXN0b3JzIHx8IHVuZGVmaW5lZFxuXG4gICAgLyoqXG4gICAgICogT3JpZ2luYWwgZXJyb3IgY2F1c2Ugb2YgdGhlIG1lc3NhZ2UuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7RXJyb3IgfCB1bmRlZmluZWR9XG4gICAgICovXG4gICAgdGhpcy5jYXVzZSA9IG9wdGlvbnMuY2F1c2UgfHwgdW5kZWZpbmVkXG5cbiAgICAvKipcbiAgICAgKiBTdGFydGluZyBjb2x1bW4gb2YgbWVzc2FnZS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXIgfCB1bmRlZmluZWR9XG4gICAgICovXG4gICAgdGhpcy5jb2x1bW4gPSBzdGFydCA/IHN0YXJ0LmNvbHVtbiA6IHVuZGVmaW5lZFxuXG4gICAgLyoqXG4gICAgICogU3RhdGUgb2YgcHJvYmxlbS5cbiAgICAgKlxuICAgICAqICogYHRydWVgIOKAlCBlcnJvciwgZmlsZSBub3QgdXNhYmxlXG4gICAgICogKiBgZmFsc2VgIOKAlCB3YXJuaW5nLCBjaGFuZ2UgbWF5IGJlIG5lZWRlZFxuICAgICAqICogYHVuZGVmaW5lZGAg4oCUIGNoYW5nZSBsaWtlbHkgbm90IG5lZWRlZFxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHRoaXMuZmF0YWwgPSB1bmRlZmluZWRcblxuICAgIC8qKlxuICAgICAqIFBhdGggb2YgYSBmaWxlICh1c2VkIHRocm91Z2hvdXQgdGhlIGBWRmlsZWAgZWNvc3lzdGVtKS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmcgfCB1bmRlZmluZWR9XG4gICAgICovXG4gICAgdGhpcy5maWxlXG5cbiAgICAvLyBGaWVsZCBmcm9tIGBFcnJvcmAuXG4gICAgLyoqXG4gICAgICogUmVhc29uIGZvciBtZXNzYWdlLlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1lc3NhZ2UgPSByZWFzb25cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0aW5nIGxpbmUgb2YgZXJyb3IuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyIHwgdW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHRoaXMubGluZSA9IHN0YXJ0ID8gc3RhcnQubGluZSA6IHVuZGVmaW5lZFxuXG4gICAgLy8gRmllbGQgZnJvbSBgRXJyb3JgLlxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZWQgcG9zaXRpb25hbCBpbmZvIG9mIG1lc3NhZ2UuXG4gICAgICpcbiAgICAgKiBPbiBub3JtYWwgZXJyb3JzLCB0aGlzIHdvdWxkIGJlIHNvbWV0aGluZyBsaWtlIGBQYXJzZUVycm9yYCwgYnVpdCBpblxuICAgICAqIGBWRmlsZWAgbWVzc2FnZXMgd2UgdXNlIHRoaXMgc3BhY2UgdG8gc2hvdyB3aGVyZSBhbiBlcnJvciBoYXBwZW5lZC5cbiAgICAgKi9cbiAgICB0aGlzLm5hbWUgPSBzdHJpbmdpZnlQb3NpdGlvbihvcHRpb25zLnBsYWNlKSB8fCAnMToxJ1xuXG4gICAgLyoqXG4gICAgICogUGxhY2Ugb2YgbWVzc2FnZS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtQb2ludCB8IFBvc2l0aW9uIHwgdW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHRoaXMucGxhY2UgPSBvcHRpb25zLnBsYWNlIHx8IHVuZGVmaW5lZFxuXG4gICAgLyoqXG4gICAgICogUmVhc29uIGZvciBtZXNzYWdlLCBzaG91bGQgdXNlIG1hcmtkb3duLlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnJlYXNvbiA9IHRoaXMubWVzc2FnZVxuXG4gICAgLyoqXG4gICAgICogQ2F0ZWdvcnkgb2YgbWVzc2FnZSAoZXhhbXBsZTogYCdteS1ydWxlJ2ApLlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZyB8IHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICB0aGlzLnJ1bGVJZCA9IG9wdGlvbnMucnVsZUlkIHx8IHVuZGVmaW5lZFxuXG4gICAgLyoqXG4gICAgICogTmFtZXNwYWNlIG9mIG1lc3NhZ2UgKGV4YW1wbGU6IGAnbXktcGFja2FnZSdgKS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmcgfCB1bmRlZmluZWR9XG4gICAgICovXG4gICAgdGhpcy5zb3VyY2UgPSBvcHRpb25zLnNvdXJjZSB8fCB1bmRlZmluZWRcblxuICAgIC8vIEZpZWxkIGZyb20gYEVycm9yYC5cbiAgICAvKipcbiAgICAgKiBTdGFjayBvZiBtZXNzYWdlLlxuICAgICAqXG4gICAgICogVGhpcyBpcyB1c2VkIGJ5IG5vcm1hbCBlcnJvcnMgdG8gc2hvdyB3aGVyZSBzb21ldGhpbmcgaGFwcGVuZWQgaW5cbiAgICAgKiBwcm9ncmFtbWluZyBjb2RlLCBpcnJlbGV2YW50IGZvciBgVkZpbGVgIG1lc3NhZ2VzLFxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnN0YWNrID1cbiAgICAgIGxlZ2FjeUNhdXNlICYmIG9wdGlvbnMuY2F1c2UgJiYgdHlwZW9mIG9wdGlvbnMuY2F1c2Uuc3RhY2sgPT09ICdzdHJpbmcnXG4gICAgICAgID8gb3B0aW9ucy5jYXVzZS5zdGFja1xuICAgICAgICA6ICcnXG5cbiAgICAvLyBUaGUgZm9sbG93aW5nIGZpZWxkcyBhcmUg4oCcd2VsbCBrbm93buKAnS5cbiAgICAvLyBOb3Qgc3RhbmRhcmQuXG4gICAgLy8gRmVlbCBmcmVlIHRvIGFkZCBvdGhlciBub24tc3RhbmRhcmQgZmllbGRzIHRvIHlvdXIgbWVzc2FnZXMuXG5cbiAgICAvKipcbiAgICAgKiBTcGVjaWZ5IHRoZSBzb3VyY2UgdmFsdWUgdGhhdOKAmXMgYmVpbmcgcmVwb3J0ZWQsIHdoaWNoIGlzIGRlZW1lZFxuICAgICAqIGluY29ycmVjdC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmcgfCB1bmRlZmluZWR9XG4gICAgICovXG4gICAgdGhpcy5hY3R1YWxcblxuICAgIC8qKlxuICAgICAqIFN1Z2dlc3QgYWNjZXB0YWJsZSB2YWx1ZXMgdGhhdCBjYW4gYmUgdXNlZCBpbnN0ZWFkIG9mIGBhY3R1YWxgLlxuICAgICAqXG4gICAgICogQHR5cGUge0FycmF5PHN0cmluZz4gfCB1bmRlZmluZWR9XG4gICAgICovXG4gICAgdGhpcy5leHBlY3RlZFxuXG4gICAgLyoqXG4gICAgICogTG9uZyBmb3JtIGRlc2NyaXB0aW9uIG9mIHRoZSBtZXNzYWdlICh5b3Ugc2hvdWxkIHVzZSBtYXJrZG93bikuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nIHwgdW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHRoaXMubm90ZVxuXG4gICAgLyoqXG4gICAgICogTGluayB0byBkb2NzIGZvciB0aGUgbWVzc2FnZS5cbiAgICAgKlxuICAgICAqID4g8J+RiSAqKk5vdGUqKjogdGhpcyBtdXN0IGJlIGFuIGFic29sdXRlIFVSTCB0aGF0IGNhbiBiZSBwYXNzZWQgYXMgYHhgXG4gICAgICogPiB0byBgbmV3IFVSTCh4KWAuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nIHwgdW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHRoaXMudXJsXG4gICAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbiAgfVxufVxuXG5WRmlsZU1lc3NhZ2UucHJvdG90eXBlLmZpbGUgPSAnJ1xuVkZpbGVNZXNzYWdlLnByb3RvdHlwZS5uYW1lID0gJydcblZGaWxlTWVzc2FnZS5wcm90b3R5cGUucmVhc29uID0gJydcblZGaWxlTWVzc2FnZS5wcm90b3R5cGUubWVzc2FnZSA9ICcnXG5WRmlsZU1lc3NhZ2UucHJvdG90eXBlLnN0YWNrID0gJydcblZGaWxlTWVzc2FnZS5wcm90b3R5cGUuY29sdW1uID0gdW5kZWZpbmVkXG5WRmlsZU1lc3NhZ2UucHJvdG90eXBlLmxpbmUgPSB1bmRlZmluZWRcblZGaWxlTWVzc2FnZS5wcm90b3R5cGUuYW5jZXN0b3JzID0gdW5kZWZpbmVkXG5WRmlsZU1lc3NhZ2UucHJvdG90eXBlLmNhdXNlID0gdW5kZWZpbmVkXG5WRmlsZU1lc3NhZ2UucHJvdG90eXBlLmZhdGFsID0gdW5kZWZpbmVkXG5WRmlsZU1lc3NhZ2UucHJvdG90eXBlLnBsYWNlID0gdW5kZWZpbmVkXG5WRmlsZU1lc3NhZ2UucHJvdG90eXBlLnJ1bGVJZCA9IHVuZGVmaW5lZFxuVkZpbGVNZXNzYWdlLnByb3RvdHlwZS5zb3VyY2UgPSB1bmRlZmluZWRcbiJdLCJuYW1lcyI6WyJzdHJpbmdpZnlQb3NpdGlvbiIsIlZGaWxlTWVzc2FnZSIsIkVycm9yIiwiY29uc3RydWN0b3IiLCJjYXVzZU9yUmVhc29uIiwib3B0aW9uc09yUGFyZW50T3JQbGFjZSIsIm9yaWdpbiIsInVuZGVmaW5lZCIsInJlYXNvbiIsIm9wdGlvbnMiLCJsZWdhY3lDYXVzZSIsInBsYWNlIiwiYW5jZXN0b3JzIiwicG9zaXRpb24iLCJjYXVzZSIsIm1lc3NhZ2UiLCJydWxlSWQiLCJzb3VyY2UiLCJpbmRleCIsImluZGV4T2YiLCJzbGljZSIsInBhcmVudCIsImxlbmd0aCIsInN0YXJ0IiwiY29sdW1uIiwiZmF0YWwiLCJmaWxlIiwibGluZSIsIm5hbWUiLCJzdGFjayIsImFjdHVhbCIsImV4cGVjdGVkIiwibm90ZSIsInVybCIsInByb3RvdHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/vfile-message/lib/index.js\n");

/***/ })

};
;