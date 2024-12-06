/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ \"./src/script.js\");\n\n\nlet l1 = new _script__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconsole.log(l1.size());\n\nl1.append(\"Chihuahua\");\nconsole.log(l1.size());\n\nl1.append(\"Pitbull\");\nconsole.log(l1.size());\n\nl1.append(\"Rotwieller\");\n\nl1.append(\"Belgium sheperd\");\n\n_script__WEBPACK_IMPORTED_MODULE_0__[\"default\"].append(\"Dorbamon\");\n\nl1.prepend(\"Husky\");\nl1.prepend(\"Golden retreiver\");\nconsole.log(l1.size());\nconsole.log(l1.view_head());\nconsole.log(l1.view_tail());\nconsole.log(l1.at_index(0));\nconsole.log(l1.at_index(1));\nconsole.log(l1.at_index(2));\nconsole.log(l1.at_index(20));\nl1.pop();\nconsole.log(l1.contains(\"Husky\"));\nconsole.log(l1.contains(\"Labrador\"));\nconsole.log(l1.contains(\"Dorbamon\"));\nconsole.log(l1.find(\"Dorbamon\"));\nconsole.log(l1.find(\"Pitbull\"));\nconsole.log(l1.find(\"Pomanarian\"));\nconsole.log(l1.to_string());\nlet l2 = new _script__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconsole.log(l2.to_string());\nl1.removeAt(1);\nconsole.log(l1.to_string());\nl1.removeAt(0);\nconsole.log(l1.to_string());\n\n//# sourceURL=webpack://linked-lists/./src/main.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass node{\n    constructor(value = null, next = null){\n        this.value = value;\n        this.next = next;\n    }\n}\n\nclass linkedList{\n\n    constructor(head = null){\n        this.head = head;\n    }\n\n    append(v) {\n        if(this.head == null){\n            this.head = new node(v,null);\n        }else if(this.head.next == null){\n            this.head.next = new node(v, null);\n        }else{\n            let n = this.head.next;\n            while(n.next !== null){\n                n = n.next;\n            }\n            n.next = new node(v, null);\n        }\n        return this.head;      \n    }\n\n    prepend(v){\n        if(this.head == null){\n            this.head = new node(v, null);\n        }else{\n            let new_node = new node(v, this.head);\n            this.head = new_node;\n        }\n        return this.head;\n    }\n\n    size(){\n        let n = this.head;\n        let count = 0;\n\n        while(n != null){\n            count++;\n            n = n.next;\n        }\n        \n        return count;\n    }\n\n    view_head(){\n        return this.head;\n    }\n\n    view_tail(){\n        let n = this.head;\n        while(n.next !== null){\n            n = n.next;\n        }\n        return n;\n    }\n\n    at_index(i){\n        let n = this.head;\n        let count = 0;\n        while(n !== null){\n            if(i == count){\n                return n;\n            }\n            n = n.next;\n            count++;\n        }\n        return null;\n    }\n\n    pop(){\n        let n = this.head;\n        while(n.next.next !== null){\n            n = n.next;\n        }\n        let pop_node = n.next;\n        n.next = null;\n        console.log(this.head);\n        console.log(pop_node);\n        return pop_node;\n    }\n\n    contains(v){\n        let n = this.head;\n        while(n !== null){\n            if(n.value == v){\n                return true;\n            }\n            n = n.next;\n        }\n        return false;\n    }\n\n    find(v){\n        let n = this.head;\n        let count = 0;\n        while(n !== null){\n            if(n.value == v){\n                return count;\n            }\n            n = n.next;\n            count++;\n        }\n        return null;\n    }\n\n    to_string(){\n        let n = this.head;\n        let sentence = \"\";\n        while(n != null){\n            sentence += \"(\" + n.value + \") -> \";\n            n = n.next;\n        }\n        sentence += null;\n        \n        return sentence;\n    }\n\n    insertAt(v,i){\n        let n = this.head;\n        let count = 0;\n        while(n !== null){\n            if(count == i){\n                let new_node = node(v, n.next);\n                n = new_node;\n                return this.head;\n            }\n            n = n.next;\n            count++;\n        }\n        return this.head;\n    }\n\n    removeAt(i){    \n        if(this.head == null){\n            return null;\n        }    \n        if(i === 0 ){\n            let temp = this.head.next;\n            this.head = temp;            \n        }else{\n            let n = this.head;\n            let count = 0;\n            i = i - 1;\n            while(n !== null){\n                if(count == i){\n                    let temp = n.next.next;\n                    n.next = temp;\n                }\n                n = n.next;\n                count++;\n            }\n        }\n        return this.head;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (linkedList);\n\n\n//# sourceURL=webpack://linked-lists/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;