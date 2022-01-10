import { Controller, Get } from "routing-controllers";

@Controller()
export class ExampleController {
  @Get("/example")
  public get() {
    return "this is an example get";
  }
}
