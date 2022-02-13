import { ExampleService } from '../../src/api/example/example.service';
import { container, expect } from '../harness';

describe('Example Service', () => {
  // TODO: figure out how to get access to this without
  // using a describe-scoped variable
  const service = container.resolve(ExampleService);

  it('should return a value', async () => {
    const result = await service.getExample();

    expect(result).to.deep.equal({
      id: 1,
      value: 'value'
    });
  });
});
