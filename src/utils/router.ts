import { routeResolver } from "../routeResolver";
import { originalElements } from "./directives";
import { setEventListeners } from "./event-listener";
import { fetchTemplate } from "./fetch-template";

export class Router {
    static async navigate(component: any, path: string) {
      const appRoot = document.getElementById("app");
      if (appRoot) {
        let template = new component().template;
        if (new component().templateUrl) {
          template = await fetchTemplate(new component().templateUrl);
        }
        appRoot.innerHTML = template;
        new component();        
        setEventListeners();        
      }
    }
  
    static route(path: string): any {
        originalElements.clear();
        return routeResolver(path);
    }
  }