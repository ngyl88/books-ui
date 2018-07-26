import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Books from "./Books";

it("renders title", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Books />);

  const output = renderer.getRenderOutput();
  expect(output).toMatchSnapshot();
});

it("renders title and booklist after component mounts", async () => {
  fetch.mockResponseOnce(
    JSON.stringify([
      {
        _id: "10000001",
        title: "Harry Potter 1",
        author: {
          _id: "20000001",
          name: "author 1"
        }
      },
      {
        _id: "10000002",
        title: "Harry Potter 2"
      }
    ])
  );

  const renderer = new ShallowRenderer();
  renderer.render(<Books />);

  const instance = renderer.getMountedInstance();
  await instance.componentDidMount();

  const output = renderer.getRenderOutput();
  expect(output).toMatchSnapshot();
});
