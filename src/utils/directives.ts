export function processDirectives(element: Element, context: any) {
    const forAttr = element.getAttribute('myFor');
    if (forAttr) {        
      const [itemStr, listStr] = forAttr.split(' in ');
      const list = context[listStr];
      const container = document.createElement('div');
      
      for (const item of list) {
        const newItem = element.cloneNode(true) as Element;
        newItem.removeAttribute('myFor');
        newItem.innerHTML = newItem.innerHTML.replace(`{{${itemStr}}}`, item);
        container.appendChild(newItem);
      }
      
      element.replaceWith(container);
    }
  }
  