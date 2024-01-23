import { Exception } from '@enjoys/exception';
import { Controller, Get } from 'src/modules//app'
import { DataProvider } from 'src/services';

@Controller('/',)
export default class TestController {
  constructor(private dataProvider: DataProvider) { }
 
  @Get('/test2')
  test() {   
    throw new Exception.HttpException({ name: "PAYLOAD_TOO_LARGE", message: "Something Went Wrong with Intercepting the Response", stack: {} })
  }

}
