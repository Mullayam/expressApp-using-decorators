import { Controller, Get } from '../../src/server/express/router' 
import { InternalServerError, NotFoundError } from '../../src';
import { RequestMiddleware } from '../middlewares'
import { DataProvider } from '../services';

@Controller('/', [RequestMiddleware])
export class BaseController {
  constructor(private dataProvider: DataProvider) {}
    
  
  @Get('/')
  index() {
    return  this.dataProvider.data();
  }

  @Get('/not-found-error')
  notFoundError() {
    throw new NotFoundError();
  }

  @Get('/internal-server-error')
  internalServerError() {
    throw new InternalServerError();
  }
}
