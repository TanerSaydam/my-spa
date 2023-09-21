"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_component_1 = require("./components/app/app.component");
const data_binding_component_1 = require("./components/data-binding/data-binding.component");
const home_component_1 = require("./components/home/home.component");
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
            return home_component_1.HomeComponent;
        else if (path == "data-binding")
            return data_binding_component_1.DataBindingComponent;
        return app_component_1.AppComponent;
    }
}
window.addEventListener("load", () => __awaiter(void 0, void 0, void 0, function* () {
    yield Router.navigate(app_component_1.AppComponent);
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
