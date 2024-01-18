"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-factory-space";
exports.ids = ["vendor-chunks/micromark-factory-space"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-factory-space/dev/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark-factory-space/dev/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   factorySpace: () => (/* binding */ factorySpace)\n/* harmony export */ });\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-character */ \"(ssr)/./node_modules/micromark-util-character/dev/index.js\");\n/**\n * @typedef {import('micromark-util-types').Effects} Effects\n * @typedef {import('micromark-util-types').State} State\n * @typedef {import('micromark-util-types').TokenType} TokenType\n */ \n// To do: implement `spaceOrTab`, `spaceOrTabMinMax`, `spaceOrTabWithOptions`.\n/**\n * Parse spaces and tabs.\n *\n * There is no `nok` parameter:\n *\n * *   spaces in markdown are often optional, in which case this factory can be\n *     used and `ok` will be switched to whether spaces were found or not\n * *   one line ending or space can be detected with `markdownSpace(code)` right\n *     before using `factorySpace`\n *\n * ###### Examples\n *\n * Where `␉` represents a tab (plus how much it expands) and `␠` represents a\n * single space.\n *\n * ```markdown\n * ␉\n * ␠␠␠␠\n * ␉␠\n * ```\n *\n * @param {Effects} effects\n *   Context.\n * @param {State} ok\n *   State switched to when successful.\n * @param {TokenType} type\n *   Type (`' \\t'`).\n * @param {number | undefined} [max=Infinity]\n *   Max (exclusive).\n * @returns {State}\n *   Start state.\n */ function factorySpace(effects, ok, type, max) {\n    const limit = max ? max - 1 : Number.POSITIVE_INFINITY;\n    let size = 0;\n    return start;\n    /** @type {State} */ function start(code) {\n        if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_0__.markdownSpace)(code)) {\n            effects.enter(type);\n            return prefix(code);\n        }\n        return ok(code);\n    }\n    /** @type {State} */ function prefix(code) {\n        if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_0__.markdownSpace)(code) && size++ < limit) {\n            effects.consume(code);\n            return prefix;\n        }\n        effects.exit(type);\n        return ok(code);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWZhY3Rvcnktc3BhY2UvZGV2L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Q0FJQyxHQUVxRDtBQUV0RCw4RUFBOEU7QUFFOUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0ErQkMsR0FDTSxTQUFTQyxhQUFhQyxPQUFPLEVBQUVDLEVBQUUsRUFBRUMsSUFBSSxFQUFFQyxHQUFHO0lBQ2pELE1BQU1DLFFBQVFELE1BQU1BLE1BQU0sSUFBSUUsT0FBT0MsaUJBQWlCO0lBQ3RELElBQUlDLE9BQU87SUFFWCxPQUFPQztJQUVQLGtCQUFrQixHQUNsQixTQUFTQSxNQUFNQyxJQUFJO1FBQ2pCLElBQUlYLHVFQUFhQSxDQUFDVyxPQUFPO1lBQ3ZCVCxRQUFRVSxLQUFLLENBQUNSO1lBQ2QsT0FBT1MsT0FBT0Y7UUFDaEI7UUFFQSxPQUFPUixHQUFHUTtJQUNaO0lBRUEsa0JBQWtCLEdBQ2xCLFNBQVNFLE9BQU9GLElBQUk7UUFDbEIsSUFBSVgsdUVBQWFBLENBQUNXLFNBQVNGLFNBQVNILE9BQU87WUFDekNKLFFBQVFZLE9BQU8sQ0FBQ0g7WUFDaEIsT0FBT0U7UUFDVDtRQUVBWCxRQUFRYSxJQUFJLENBQUNYO1FBQ2IsT0FBT0QsR0FBR1E7SUFDWjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3Rvcmllcy8uL25vZGVfbW9kdWxlcy9taWNyb21hcmstZmFjdG9yeS1zcGFjZS9kZXYvaW5kZXguanM/NjFkMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuRWZmZWN0c30gRWZmZWN0c1xuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5TdGF0ZX0gU3RhdGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW5UeXBlfSBUb2tlblR5cGVcbiAqL1xuXG5pbXBvcnQge21hcmtkb3duU3BhY2V9IGZyb20gJ21pY3JvbWFyay11dGlsLWNoYXJhY3RlcidcblxuLy8gVG8gZG86IGltcGxlbWVudCBgc3BhY2VPclRhYmAsIGBzcGFjZU9yVGFiTWluTWF4YCwgYHNwYWNlT3JUYWJXaXRoT3B0aW9uc2AuXG5cbi8qKlxuICogUGFyc2Ugc3BhY2VzIGFuZCB0YWJzLlxuICpcbiAqIFRoZXJlIGlzIG5vIGBub2tgIHBhcmFtZXRlcjpcbiAqXG4gKiAqICAgc3BhY2VzIGluIG1hcmtkb3duIGFyZSBvZnRlbiBvcHRpb25hbCwgaW4gd2hpY2ggY2FzZSB0aGlzIGZhY3RvcnkgY2FuIGJlXG4gKiAgICAgdXNlZCBhbmQgYG9rYCB3aWxsIGJlIHN3aXRjaGVkIHRvIHdoZXRoZXIgc3BhY2VzIHdlcmUgZm91bmQgb3Igbm90XG4gKiAqICAgb25lIGxpbmUgZW5kaW5nIG9yIHNwYWNlIGNhbiBiZSBkZXRlY3RlZCB3aXRoIGBtYXJrZG93blNwYWNlKGNvZGUpYCByaWdodFxuICogICAgIGJlZm9yZSB1c2luZyBgZmFjdG9yeVNwYWNlYFxuICpcbiAqICMjIyMjIyBFeGFtcGxlc1xuICpcbiAqIFdoZXJlIGDikIlgIHJlcHJlc2VudHMgYSB0YWIgKHBsdXMgaG93IG11Y2ggaXQgZXhwYW5kcykgYW5kIGDikKBgIHJlcHJlc2VudHMgYVxuICogc2luZ2xlIHNwYWNlLlxuICpcbiAqIGBgYG1hcmtkb3duXG4gKiDikIlcbiAqIOKQoOKQoOKQoOKQoFxuICog4pCJ4pCgXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0VmZmVjdHN9IGVmZmVjdHNcbiAqICAgQ29udGV4dC5cbiAqIEBwYXJhbSB7U3RhdGV9IG9rXG4gKiAgIFN0YXRlIHN3aXRjaGVkIHRvIHdoZW4gc3VjY2Vzc2Z1bC5cbiAqIEBwYXJhbSB7VG9rZW5UeXBlfSB0eXBlXG4gKiAgIFR5cGUgKGAnIFxcdCdgKS5cbiAqIEBwYXJhbSB7bnVtYmVyIHwgdW5kZWZpbmVkfSBbbWF4PUluZmluaXR5XVxuICogICBNYXggKGV4Y2x1c2l2ZSkuXG4gKiBAcmV0dXJucyB7U3RhdGV9XG4gKiAgIFN0YXJ0IHN0YXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmFjdG9yeVNwYWNlKGVmZmVjdHMsIG9rLCB0eXBlLCBtYXgpIHtcbiAgY29uc3QgbGltaXQgPSBtYXggPyBtYXggLSAxIDogTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZXG4gIGxldCBzaXplID0gMFxuXG4gIHJldHVybiBzdGFydFxuXG4gIC8qKiBAdHlwZSB7U3RhdGV9ICovXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5lbnRlcih0eXBlKVxuICAgICAgcmV0dXJuIHByZWZpeChjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBvayhjb2RlKVxuICB9XG5cbiAgLyoqIEB0eXBlIHtTdGF0ZX0gKi9cbiAgZnVuY3Rpb24gcHJlZml4KGNvZGUpIHtcbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSAmJiBzaXplKysgPCBsaW1pdCkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gcHJlZml4XG4gICAgfVxuXG4gICAgZWZmZWN0cy5leGl0KHR5cGUpXG4gICAgcmV0dXJuIG9rKGNvZGUpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJtYXJrZG93blNwYWNlIiwiZmFjdG9yeVNwYWNlIiwiZWZmZWN0cyIsIm9rIiwidHlwZSIsIm1heCIsImxpbWl0IiwiTnVtYmVyIiwiUE9TSVRJVkVfSU5GSU5JVFkiLCJzaXplIiwic3RhcnQiLCJjb2RlIiwiZW50ZXIiLCJwcmVmaXgiLCJjb25zdW1lIiwiZXhpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-factory-space/dev/index.js\n");

/***/ })

};
;