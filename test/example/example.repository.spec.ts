import { ExampleRepository } from "../../src/example/example.repository";
import { container, expect } from "../harness";

describe("Example Repository", () => {
  // TODO: figure out how to get access to this without
  // using a describe-scoped variable
  const repository = container.resolve(ExampleRepository);

  it("should return a value", () => {
    const result = repository.getExample();
    console.log(result);

    expect(result).to.equal({
      id: 1,
      value: "some value",
    });
  });
});
