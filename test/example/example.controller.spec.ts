import { ExampleController } from '../../src/api/example/example.controller';
import { container, expect } from '../harness';

describe('Example Controller', () => {
  // TODO: figure out how to get access to this without
  // using a describe-scoped variable
  const controller = container.resolve(ExampleController);

  describe('getAll', () => {
    it('should return all values from the service', async () => {
      const result = await controller.getAll();

      expect(result).to.deep.equal([
        {
          id: 1,
          value: 'value'
        }
      ]);
    });
  });

  describe('getById', () => {
    it('should return a single value from the service', async () => {
      const result = await controller.getById(1);

      expect(result).to.deep.equal({
        id: 1,
        value: 'value'
      });
    });
  });
});
