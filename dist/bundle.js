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

/***/ "./src/components/app/app.component.ts":
/*!*********************************************!*\
  !*** ./src/components/app/app.component.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AppComponent = void 0;\nconst decorators_1 = __webpack_require__(/*! ../../decorators */ \"./src/decorators.ts\");\nlet AppComponent = class AppComponent {\n};\nexports.AppComponent = AppComponent;\nexports.AppComponent = AppComponent = __decorate([\n    (0, decorators_1.Component)({\n        template: `\r\n        <h1>App Component</h1>\r\n        <button route=\"home\">Go to Home</button>\r\n        <button route=\"data-binding\">Go to Data Binding</button>\r\n        <button route=\"test\">Test</button>\r\n        `\n    })\n], AppComponent);\n\n\n//# sourceURL=webpack://my-spa/./src/components/app/app.component.ts?");

/***/ }),

/***/ "./src/components/data-binding/data-binding.component.ts":
/*!***************************************************************!*\
  !*** ./src/components/data-binding/data-binding.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.DataBindingComponent = void 0;\nconst decorators_1 = __webpack_require__(/*! ../../decorators */ \"./src/decorators.ts\");\nlet DataBindingComponent = class DataBindingComponent {\n    constructor() {\n        this.data = \"\";\n        this.setupBindings();\n    }\n    setupBindings() {\n        const inputElement = document.getElementById(\"dataInput\");\n        if (inputElement) {\n            inputElement.addEventListener(\"input\", (e) => {\n                this.data = e.target.value;\n            });\n        }\n        const logButton = document.getElementById(\"logButton\");\n        if (logButton) {\n            logButton.addEventListener(\"click\", () => {\n                this.logData();\n            });\n        }\n    }\n    logData() {\n        console.log(this.data);\n    }\n};\nexports.DataBindingComponent = DataBindingComponent;\nexports.DataBindingComponent = DataBindingComponent = __decorate([\n    (0, decorators_1.Component)({\n        template: `\r\n    <h1>Two-way Binding Example</h1>\r\n    <input id=\"dataInput\" type=\"text\"/>\r\n    <button id=\"logButton\">Log Data</button>\r\n  `\n    }),\n    __metadata(\"design:paramtypes\", [])\n], DataBindingComponent);\n\n\n//# sourceURL=webpack://my-spa/./src/components/data-binding/data-binding.component.ts?");

/***/ }),

/***/ "./src/components/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/components/home/home.component.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.HomeComponent = void 0;\nconst decorators_1 = __webpack_require__(/*! ../../decorators */ \"./src/decorators.ts\");\nlet HomeComponent = class HomeComponent {\n};\nexports.HomeComponent = HomeComponent;\nexports.HomeComponent = HomeComponent = __decorate([\n    (0, decorators_1.Component)({\n        templateUrl: '/src/components/home/home.component.html'\n    })\n], HomeComponent);\n\n\n//# sourceURL=webpack://my-spa/./src/components/home/home.component.ts?");

/***/ }),

/***/ "./src/components/test/test.component.ts":
/*!***********************************************!*\
  !*** ./src/components/test/test.component.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.TestComponent = void 0;\nconst decorators_1 = __webpack_require__(/*! ../../decorators */ \"./src/decorators.ts\");\nlet TestComponent = class TestComponent {\n};\nexports.TestComponent = TestComponent;\nexports.TestComponent = TestComponent = __decorate([\n    (0, decorators_1.Component)({\n        templateUrl: \"./test.component.html\"\n    })\n], TestComponent);\n\n\n//# sourceURL=webpack://my-spa/./src/components/test/test.component.ts?");

/***/ }),

/***/ "./src/decorators.ts":
/*!***************************!*\
  !*** ./src/decorators.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Component = void 0;\nfunction Component(options) {\n    return function (constructor) {\n        constructor.prototype.template = options.template;\n        constructor.prototype.templateUrl = options.templateUrl;\n    };\n}\nexports.Component = Component;\n\n\n//# sourceURL=webpack://my-spa/./src/decorators.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst app_component_1 = __webpack_require__(/*! ./components/app/app.component */ \"./src/components/app/app.component.ts\");\nconst data_binding_component_1 = __webpack_require__(/*! ./components/data-binding/data-binding.component */ \"./src/components/data-binding/data-binding.component.ts\");\nconst home_component_1 = __webpack_require__(/*! ./components/home/home.component */ \"./src/components/home/home.component.ts\");\nconst test_component_1 = __webpack_require__(/*! ./components/test/test.component */ \"./src/components/test/test.component.ts\");\nfunction fetchTemplate(url) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const response = yield fetch(url);\n        const text = yield response.text();\n        return text;\n    });\n}\nclass Router {\n    static navigate(component) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const appRoot = document.getElementById(\"app\");\n            if (appRoot) {\n                let template = new component().template;\n                if (new component().templateUrl) {\n                    template = yield fetchTemplate(new component().templateUrl);\n                }\n                appRoot.innerHTML = template;\n                new component();\n            }\n        });\n    }\n    static route(path) {\n        if (path == \"home\")\n            return home_component_1.HomeComponent;\n        else if (path == \"data-binding\")\n            return data_binding_component_1.DataBindingComponent;\n        else if (path == \"test\")\n            return test_component_1.TestComponent;\n        return app_component_1.AppComponent;\n    }\n}\nwindow.addEventListener(\"load\", () => __awaiter(void 0, void 0, void 0, function* () {\n    yield Router.navigate(app_component_1.AppComponent);\n    const routeElements = document.querySelectorAll(\"[route]\");\n    routeElements.forEach((el) => {\n        el.addEventListener(\"click\", (e) => __awaiter(void 0, void 0, void 0, function* () {\n            const route = e.currentTarget.getAttribute(\"route\");\n            if (route) {\n                const component = Router.route(route);\n                yield Router.navigate(component);\n            }\n        }));\n    });\n}));\n\n\n//# sourceURL=webpack://my-spa/./src/main.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;