import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

it("renders card", function () {
  render(<Card caption="caption" src="src" currNum="1" totalNum="1" />);
});

it("for snapshot", function () {
  const { container, debug } = render(
    <Card caption="caption" src="src" currNum="1" totalNum="1" />
  );
  expect(container).toMatchSnapshot();
});