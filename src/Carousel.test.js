import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("renders carousel", function () {
  render(<Carousel photos={TEST_IMAGES} title="image for testing" />);
});

it("for snapshot", function () {
  const { container, debug } = render(
    <Carousel photos={TEST_IMAGES} title="image for testing" />
  );
  expect(container).toMatchSnapshot();
});

it("works when you click on the right arrow", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it("show previous image when left arrow is clicked", function () {
  const { container, debug } = render(
    <Carousel photos={TEST_IMAGES} title="image for testing" />
  );

  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  fireEvent.click(rightArrow);

  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();

  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();

  const leftArrow = container.querySelector(".fa-chevron-circle-left");
  fireEvent.click(leftArrow);

  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();

  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
});

it("should hide the left arrow on the first photo", function () {
  const { container, debug } = render(
    <Carousel photos={TEST_IMAGES} title="image for testing" />
  );

  expect(
    container.querySelector(".fa-chevron-circle-left")
  ).not.toBeInTheDocument();
});

it("should hide the right arrow on the last photo", function () {
  const { container, debug } = render(
    <Carousel photos={TEST_IMAGES} title="image for testing" />
  );

  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  expect(
    container.querySelector(".fa-chevron-circle-right")
  ).not.toBeInTheDocument();
});
