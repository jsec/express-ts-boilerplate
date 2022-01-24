import { Controller, Get } from 'routing-controllers';
import { Example } from '../../db/models/example.model';
import { autoInjectable } from 'tsyringe';
import { ExampleRepository } from './example.repository';

@Controller()
@autoInjectable()
export class ExampleController {
  constructor(private readonly repository: ExampleRepository) { }

  @Get('/example')
  public get(): Promise<Example | undefined> {
    return this.repository.getExample();
  }
}
