interface ComponentOptions{
    template?: string;
    templateUrl?: string;
}

function Component(options: ComponentOptions) {
    return function (constructor: any) {
      constructor.prototype.template = options.template;
      constructor.prototype.templateUrl = options.templateUrl;
    };
  }

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
        }
    }

    static route(path: string):any{
        if(path == "home") return HomeComponent

        return AppComponent;
    }
}

@Component({
    template: `<h1>App Component</h1><button route="home">Go to Home</button>`
})
class AppComponent {}
  
  @Component({
    templateUrl: './components/home.component.html'
  })
  class HomeComponent {}
  

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
  