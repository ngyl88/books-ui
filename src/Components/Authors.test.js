import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Authors from "./Authors";

it("renders title", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Authors />);

  const output = renderer.getRenderOutput();
  expect(output).toMatchSnapshot();
});

it("renders title and list of authors after component mounts", async () => {
  fetch.mockResponseOnce(
    JSON.stringify([
      {
        _id: "20000001",
        name: "author 1"
      }
    ])
  );

  const renderer = new ShallowRenderer();
  renderer.render(<Authors />);

  const instance = renderer.getMountedInstance();
  await instance.componentDidMount();

  const output = renderer.getRenderOutput();
  expect(output).toMatchSnapshot();
});
