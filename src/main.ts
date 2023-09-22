import { setEventListeners } from "./utils/event-listener";
import { Router } from "./utils/router";

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




