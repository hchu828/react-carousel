import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

it("smoke test", function () {
  render(<Card caption="caption" src="src" currNum="1" totalNum="1" />);
});

it("for snapshot", function () {
  const { container } = render(
    <Card caption="caption" src="src" currNum="1" totalNum="1" />
  );
  expect(container).toMatchSnapshot();
});

it("card renders correctly", function () {
  const { container } = render(
    <Card caption="caption" src="src" currNum="1" totalNum="1" />
  );

  const img = container.querySelector('img');

  expect(img.getAttribute("alt")).toEqual("caption");
  expect(img.getAttribute("src")).toContain("src");
  expect(container).toContainHTML("Image 1 of 1");
});