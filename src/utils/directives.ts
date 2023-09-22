export const originalElements: Map<string, Element> = new Map();
let idCounter = 0;

export function processDirectives(element: Element, context: any) {
    let originalKey = element.getAttribute('myForOriginalKey');

    // Eğer orijinal anahtar yoksa, yeni bir tane oluştur ve element'e ekle
    if (!originalKey) {
        originalKey = `myFor-${idCounter++}`;
        element.setAttribute('myForOriginalKey', originalKey);
    }

    let forAttr = element.getAttribute('myFor');
    let originalElement = originalElements.get(originalKey);

    // Orijinal element varsa, onun 'myFor' attribute'unu kullan
    if (originalElement !== undefined) {
        forAttr = originalElement.getAttribute('myFor');
    }

    if (forAttr) {
        // Eğer element daha önce kaydedilmediyse, kaydet
        if (originalElement === undefined) {
            originalElements.set(originalKey, element.cloneNode(true) as Element);
            originalElement = originalElements.get(originalKey);
        }

        const [itemStr, listStr] = forAttr.split(' in ');
        const list = context[listStr];

        // Yeni bir container oluştur
        const container = document.createElement('div');
        container.setAttribute('myForContainer', '');
        container.setAttribute('myForOriginalKey', originalKey); // Orijinal anahtarı da container'a ekle

        for (const item of list) {
            const newItem = originalElement!.cloneNode(true) as Element;
            newItem.removeAttribute('myFor');
            newItem.setAttribute('myForOriginalKey', originalKey); // Orijinal anahtarı da yeni item'a ekle

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
