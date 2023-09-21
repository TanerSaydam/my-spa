interface ComponentOptions{
    template: string;
}

function Component(options: ComponentOptions){
    return function (constructor: any){
        constructor.prototype.template = options.template;
    };
}

class Router {
    static navigate(component: any){
        const appRoot = document.getElementById("app");
        if(appRoot){
            appRoot.innerHTML = new component().template;
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
class AppComponent {

}

@Component({
    template: "<h1>Home Component</h1>"
})
class HomeComponent{

}

window.addEventListener("load", ()=> {
    Router.navigate(AppComponent);

    const routeElements = document.querySelectorAll("[route]");
    routeElements.forEach((el)=> {
        el.addEventListener("click", (e)=> {
            const route = (e.currentTarget as HTMLElement).getAttribute("route");
            if(route){
                const component = Router.route(route);
                Router.navigate(component);
            }
        })
    })
})