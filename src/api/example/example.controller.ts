import { notFound } from '@hapi/boom';
import { Controller, Get, Route } from 'tsoa';
import { autoInjectable } from 'tsyringe';
import { Example } from '../../db/models/example.model';
import { ExampleService } from './example.service';

@autoInjectable()
@Route('example')
export class ExampleController extends Controller {
  constructor(private readonly service: ExampleService) {
    super();
  }

  @Get()
  public async get(): Promise<Example> {
    const result = await this.service.getExample();

    if (!result) throw notFound();

    return result;
  }
}
