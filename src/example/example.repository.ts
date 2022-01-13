import { autoInjectable } from "tsyringe";

@autoInjectable()
export class ExampleRepository {
  public getExample(): any {
    return {
      id: 1,
      value: 'some value'
    };
  }
}
