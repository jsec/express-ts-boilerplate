import { autoInjectable } from 'tsyringe';
import { Example } from '../../db/models/example.model';

@autoInjectable()
export class ExampleRepository {
  public async getExample(): Promise<Example | undefined> {
    return Example.query().first();
  }
}
