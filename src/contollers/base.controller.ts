import { Exception } from '@enjoys/exception';
import { Test } from 'src/middlewares';
import { Controller, Get } from 'src/modules//app'
import { DataProvider } from 'src/services';

@Controller('/',)
export class BaseController {
  constructor(private dataProvider: DataProvider) { }


  @Get('/',[Test])
  index() {
    throw new Error('Not implemented');
    return this.dataProvider.data();
  }
  @Get('/test')
  test() {
   
    return this.dataProvider.data();
  }

}
