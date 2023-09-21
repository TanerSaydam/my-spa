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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function Component(options) {
    return function (constructor) {
        constructor.prototype.template = options.template;
        constructor.prototype.templateUrl = options.templateUrl;
    };
}
function fetchTemplate(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const text = yield response.text();
        return text;
    });
}
class Router {
    static navigate(component) {
        return __awaiter(this, void 0, void 0, function* () {
            const appRoot = document.getElementById("app");
            if (appRoot) {
                let template = new component().template;
                if (new component().templateUrl) {
                    template = yield fetchTemplate(new component().templateUrl);
                }
                appRoot.innerHTML = template;
                new component();
            }
        });
    }
    static route(path) {
        if (path == "home")
            return HomeComponent;
        else if (path == "data-binding")
            return DataBindingComponent;
        return AppComponent;
    }
}
let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    Component({
        template: `
        <h1>App Component</h1>
        <button route="home">Go to Home</button>
        <button route="data-binding">Go to Data Binding</button>
        `
    })
], AppComponent);
let HomeComponent = class HomeComponent {
};
HomeComponent = __decorate([
    Component({
        templateUrl: './components/home.component.html'
    })
], HomeComponent);
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
DataBindingComponent = __decorate([
    Component({
        template: `
    <h1>Two-way Binding Example</h1>
    <input id="dataInput" type="text"/>
    <button id="logButton">Log Data</button>
  `
    }),
    __metadata("design:paramtypes", [])
], DataBindingComponent);
window.addEventListener("load", () => __awaiter(void 0, void 0, void 0, function* () {
    yield Router.navigate(AppComponent);
    const routeElements = document.querySelectorAll("[route]");
    routeElements.forEach((el) => {
        el.addEventListener("click", (e) => __awaiter(void 0, void 0, void 0, function* () {
            const route = e.currentTarget.getAttribute("route");
            if (route) {
                const component = Router.route(route);
                yield Router.navigate(component);
            }
        }));
    });
}));
