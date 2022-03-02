import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 *
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 *
 * State:
 * - currCardIdx: integer for current card index
 *//TODO: arrow visibility
  * App-- > Carousel-- > Card
  * /
function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);
  const [arrowVisibility, setArrowVisibility] = useState(
    { leftArrow: false, rightArrow: true }
  );

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1 and updates visibility state
  function goForward() {
    const nextCardIdx = currCardIdx + 1;
    setCurrCardIdx(nextCardIdx);

    if (nextCardIdx === photos.length - 1) {
      setArrowVisibility({ leftArrow: true, rightArrow: false });
    }
    else {
      setArrowVisibility({ leftArrow: true, rightArrow: true });
    }
  }

  //Decrements currCardIdx state by 1 and updates visibility state
  function goBackward() {
    const nextCardIdx = currCardIdx - 1;
    setCurrCardIdx(currCardIdx - 1);

    if (nextCardIdx === 0) {
      setArrowVisibility({ leftArrow: false, rightArrow: true });
    }
    else {
      setArrowVisibility({ leftArrow: true, rightArrow: true });
    }
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {arrowVisibility.leftArrow &&
          <i className="fas fa-chevron-circle-left fa-2x" onClick={goBackward} />
        }
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        {arrowVisibility.rightArrow &&
          <i
            className="fas fa-chevron-circle-right fa-2x"
            onClick={goForward}
          />}
      </div>
    </div>
  );
}

export default Carousel;
