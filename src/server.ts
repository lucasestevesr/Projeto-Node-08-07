import express from "express" 
import cors from "cors"
import router from "./routers"

export class App {
    private express: express.Application
    private port = 5000
    constructor () {
        this.express = express()
        this.listen()
        this.middlewares() 
    }
    public exportApp(): express.Application {
        return this.express
    }
    
    private middlewares(): void {
        this.express.use(express.json())
        this.express.use(cors())
        this.express.use(router)
    }

    private listen(): void {
        this.express.listen(this.port, () => {
            console.log(`Server running at ${this.port}`)
        })
    }
}