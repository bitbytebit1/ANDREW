const app = (sHelloWorldString) => {
    
    if (!sHelloWorldString) {
        const world = "WORLD";
        return (`<h1>Hello ${world}!</h1>`);
    } else if (sHelloWorldString) {
        return (`<h1>${sHelloWorldString}!</h1>`);
    }

};

export default app;
