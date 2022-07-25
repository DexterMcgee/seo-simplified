import Image from "next/image";
// import pointup from "../public/img/uparrow.png";
// import pointdown from "../public/img/downarrow.png";
import { scroller } from "react-scroll";

export default function Tray() {
  const number1Scroll = () => {
    scroller.scrollTo("Title", {
      smooth: "easeInOutQuart",
      delay: 0,
      duration: 400,
    });
  };
  const number2Scroll = () => {
    scroller.scrollTo("SEO", {
      smooth: "easeInOutQuart",
      delay: 0,
      duration: 400,
    });
  };
  const number3Scroll = () => {
    scroller.scrollTo("Bots", {
      smooth: "easeInOutQuart",
      delay: 0,
      duration: 400,
    });
  };
  const number4Scroll = () => {
    scroller.scrollTo("Structure", {
      smooth: "easeInOutQuart",
      delay: 0,
      duration: 400,
    });
  };
  const number5Scroll = () => {
    scroller.scrollTo("Strategy", {
      smooth: "easeInOutQuart",
      delay: 0,
      duration: 400,
    });
  };
  const number6Scroll = () => {
    scroller.scrollTo("Solution", {
      smooth: "easeInOutQuart",
      delay: 0,
      duration: 400,
    });
  };
  const number7Scroll = () => {
    scroller.scrollTo("Lighthouse", {
      smooth: "easeInOutQuart",
      delay: 0,
      duration: 400,
    });
  };
  const number8Scroll = () => {
    scroller.scrollTo("Conclusion", {
      smooth: "easeInOutQuart",
      delay: 0,
      duration: 400,
    });
  };

  return (
    <div>
      <div className="icontray">
        <button className="number1" onClick={number1Scroll}>
          1
        </button>
        <button className="number2" onClick={number2Scroll}>
          2
        </button>
        <button className="number3" onClick={number3Scroll}>
          3
        </button>
        <button className="number4" onClick={number4Scroll}>
          4
        </button>
        <button className="number5" onClick={number5Scroll}>
          5
        </button>
        <button className="number6" onClick={number6Scroll}>
          6
        </button>
        <button className="number7" onClick={number7Scroll}>
          7
        </button>
        <button className="number8" onClick={number8Scroll}>
          8
        </button>
      </div>
    </div>
  );
}
