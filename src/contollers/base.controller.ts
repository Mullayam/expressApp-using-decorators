import { Controller, Get } from '../app'
import { DataProvider } from '../services';

@Controller('/')
export class BaseController {
  constructor(private dataProvider: DataProvider) { }


  @Get('/')
  index() {
    return this.dataProvider.data();
  }

}
