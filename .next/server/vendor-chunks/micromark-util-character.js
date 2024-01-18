"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-character";
exports.ids = ["vendor-chunks/micromark-util-character"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-util-character/dev/index.js":
/*!************************************************************!*\
  !*** ./node_modules/micromark-util-character/dev/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   asciiAlpha: () => (/* binding */ asciiAlpha),\n/* harmony export */   asciiAlphanumeric: () => (/* binding */ asciiAlphanumeric),\n/* harmony export */   asciiAtext: () => (/* binding */ asciiAtext),\n/* harmony export */   asciiControl: () => (/* binding */ asciiControl),\n/* harmony export */   asciiDigit: () => (/* binding */ asciiDigit),\n/* harmony export */   asciiHexDigit: () => (/* binding */ asciiHexDigit),\n/* harmony export */   asciiPunctuation: () => (/* binding */ asciiPunctuation),\n/* harmony export */   markdownLineEnding: () => (/* binding */ markdownLineEnding),\n/* harmony export */   markdownLineEndingOrSpace: () => (/* binding */ markdownLineEndingOrSpace),\n/* harmony export */   markdownSpace: () => (/* binding */ markdownSpace),\n/* harmony export */   unicodePunctuation: () => (/* binding */ unicodePunctuation),\n/* harmony export */   unicodeWhitespace: () => (/* binding */ unicodeWhitespace)\n/* harmony export */ });\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/codes.js\");\n/**\n * @typedef {import('micromark-util-types').Code} Code\n */ \nconst unicodePunctuationInternal = regexCheck(/\\p{P}/u);\n/**\n * Check whether the character code represents an ASCII alpha (`a` through `z`,\n * case insensitive).\n *\n * An **ASCII alpha** is an ASCII upper alpha or ASCII lower alpha.\n *\n * An **ASCII upper alpha** is a character in the inclusive range U+0041 (`A`)\n * to U+005A (`Z`).\n *\n * An **ASCII lower alpha** is a character in the inclusive range U+0061 (`a`)\n * to U+007A (`z`).\n *\n * @param code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */ const asciiAlpha = regexCheck(/[A-Za-z]/);\n/**\n * Check whether the character code represents an ASCII alphanumeric (`a`\n * through `z`, case insensitive, or `0` through `9`).\n *\n * An **ASCII alphanumeric** is an ASCII digit (see `asciiDigit`) or ASCII alpha\n * (see `asciiAlpha`).\n *\n * @param code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */ const asciiAlphanumeric = regexCheck(/[\\dA-Za-z]/);\n/**\n * Check whether the character code represents an ASCII atext.\n *\n * atext is an ASCII alphanumeric (see `asciiAlphanumeric`), or a character in\n * the inclusive ranges U+0023 NUMBER SIGN (`#`) to U+0027 APOSTROPHE (`'`),\n * U+002A ASTERISK (`*`), U+002B PLUS SIGN (`+`), U+002D DASH (`-`), U+002F\n * SLASH (`/`), U+003D EQUALS TO (`=`), U+003F QUESTION MARK (`?`), U+005E\n * CARET (`^`) to U+0060 GRAVE ACCENT (`` ` ``), or U+007B LEFT CURLY BRACE\n * (`{`) to U+007E TILDE (`~`).\n *\n * See:\n * **\\[RFC5322]**:\n * [Internet Message Format](https://tools.ietf.org/html/rfc5322).\n * P. Resnick.\n * IETF.\n *\n * @param code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */ const asciiAtext = regexCheck(/[#-'*+\\--9=?A-Z^-~]/);\n/**\n * Check whether a character code is an ASCII control character.\n *\n * An **ASCII control** is a character in the inclusive range U+0000 NULL (NUL)\n * to U+001F (US), or U+007F (DEL).\n *\n * @param {Code} code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */ function asciiControl(code) {\n    return(// Special whitespace codes (which have negative values), C0 and Control\n    // character DEL\n    code !== null && (code < micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.space || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.del));\n}\n/**\n * Check whether the character code represents an ASCII digit (`0` through `9`).\n *\n * An **ASCII digit** is a character in the inclusive range U+0030 (`0`) to\n * U+0039 (`9`).\n *\n * @param code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */ const asciiDigit = regexCheck(/\\d/);\n/**\n * Check whether the character code represents an ASCII hex digit (`a` through\n * `f`, case insensitive, or `0` through `9`).\n *\n * An **ASCII hex digit** is an ASCII digit (see `asciiDigit`), ASCII upper hex\n * digit, or an ASCII lower hex digit.\n *\n * An **ASCII upper hex digit** is a character in the inclusive range U+0041\n * (`A`) to U+0046 (`F`).\n *\n * An **ASCII lower hex digit** is a character in the inclusive range U+0061\n * (`a`) to U+0066 (`f`).\n *\n * @param code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */ const asciiHexDigit = regexCheck(/[\\dA-Fa-f]/);\n/**\n * Check whether the character code represents ASCII punctuation.\n *\n * An **ASCII punctuation** is a character in the inclusive ranges U+0021\n * EXCLAMATION MARK (`!`) to U+002F SLASH (`/`), U+003A COLON (`:`) to U+0040 AT\n * SIGN (`@`), U+005B LEFT SQUARE BRACKET (`[`) to U+0060 GRAVE ACCENT\n * (`` ` ``), or U+007B LEFT CURLY BRACE (`{`) to U+007E TILDE (`~`).\n *\n * @param code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */ const asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);\n/**\n * Check whether a character code is a markdown line ending.\n *\n * A **markdown line ending** is the virtual characters M-0003 CARRIAGE RETURN\n * LINE FEED (CRLF), M-0004 LINE FEED (LF) and M-0005 CARRIAGE RETURN (CR).\n *\n * In micromark, the actual character U+000A LINE FEED (LF) and U+000D CARRIAGE\n * RETURN (CR) are replaced by these virtual characters depending on whether\n * they occurred together.\n *\n * @param {Code} code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */ function markdownLineEnding(code) {\n    return code !== null && code < micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.horizontalTab;\n}\n/**\n * Check whether a character code is a markdown line ending (see\n * `markdownLineEnding`) or markdown space (see `markdownSpace`).\n *\n * @param {Code} code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */ function markdownLineEndingOrSpace(code) {\n    return code !== null && (code < micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.nul || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.space);\n}\n/**\n * Check whether a character code is a markdown space.\n *\n * A **markdown space** is the concrete character U+0020 SPACE (SP) and the\n * virtual characters M-0001 VIRTUAL SPACE (VS) and M-0002 HORIZONTAL TAB (HT).\n *\n * In micromark, the actual character U+0009 CHARACTER TABULATION (HT) is\n * replaced by one M-0002 HORIZONTAL TAB (HT) and between 0 and 3 M-0001 VIRTUAL\n * SPACE (VS) characters, depending on the column at which the tab occurred.\n *\n * @param {Code} code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */ function markdownSpace(code) {\n    return code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.horizontalTab || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.virtualSpace || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.space;\n}\n// Size note: removing ASCII from the regex and using `asciiPunctuation` here\n// In fact adds to the bundle size.\n/**\n * Check whether the character code represents Unicode punctuation.\n *\n * A **Unicode punctuation** is a character in the Unicode `Pc` (Punctuation,\n * Connector), `Pd` (Punctuation, Dash), `Pe` (Punctuation, Close), `Pf`\n * (Punctuation, Final quote), `Pi` (Punctuation, Initial quote), `Po`\n * (Punctuation, Other), or `Ps` (Punctuation, Open) categories, or an ASCII\n * punctuation (see `asciiPunctuation`).\n *\n * See:\n * **\\[UNICODE]**:\n * [The Unicode Standard](https://www.unicode.org/versions/).\n * Unicode Consortium.\n *\n * @param {Code} code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */ function unicodePunctuation(code) {\n    return asciiPunctuation(code) || unicodePunctuationInternal(code);\n}\n/**\n * Check whether the character code represents Unicode whitespace.\n *\n * Note that this does handle micromark specific markdown whitespace characters.\n * See `markdownLineEndingOrSpace` to check that.\n *\n * A **Unicode whitespace** is a character in the Unicode `Zs` (Separator,\n * Space) category, or U+0009 CHARACTER TABULATION (HT), U+000A LINE FEED (LF),\n * U+000C (FF), or U+000D CARRIAGE RETURN (CR) (**\\[UNICODE]**).\n *\n * See:\n * **\\[UNICODE]**:\n * [The Unicode Standard](https://www.unicode.org/versions/).\n * Unicode Consortium.\n *\n * @param code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */ const unicodeWhitespace = regexCheck(/\\s/);\n/**\n * Create a code check from a regex.\n *\n * @param {RegExp} regex\n * @returns {(code: Code) => boolean}\n */ function regexCheck(regex) {\n    return check;\n    /**\n   * Check whether a code matches the bound regex.\n   *\n   * @param {Code} code\n   *   Character code.\n   * @returns {boolean}\n   *   Whether the character code matches the bound regex.\n   */ function check(code) {\n        return code !== null && code > -1 && regex.test(String.fromCharCode(code));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtY2hhcmFjdGVyL2Rldi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FFMEM7QUFFM0MsTUFBTUMsNkJBQTZCQyxXQUFXO0FBRTlDOzs7Ozs7Ozs7Ozs7Ozs7O0NBZ0JDLEdBQ00sTUFBTUMsYUFBYUQsV0FBVyxZQUFXO0FBRWhEOzs7Ozs7Ozs7OztDQVdDLEdBQ00sTUFBTUUsb0JBQW9CRixXQUFXLGNBQWE7QUFFekQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBb0JDLEdBQ00sTUFBTUcsYUFBYUgsV0FBVyx1QkFBc0I7QUFFM0Q7Ozs7Ozs7Ozs7Q0FVQyxHQUNNLFNBQVNJLGFBQWFDLElBQUk7SUFDL0IsT0FDRSx3RUFBd0U7SUFDeEUsZ0JBQWdCO0lBQ2hCQSxTQUFTLFFBQVNBLENBQUFBLE9BQU9QLHdEQUFLQSxDQUFDUSxLQUFLLElBQUlELFNBQVNQLHdEQUFLQSxDQUFDUyxHQUFHO0FBRTlEO0FBRUE7Ozs7Ozs7Ozs7Q0FVQyxHQUNNLE1BQU1DLGFBQWFSLFdBQVcsTUFBSztBQUUxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FpQkMsR0FDTSxNQUFNUyxnQkFBZ0JULFdBQVcsY0FBYTtBQUVyRDs7Ozs7Ozs7Ozs7O0NBWUMsR0FDTSxNQUFNVSxtQkFBbUJWLFdBQVcsa0JBQWlCO0FBRTVEOzs7Ozs7Ozs7Ozs7OztDQWNDLEdBQ00sU0FBU1csbUJBQW1CTixJQUFJO0lBQ3JDLE9BQU9BLFNBQVMsUUFBUUEsT0FBT1Asd0RBQUtBLENBQUNjLGFBQWE7QUFDcEQ7QUFFQTs7Ozs7Ozs7Q0FRQyxHQUNNLFNBQVNDLDBCQUEwQlIsSUFBSTtJQUM1QyxPQUFPQSxTQUFTLFFBQVNBLENBQUFBLE9BQU9QLHdEQUFLQSxDQUFDZ0IsR0FBRyxJQUFJVCxTQUFTUCx3REFBS0EsQ0FBQ1EsS0FBSztBQUNuRTtBQUVBOzs7Ozs7Ozs7Ozs7OztDQWNDLEdBQ00sU0FBU1MsY0FBY1YsSUFBSTtJQUNoQyxPQUNFQSxTQUFTUCx3REFBS0EsQ0FBQ2MsYUFBYSxJQUM1QlAsU0FBU1Asd0RBQUtBLENBQUNrQixZQUFZLElBQzNCWCxTQUFTUCx3REFBS0EsQ0FBQ1EsS0FBSztBQUV4QjtBQUVBLDZFQUE2RTtBQUM3RSxtQ0FBbUM7QUFDbkM7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWtCQyxHQUNNLFNBQVNXLG1CQUFtQlosSUFBSTtJQUNyQyxPQUFPSyxpQkFBaUJMLFNBQVNOLDJCQUEyQk07QUFDOUQ7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW1CQyxHQUNNLE1BQU1hLG9CQUFvQmxCLFdBQVcsTUFBSztBQUVqRDs7Ozs7Q0FLQyxHQUNELFNBQVNBLFdBQVdtQixLQUFLO0lBQ3ZCLE9BQU9DO0lBRVA7Ozs7Ozs7R0FPQyxHQUNELFNBQVNBLE1BQU1mLElBQUk7UUFDakIsT0FBT0EsU0FBUyxRQUFRQSxPQUFPLENBQUMsS0FBS2MsTUFBTUUsSUFBSSxDQUFDQyxPQUFPQyxZQUFZLENBQUNsQjtJQUN0RTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3Rvcmllcy8uL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1jaGFyYWN0ZXIvZGV2L2luZGV4LmpzPzZkYTMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkNvZGV9IENvZGVcbiAqL1xuXG5pbXBvcnQge2NvZGVzfSBmcm9tICdtaWNyb21hcmstdXRpbC1zeW1ib2wnXG5cbmNvbnN0IHVuaWNvZGVQdW5jdHVhdGlvbkludGVybmFsID0gcmVnZXhDaGVjaygvXFxwe1B9L3UpXG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgY2hhcmFjdGVyIGNvZGUgcmVwcmVzZW50cyBhbiBBU0NJSSBhbHBoYSAoYGFgIHRocm91Z2ggYHpgLFxuICogY2FzZSBpbnNlbnNpdGl2ZSkuXG4gKlxuICogQW4gKipBU0NJSSBhbHBoYSoqIGlzIGFuIEFTQ0lJIHVwcGVyIGFscGhhIG9yIEFTQ0lJIGxvd2VyIGFscGhhLlxuICpcbiAqIEFuICoqQVNDSUkgdXBwZXIgYWxwaGEqKiBpcyBhIGNoYXJhY3RlciBpbiB0aGUgaW5jbHVzaXZlIHJhbmdlIFUrMDA0MSAoYEFgKVxuICogdG8gVSswMDVBIChgWmApLlxuICpcbiAqIEFuICoqQVNDSUkgbG93ZXIgYWxwaGEqKiBpcyBhIGNoYXJhY3RlciBpbiB0aGUgaW5jbHVzaXZlIHJhbmdlIFUrMDA2MSAoYGFgKVxuICogdG8gVSswMDdBIChgemApLlxuICpcbiAqIEBwYXJhbSBjb2RlXG4gKiAgIENvZGUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqICAgV2hldGhlciBpdCBtYXRjaGVzLlxuICovXG5leHBvcnQgY29uc3QgYXNjaWlBbHBoYSA9IHJlZ2V4Q2hlY2soL1tBLVphLXpdLylcblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBjaGFyYWN0ZXIgY29kZSByZXByZXNlbnRzIGFuIEFTQ0lJIGFscGhhbnVtZXJpYyAoYGFgXG4gKiB0aHJvdWdoIGB6YCwgY2FzZSBpbnNlbnNpdGl2ZSwgb3IgYDBgIHRocm91Z2ggYDlgKS5cbiAqXG4gKiBBbiAqKkFTQ0lJIGFscGhhbnVtZXJpYyoqIGlzIGFuIEFTQ0lJIGRpZ2l0IChzZWUgYGFzY2lpRGlnaXRgKSBvciBBU0NJSSBhbHBoYVxuICogKHNlZSBgYXNjaWlBbHBoYWApLlxuICpcbiAqIEBwYXJhbSBjb2RlXG4gKiAgIENvZGUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqICAgV2hldGhlciBpdCBtYXRjaGVzLlxuICovXG5leHBvcnQgY29uc3QgYXNjaWlBbHBoYW51bWVyaWMgPSByZWdleENoZWNrKC9bXFxkQS1aYS16XS8pXG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgY2hhcmFjdGVyIGNvZGUgcmVwcmVzZW50cyBhbiBBU0NJSSBhdGV4dC5cbiAqXG4gKiBhdGV4dCBpcyBhbiBBU0NJSSBhbHBoYW51bWVyaWMgKHNlZSBgYXNjaWlBbHBoYW51bWVyaWNgKSwgb3IgYSBjaGFyYWN0ZXIgaW5cbiAqIHRoZSBpbmNsdXNpdmUgcmFuZ2VzIFUrMDAyMyBOVU1CRVIgU0lHTiAoYCNgKSB0byBVKzAwMjcgQVBPU1RST1BIRSAoYCdgKSxcbiAqIFUrMDAyQSBBU1RFUklTSyAoYCpgKSwgVSswMDJCIFBMVVMgU0lHTiAoYCtgKSwgVSswMDJEIERBU0ggKGAtYCksIFUrMDAyRlxuICogU0xBU0ggKGAvYCksIFUrMDAzRCBFUVVBTFMgVE8gKGA9YCksIFUrMDAzRiBRVUVTVElPTiBNQVJLIChgP2ApLCBVKzAwNUVcbiAqIENBUkVUIChgXmApIHRvIFUrMDA2MCBHUkFWRSBBQ0NFTlQgKGBgIGAgYGApLCBvciBVKzAwN0IgTEVGVCBDVVJMWSBCUkFDRVxuICogKGB7YCkgdG8gVSswMDdFIFRJTERFIChgfmApLlxuICpcbiAqIFNlZTpcbiAqICoqXFxbUkZDNTMyMl0qKjpcbiAqIFtJbnRlcm5ldCBNZXNzYWdlIEZvcm1hdF0oaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzUzMjIpLlxuICogUC4gUmVzbmljay5cbiAqIElFVEYuXG4gKlxuICogQHBhcmFtIGNvZGVcbiAqICAgQ29kZS5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogICBXaGV0aGVyIGl0IG1hdGNoZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBhc2NpaUF0ZXh0ID0gcmVnZXhDaGVjaygvWyMtJyorXFwtLTk9P0EtWl4tfl0vKVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgYSBjaGFyYWN0ZXIgY29kZSBpcyBhbiBBU0NJSSBjb250cm9sIGNoYXJhY3Rlci5cbiAqXG4gKiBBbiAqKkFTQ0lJIGNvbnRyb2wqKiBpcyBhIGNoYXJhY3RlciBpbiB0aGUgaW5jbHVzaXZlIHJhbmdlIFUrMDAwMCBOVUxMIChOVUwpXG4gKiB0byBVKzAwMUYgKFVTKSwgb3IgVSswMDdGIChERUwpLlxuICpcbiAqIEBwYXJhbSB7Q29kZX0gY29kZVxuICogICBDb2RlLlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKiAgIFdoZXRoZXIgaXQgbWF0Y2hlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzY2lpQ29udHJvbChjb2RlKSB7XG4gIHJldHVybiAoXG4gICAgLy8gU3BlY2lhbCB3aGl0ZXNwYWNlIGNvZGVzICh3aGljaCBoYXZlIG5lZ2F0aXZlIHZhbHVlcyksIEMwIGFuZCBDb250cm9sXG4gICAgLy8gY2hhcmFjdGVyIERFTFxuICAgIGNvZGUgIT09IG51bGwgJiYgKGNvZGUgPCBjb2Rlcy5zcGFjZSB8fCBjb2RlID09PSBjb2Rlcy5kZWwpXG4gIClcbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBjaGFyYWN0ZXIgY29kZSByZXByZXNlbnRzIGFuIEFTQ0lJIGRpZ2l0IChgMGAgdGhyb3VnaCBgOWApLlxuICpcbiAqIEFuICoqQVNDSUkgZGlnaXQqKiBpcyBhIGNoYXJhY3RlciBpbiB0aGUgaW5jbHVzaXZlIHJhbmdlIFUrMDAzMCAoYDBgKSB0b1xuICogVSswMDM5IChgOWApLlxuICpcbiAqIEBwYXJhbSBjb2RlXG4gKiAgIENvZGUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqICAgV2hldGhlciBpdCBtYXRjaGVzLlxuICovXG5leHBvcnQgY29uc3QgYXNjaWlEaWdpdCA9IHJlZ2V4Q2hlY2soL1xcZC8pXG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgY2hhcmFjdGVyIGNvZGUgcmVwcmVzZW50cyBhbiBBU0NJSSBoZXggZGlnaXQgKGBhYCB0aHJvdWdoXG4gKiBgZmAsIGNhc2UgaW5zZW5zaXRpdmUsIG9yIGAwYCB0aHJvdWdoIGA5YCkuXG4gKlxuICogQW4gKipBU0NJSSBoZXggZGlnaXQqKiBpcyBhbiBBU0NJSSBkaWdpdCAoc2VlIGBhc2NpaURpZ2l0YCksIEFTQ0lJIHVwcGVyIGhleFxuICogZGlnaXQsIG9yIGFuIEFTQ0lJIGxvd2VyIGhleCBkaWdpdC5cbiAqXG4gKiBBbiAqKkFTQ0lJIHVwcGVyIGhleCBkaWdpdCoqIGlzIGEgY2hhcmFjdGVyIGluIHRoZSBpbmNsdXNpdmUgcmFuZ2UgVSswMDQxXG4gKiAoYEFgKSB0byBVKzAwNDYgKGBGYCkuXG4gKlxuICogQW4gKipBU0NJSSBsb3dlciBoZXggZGlnaXQqKiBpcyBhIGNoYXJhY3RlciBpbiB0aGUgaW5jbHVzaXZlIHJhbmdlIFUrMDA2MVxuICogKGBhYCkgdG8gVSswMDY2IChgZmApLlxuICpcbiAqIEBwYXJhbSBjb2RlXG4gKiAgIENvZGUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqICAgV2hldGhlciBpdCBtYXRjaGVzLlxuICovXG5leHBvcnQgY29uc3QgYXNjaWlIZXhEaWdpdCA9IHJlZ2V4Q2hlY2soL1tcXGRBLUZhLWZdLylcblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBjaGFyYWN0ZXIgY29kZSByZXByZXNlbnRzIEFTQ0lJIHB1bmN0dWF0aW9uLlxuICpcbiAqIEFuICoqQVNDSUkgcHVuY3R1YXRpb24qKiBpcyBhIGNoYXJhY3RlciBpbiB0aGUgaW5jbHVzaXZlIHJhbmdlcyBVKzAwMjFcbiAqIEVYQ0xBTUFUSU9OIE1BUksgKGAhYCkgdG8gVSswMDJGIFNMQVNIIChgL2ApLCBVKzAwM0EgQ09MT04gKGA6YCkgdG8gVSswMDQwIEFUXG4gKiBTSUdOIChgQGApLCBVKzAwNUIgTEVGVCBTUVVBUkUgQlJBQ0tFVCAoYFtgKSB0byBVKzAwNjAgR1JBVkUgQUNDRU5UXG4gKiAoYGAgYCBgYCksIG9yIFUrMDA3QiBMRUZUIENVUkxZIEJSQUNFIChge2ApIHRvIFUrMDA3RSBUSUxERSAoYH5gKS5cbiAqXG4gKiBAcGFyYW0gY29kZVxuICogICBDb2RlLlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKiAgIFdoZXRoZXIgaXQgbWF0Y2hlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGFzY2lpUHVuY3R1YXRpb24gPSByZWdleENoZWNrKC9bIS0vOi1AWy1gey1+XS8pXG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciBhIGNoYXJhY3RlciBjb2RlIGlzIGEgbWFya2Rvd24gbGluZSBlbmRpbmcuXG4gKlxuICogQSAqKm1hcmtkb3duIGxpbmUgZW5kaW5nKiogaXMgdGhlIHZpcnR1YWwgY2hhcmFjdGVycyBNLTAwMDMgQ0FSUklBR0UgUkVUVVJOXG4gKiBMSU5FIEZFRUQgKENSTEYpLCBNLTAwMDQgTElORSBGRUVEIChMRikgYW5kIE0tMDAwNSBDQVJSSUFHRSBSRVRVUk4gKENSKS5cbiAqXG4gKiBJbiBtaWNyb21hcmssIHRoZSBhY3R1YWwgY2hhcmFjdGVyIFUrMDAwQSBMSU5FIEZFRUQgKExGKSBhbmQgVSswMDBEIENBUlJJQUdFXG4gKiBSRVRVUk4gKENSKSBhcmUgcmVwbGFjZWQgYnkgdGhlc2UgdmlydHVhbCBjaGFyYWN0ZXJzIGRlcGVuZGluZyBvbiB3aGV0aGVyXG4gKiB0aGV5IG9jY3VycmVkIHRvZ2V0aGVyLlxuICpcbiAqIEBwYXJhbSB7Q29kZX0gY29kZVxuICogICBDb2RlLlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKiAgIFdoZXRoZXIgaXQgbWF0Y2hlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSB7XG4gIHJldHVybiBjb2RlICE9PSBudWxsICYmIGNvZGUgPCBjb2Rlcy5ob3Jpem9udGFsVGFiXG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciBhIGNoYXJhY3RlciBjb2RlIGlzIGEgbWFya2Rvd24gbGluZSBlbmRpbmcgKHNlZVxuICogYG1hcmtkb3duTGluZUVuZGluZ2ApIG9yIG1hcmtkb3duIHNwYWNlIChzZWUgYG1hcmtkb3duU3BhY2VgKS5cbiAqXG4gKiBAcGFyYW0ge0NvZGV9IGNvZGVcbiAqICAgQ29kZS5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogICBXaGV0aGVyIGl0IG1hdGNoZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpIHtcbiAgcmV0dXJuIGNvZGUgIT09IG51bGwgJiYgKGNvZGUgPCBjb2Rlcy5udWwgfHwgY29kZSA9PT0gY29kZXMuc3BhY2UpXG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciBhIGNoYXJhY3RlciBjb2RlIGlzIGEgbWFya2Rvd24gc3BhY2UuXG4gKlxuICogQSAqKm1hcmtkb3duIHNwYWNlKiogaXMgdGhlIGNvbmNyZXRlIGNoYXJhY3RlciBVKzAwMjAgU1BBQ0UgKFNQKSBhbmQgdGhlXG4gKiB2aXJ0dWFsIGNoYXJhY3RlcnMgTS0wMDAxIFZJUlRVQUwgU1BBQ0UgKFZTKSBhbmQgTS0wMDAyIEhPUklaT05UQUwgVEFCIChIVCkuXG4gKlxuICogSW4gbWljcm9tYXJrLCB0aGUgYWN0dWFsIGNoYXJhY3RlciBVKzAwMDkgQ0hBUkFDVEVSIFRBQlVMQVRJT04gKEhUKSBpc1xuICogcmVwbGFjZWQgYnkgb25lIE0tMDAwMiBIT1JJWk9OVEFMIFRBQiAoSFQpIGFuZCBiZXR3ZWVuIDAgYW5kIDMgTS0wMDAxIFZJUlRVQUxcbiAqIFNQQUNFIChWUykgY2hhcmFjdGVycywgZGVwZW5kaW5nIG9uIHRoZSBjb2x1bW4gYXQgd2hpY2ggdGhlIHRhYiBvY2N1cnJlZC5cbiAqXG4gKiBAcGFyYW0ge0NvZGV9IGNvZGVcbiAqICAgQ29kZS5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogICBXaGV0aGVyIGl0IG1hdGNoZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXJrZG93blNwYWNlKGNvZGUpIHtcbiAgcmV0dXJuIChcbiAgICBjb2RlID09PSBjb2Rlcy5ob3Jpem9udGFsVGFiIHx8XG4gICAgY29kZSA9PT0gY29kZXMudmlydHVhbFNwYWNlIHx8XG4gICAgY29kZSA9PT0gY29kZXMuc3BhY2VcbiAgKVxufVxuXG4vLyBTaXplIG5vdGU6IHJlbW92aW5nIEFTQ0lJIGZyb20gdGhlIHJlZ2V4IGFuZCB1c2luZyBgYXNjaWlQdW5jdHVhdGlvbmAgaGVyZVxuLy8gSW4gZmFjdCBhZGRzIHRvIHRoZSBidW5kbGUgc2l6ZS5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgY2hhcmFjdGVyIGNvZGUgcmVwcmVzZW50cyBVbmljb2RlIHB1bmN0dWF0aW9uLlxuICpcbiAqIEEgKipVbmljb2RlIHB1bmN0dWF0aW9uKiogaXMgYSBjaGFyYWN0ZXIgaW4gdGhlIFVuaWNvZGUgYFBjYCAoUHVuY3R1YXRpb24sXG4gKiBDb25uZWN0b3IpLCBgUGRgIChQdW5jdHVhdGlvbiwgRGFzaCksIGBQZWAgKFB1bmN0dWF0aW9uLCBDbG9zZSksIGBQZmBcbiAqIChQdW5jdHVhdGlvbiwgRmluYWwgcXVvdGUpLCBgUGlgIChQdW5jdHVhdGlvbiwgSW5pdGlhbCBxdW90ZSksIGBQb2BcbiAqIChQdW5jdHVhdGlvbiwgT3RoZXIpLCBvciBgUHNgIChQdW5jdHVhdGlvbiwgT3BlbikgY2F0ZWdvcmllcywgb3IgYW4gQVNDSUlcbiAqIHB1bmN0dWF0aW9uIChzZWUgYGFzY2lpUHVuY3R1YXRpb25gKS5cbiAqXG4gKiBTZWU6XG4gKiAqKlxcW1VOSUNPREVdKio6XG4gKiBbVGhlIFVuaWNvZGUgU3RhbmRhcmRdKGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3ZlcnNpb25zLykuXG4gKiBVbmljb2RlIENvbnNvcnRpdW0uXG4gKlxuICogQHBhcmFtIHtDb2RlfSBjb2RlXG4gKiAgIENvZGUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqICAgV2hldGhlciBpdCBtYXRjaGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5pY29kZVB1bmN0dWF0aW9uKGNvZGUpIHtcbiAgcmV0dXJuIGFzY2lpUHVuY3R1YXRpb24oY29kZSkgfHwgdW5pY29kZVB1bmN0dWF0aW9uSW50ZXJuYWwoY29kZSlcbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBjaGFyYWN0ZXIgY29kZSByZXByZXNlbnRzIFVuaWNvZGUgd2hpdGVzcGFjZS5cbiAqXG4gKiBOb3RlIHRoYXQgdGhpcyBkb2VzIGhhbmRsZSBtaWNyb21hcmsgc3BlY2lmaWMgbWFya2Rvd24gd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLlxuICogU2VlIGBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlYCB0byBjaGVjayB0aGF0LlxuICpcbiAqIEEgKipVbmljb2RlIHdoaXRlc3BhY2UqKiBpcyBhIGNoYXJhY3RlciBpbiB0aGUgVW5pY29kZSBgWnNgIChTZXBhcmF0b3IsXG4gKiBTcGFjZSkgY2F0ZWdvcnksIG9yIFUrMDAwOSBDSEFSQUNURVIgVEFCVUxBVElPTiAoSFQpLCBVKzAwMEEgTElORSBGRUVEIChMRiksXG4gKiBVKzAwMEMgKEZGKSwgb3IgVSswMDBEIENBUlJJQUdFIFJFVFVSTiAoQ1IpICgqKlxcW1VOSUNPREVdKiopLlxuICpcbiAqIFNlZTpcbiAqICoqXFxbVU5JQ09ERV0qKjpcbiAqIFtUaGUgVW5pY29kZSBTdGFuZGFyZF0oaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvdmVyc2lvbnMvKS5cbiAqIFVuaWNvZGUgQ29uc29ydGl1bS5cbiAqXG4gKiBAcGFyYW0gY29kZVxuICogICBDb2RlLlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKiAgIFdoZXRoZXIgaXQgbWF0Y2hlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IHVuaWNvZGVXaGl0ZXNwYWNlID0gcmVnZXhDaGVjaygvXFxzLylcblxuLyoqXG4gKiBDcmVhdGUgYSBjb2RlIGNoZWNrIGZyb20gYSByZWdleC5cbiAqXG4gKiBAcGFyYW0ge1JlZ0V4cH0gcmVnZXhcbiAqIEByZXR1cm5zIHsoY29kZTogQ29kZSkgPT4gYm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gcmVnZXhDaGVjayhyZWdleCkge1xuICByZXR1cm4gY2hlY2tcblxuICAvKipcbiAgICogQ2hlY2sgd2hldGhlciBhIGNvZGUgbWF0Y2hlcyB0aGUgYm91bmQgcmVnZXguXG4gICAqXG4gICAqIEBwYXJhbSB7Q29kZX0gY29kZVxuICAgKiAgIENoYXJhY3RlciBjb2RlLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogICBXaGV0aGVyIHRoZSBjaGFyYWN0ZXIgY29kZSBtYXRjaGVzIHRoZSBib3VuZCByZWdleC5cbiAgICovXG4gIGZ1bmN0aW9uIGNoZWNrKGNvZGUpIHtcbiAgICByZXR1cm4gY29kZSAhPT0gbnVsbCAmJiBjb2RlID4gLTEgJiYgcmVnZXgudGVzdChTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpKVxuICB9XG59XG4iXSwibmFtZXMiOlsiY29kZXMiLCJ1bmljb2RlUHVuY3R1YXRpb25JbnRlcm5hbCIsInJlZ2V4Q2hlY2siLCJhc2NpaUFscGhhIiwiYXNjaWlBbHBoYW51bWVyaWMiLCJhc2NpaUF0ZXh0IiwiYXNjaWlDb250cm9sIiwiY29kZSIsInNwYWNlIiwiZGVsIiwiYXNjaWlEaWdpdCIsImFzY2lpSGV4RGlnaXQiLCJhc2NpaVB1bmN0dWF0aW9uIiwibWFya2Rvd25MaW5lRW5kaW5nIiwiaG9yaXpvbnRhbFRhYiIsIm1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UiLCJudWwiLCJtYXJrZG93blNwYWNlIiwidmlydHVhbFNwYWNlIiwidW5pY29kZVB1bmN0dWF0aW9uIiwidW5pY29kZVdoaXRlc3BhY2UiLCJyZWdleCIsImNoZWNrIiwidGVzdCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-util-character/dev/index.js\n");

/***/ })

};
;