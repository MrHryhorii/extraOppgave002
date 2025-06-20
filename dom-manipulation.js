function createAndAppendElement(parent, tag, attributes, children) {
    const element = document.createElement(tag);
    for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
    }
    for (const child of children) {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    }
    parent.appendChild(element);
    return element;
}

function clearBodyElement() {
    const body = document.body;
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
}