import { AppComponent } from "./components/app/app.component";
import { DataBindingComponent } from "./components/data-binding/data-binding.component";
import { HomeComponent } from "./components/home/home.component";
import { TestComponent } from "./components/test/test.component";


async function fetchTemplate(url: string): Promise<string> {
    const response = await fetch(url);
    const text = await response.text();
    return text;
}  

class Router {
    static async navigate(component: any, path: string){
        const appRoot = document.getElementById("app");
        if (appRoot) {
            let template = new component().template;
            if (new component().templateUrl) {
              template = await fetchTemplate(new component().templateUrl);
            }
            appRoot.innerHTML = template;
            new component();

            history.pushState({}, '', '/' + path)
        }
    }

    static route(path: string):any{
        if(path == "home") return HomeComponent
        else if(path == "data-binding") return DataBindingComponent
        else if(path == "test") return TestComponent
        return AppComponent;
    }
}  
  

  window.addEventListener("load", async () => {
    const initialPath = window.location.pathname.replace('/', '');
    const initialComponent = Router.route(initialPath);

    await Router.navigate(initialComponent,initialPath);
  
    const routeElements = document.querySelectorAll("[route]");
    routeElements.forEach((el) => {
      el.addEventListener("click", async (e) => {
        const route = (e.currentTarget as HTMLElement).getAttribute("route");
        if (route) {
          const component = Router.route(route);
          await Router.navigate(component, route);
        }
      });
    });
}); 

