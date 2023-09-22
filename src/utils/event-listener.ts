import { Router } from "./router";

export const setEventListeners = () => {
    const clickHandler = async (e: Event) => {      
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