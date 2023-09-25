import { Controller } from '../src';
import { Get, } from '../src/server/http';

@Controller("")
export class AppController {

  @Get("")
  index() {
    return { message: 'index' };
  }


}
