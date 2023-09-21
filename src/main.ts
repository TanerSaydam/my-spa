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
            new component();
        }
    }

    static route(path: string):any{
        if(path == "home") return HomeComponent
        else if(path == "data-binding") return DataBindingComponent
        return AppComponent;
    }
}

@Component({
    template: `
        <h1>App Component</h1>
        <button route="home">Go to Home</button>
        <button route="data-binding">Go to Data Binding</button>
        `
})
class AppComponent {}
  
  @Component({
    templateUrl: './components/home.component.html'
  })
  class HomeComponent {}
  
  @Component({
    template: `
    <h1>Two-way Binding Example</h1>
    <input id="dataInput" type="text"/>
    <button id="logButton">Log Data</button>
  `
})

class DataBindingComponent{
 public data: string = "";

 constructor(){
    this.setupBindings();
 }

 setupBindings(){
    const inputElement = document.getElementById("dataInput") as HTMLInputElement
    if(inputElement){
        inputElement.addEventListener("input",(e)=> {
            this.data = (e.target as HTMLInputElement).value;
        });
    }

    const logButton = document.getElementById("logButton") as HTMLButtonElement;
    if(logButton){
        logButton.addEventListener("click", ()=> {
            this.logData();
        });
    }
 }

 logData(){
    console.log(this.data);
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

