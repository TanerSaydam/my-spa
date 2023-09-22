import { processDirectives } from "./directives";

export function traverseDOM(rootElement: Element, context: any) {
    const elements = rootElement.querySelectorAll('*');  
    elements.forEach((element) => {
      processDirectives(element, context);
    });
  }