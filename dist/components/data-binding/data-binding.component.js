"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBindingComponent = void 0;
let DataBindingComponent = class DataBindingComponent {
    constructor() {
        this.data = "";
        this.setupBindings();
    }
    setupBindings() {
        const inputElement = document.getElementById("dataInput");
        if (inputElement) {
            inputElement.addEventListener("input", (e) => {
                this.data = e.target.value;
            });
        }
        const logButton = document.getElementById("logButton");
        if (logButton) {
            logButton.addEventListener("click", () => {
                this.logData();
            });
        }
    }
    logData() {
        console.log(this.data);
    }
};
exports.DataBindingComponent = DataBindingComponent;
exports.DataBindingComponent = DataBindingComponent = __decorate([
    Component({
        template: `
    <h1>Two-way Binding Example</h1>
    <input id="dataInput" type="text"/>
    <button id="logButton">Log Data</button>
  `
    }),
    __metadata("design:paramtypes", [])
], DataBindingComponent);
