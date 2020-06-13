import App from "./server";

let app = new App(5001);
app.listen();
app.bindSocketEvents();