import { TestMiddleware } from 'src/middlewares';
import { Controller, Get } from 'src/modules//app'
import { DataProvider } from 'src/services';

@Controller('/',)
export default class BaseController {
  constructor(private dataProvider: DataProvider) { }

  @Get('/',[TestMiddleware])
  index() {     
    return this.dataProvider.data();
  }
  @Get('/test')
  test() {   
    return this.dataProvider.data();
  }

}
