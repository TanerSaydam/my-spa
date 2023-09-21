import { AppComponent } from "./components/app/app.component";
import { DataBindingComponent } from "./components/data-binding/data-binding.component";
import { HomeComponent } from "./components/home/home.component";


async function fetchTemplate(url: string): Promise<string> {
    const response = await fetch(url);
    const text = await response.text();
    return text;
}  

class Router {
    static async navigate(component: any){
        const appRoot = document.getElementById("app");
        if (appRoot) {
            let template = new component().template;
            if (new component().templateUrl) {
              template = await fetchTemplate(new component().templateUrl);
            }
            appRoot.innerHTML = template;
            new component();
        }
    }

    static route(path: string):any{
        if(path == "home") return HomeComponent
        else if(path == "data-binding") return DataBindingComponent
        return AppComponent;
    }
}  
  

  window.addEventListener("load", async () => {
    await Router.navigate(AppComponent);
  
    const routeElements = document.querySelectorAll("[route]");
    routeElements.forEach((el) => {
      el.addEventListener("click", async (e) => {
        const route = (e.currentTarget as HTMLElement).getAttribute("route");
        if (route) {
          const component = Router.route(route);
          await Router.navigate(component);
        }
      });
    });
}); 

