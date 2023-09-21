"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
function Component(options) {
    return function (constructor) {
        constructor.prototype.template = options.template;
        constructor.prototype.templateUrl = options.templateUrl;
    };
}
exports.Component = Component;
