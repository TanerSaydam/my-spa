"use strict";
function Component(options) {
    return function (constructor) {
        constructor.prototype.template = options.template;
        constructor.prototype.templateUrl = options.templateUrl;
    };
}
