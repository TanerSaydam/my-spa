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
      history.pushState({ path }, '', '/' + path);
    }
  }

  static route(path: string): any {
    if (path == "home") return HomeComponent
    else if (path == "data-binding") return DataBindingComponent
    else if (path == "test") return TestComponent
    return AppComponent;
  }
}

const setEventListeners = () => {
  const clickHandler = async (e: Event) => {
    console.log(e);
    const route = (e.currentTarget as HTMLElement).getAttribute("route");
    if (route) {
      const component = Router.route(route);
      await Router.navigate(component, route);
    }
  };

  const routeElements = document.querySelectorAll("[route]");
  routeElements.forEach((el) => {
    el.removeEventListener("click", clickHandler); // Önceki event listener'ı kaldır
    el.addEventListener("click", clickHandler); // Yeni event listener eklenir
  });
};

window.addEventListener("load", async () => {
  const initialPath = window.location.pathname.replace('/', '');
  const initialComponent = Router.route(initialPath);
  await Router.navigate(initialComponent, initialPath);  

  setEventListeners();
  
  window.onpopstate = function (event) {
    if (event.state && event.state.path !== undefined) {
      const component = Router.route(event.state.path.replace('/', ''));     
      Router.navigate(component, event.state.path);
      setEventListeners();
    }
  };
});


// Geri veya ileri düğmesi tıklandığında




