import { autoInjectable } from 'tsyringe';
import { Example } from '../../db/models/example.model';

@autoInjectable()
export class ExampleService {
  public async getAll(): Promise<Example[] | undefined> {
    return Example.query();
  }

  public async getById(id: number): Promise<Example | undefined> {
    return Example.query().where('id', id).first();
  }
}
