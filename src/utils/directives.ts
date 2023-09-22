export function processDirectives(element: Element, context: any) {
    const forAttr = element.getAttribute('myFor');
    if (forAttr) {
      const [itemStr, listStr] = forAttr.split(' in ');
      const list = context[listStr];
  
      const container = document.createElement('div');
      container.setAttribute('myForContainer', '');
  
      for (const item of list) {
        const newItem = element.cloneNode(true) as Element;
        newItem.removeAttribute('myFor');
  
        if (typeof item === 'object' && item !== null) {
          for (const [key, value] of Object.entries(item)) {
            newItem.innerHTML = newItem.innerHTML.replace(`{{${itemStr}.${key}}}`, value as string);
          }
        } else {
          newItem.innerHTML = newItem.innerHTML.replace(`{{${itemStr}}}`, item);
        }
  
        container.appendChild(newItem);
      }
  
      element.replaceWith(container);
    }
  }
  