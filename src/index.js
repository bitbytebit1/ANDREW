import app from './app.js';

const component = () => {
    const element = document.createElement('div');

    element.innerHTML = app();

    return element;
}

document.body.appendChild(component()); 