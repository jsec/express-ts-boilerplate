import { ClassConstructor } from 'class-transformer';
import { IocAdapter } from 'routing-controllers';
import { DependencyContainer } from 'tsyringe';

export class TsyringeAdapter implements IocAdapter {
  constructor(private readonly container: DependencyContainer) { }

  get<T>(myClass: ClassConstructor<T>): T {
    const childContainer = this.container.createChildContainer();
    return childContainer.resolve<T>(myClass);
  }
}
