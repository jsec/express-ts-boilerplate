import { ExampleController } from "../../src/example/example.controller";
import { container, expect } from "../harness";

describe("Example Controller", () => {
  // TODO: figure out how to get access to this without
  // using a describe-scoped variable
  const controller = container.resolve(ExampleController);

  it("should return the value from the repository", () => {
    const result = controller.get();

    expect(result).to.deep.equal({
      id: 1,
      value: "some value",
    });
  });
});
