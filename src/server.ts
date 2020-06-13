import * as express from "express";
import * as http from "http";
import * as path from "path";
import * as socket from "socket.io";

class App {

    private app: express.Application;
    private io: socket
    constructor(private port: number) {
        this.app = express();
        this.initializeAssets();
        this.bindRoutes();
    }

    //binding directory to server static content
    private initializeAssets(): void {
        this.app.use(express.static(path.join(__dirname, "./../public")));
    }

    //binding API routes
    private bindRoutes() {
        this.app.get("/checknet", function (req: express.Request, res: express.Response) {
            res.json(
                { success: true }
            )
        })
    }
    //binding Sockets
    public bindSocketEvents() {
        this.io.on("connection", function (socket) {
            console.log("new socket connected : ", socket.id)
            socket.on("disconnect", function () {
                console.log("disconnected : ", socket.id)
            })
        })

    }

    public listen(): http.Server {
        console.log("Started listening on " + this.port);
        let server = http.createServer(this.app);
        this.io = socket(server)
        return server.listen(this.port);
    }
}

export default App