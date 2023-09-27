import 'reflect-metadata';
import { AppModule } from "./app.module";
import { Application } from "./src";
import { HttpModule } from "./src/server/http";
import { json } from 'body-parser';
async function bootstrap() {
    const app = await Application.create(AppModule);
    const module = await app.inject<HttpModule>(HttpModule)   
    module.use(json());
    module.listen(3000);
    console.info('Express Server is running on port 3000');
}
bootstrap().catch(console.error);
