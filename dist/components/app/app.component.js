"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
const decorators_1 = require("../../decorators");
let AppComponent = class AppComponent {
};
exports.AppComponent = AppComponent;
exports.AppComponent = AppComponent = __decorate([
    (0, decorators_1.Component)({
        template: `
        <h1>App Component</h1>
        <button route="home">Go to Home</button>
        <button route="data-binding">Go to Data Binding</button>
        `
    })
], AppComponent);
