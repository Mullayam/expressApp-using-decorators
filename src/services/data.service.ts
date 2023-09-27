import { Injectable } from "../common";

@Injectable()
export class DataProvider {
  data() {
    return { hello: 'world' };
  }
}