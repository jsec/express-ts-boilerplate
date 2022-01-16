import { Controller, Get } from 'routing-controllers';
import { autoInjectable } from 'tsyringe';
import { ExampleRepository } from './example.repository';

@Controller()
@autoInjectable()
export class ExampleController {
  constructor(private readonly repository: ExampleRepository) { }

  @Get('/example')
  public get() {
    return this.repository.getExample();
  }
}
