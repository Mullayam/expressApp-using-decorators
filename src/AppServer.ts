
import express, { Application } from 'express';
import { Container, attachControllers, ERROR_MIDDLEWARE, } from 'src/modules/app';
import { DataProvider } from 'src/services';
import { ServerErrorHandler } from 'src/middlewares';
import { Controllers } from 'src/contollers';

const app: Application = express()

export class AppServer {

    private static PORT: number = 3000;

    private LoadConfig() {
        app.use(express.json());
        this.InitializeControllers()
    }
    private async InitializeControllers() {
        this.RegisterDependencies()
        await attachControllers(app, [...Controllers]);
    }
    private RegisterDependencies() {
        Container.provide([
            { provide: DataProvider, useClass: DataProvider },
            { provide: ERROR_MIDDLEWARE, useClass: ServerErrorHandler },
        ]);
    }
    private static async start() {
        this.prototype.LoadConfig()
        app.listen(AppServer.PORT, () => {
            console.info('Standalone Express Server is running on port 3000');
        });
    }
    static async run() {
        AppServer.start().catch(console.error);
    }
}
