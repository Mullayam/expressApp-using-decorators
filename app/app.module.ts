import { Module } from '../src';
import { HttpModule } from '../src/server/http';
import { AppController } from './app.controller';
import { ExpressAdapter } from "../src/server/http/express-adapter";


@Module({
  modules: [HttpModule.create(ExpressAdapter)],
  controllers: [AppController], 
})
export class AppModule { }
