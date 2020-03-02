
import Start from './pages/Start/Start.js';

const app = () => {

    const world = "WORLD";
    let hej = "HEJHEJ";
    const yo = () => {
        return `
        hej = 1337;
        alert(hej)
        `;
    }
    return(`hej <div onClick="${yo()}">${hej}</div>`)

    //return ();
    //  return (`${Start()}`);

};

export default app;