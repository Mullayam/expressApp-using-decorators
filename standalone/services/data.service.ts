import { Injectable } from "../../src/common";

@Injectable()
export class DataProvider {
  data() {
    return { hello: 'world' };
  }
}