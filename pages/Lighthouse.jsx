import Image from "next/image";
import lighthouse from "../public/img/lighthouse.png";

export default function Lighthouse() {
  return (
    <div>
      <h2 className="title-men" id="Lighthouse">
        {" "}
        Google Lighthouse <sup className="titlenumber">7</sup>
      </h2>
      <Image
        src={lighthouse}
        width={150}
        height={150}
        alt="google lighthouse image"
        className="imagewrap"
      />
      <p className="overword">
        When all is said and done regarding bots, markup structure, and
        rendering strategy, there are still things to consider. Miniscule
        details can play a large role in how well your site is optimized for
        search engines. Tools such as{" "}
        <em>
          <strong> Google Lighthouse</strong>
        </em>{" "}
        allow one to delve into the specifics of what exactly algorithms look
        for and how to edit accordingly. A quick audit of any website can take
        into account factors including but not limited to,{" "}
        <em>
          <strong>time to paint</strong> (a descriptor for how long it takes all
          content to render)
        </em>
        ,
        <em>
          {" "}
          <strong>time to interactive</strong> (a descriptor for how long it
          takes before a user can interact with the content on the screen)
        </em>
        , and even site accessibility, through seemingly arbitrary criteria such
        as contrast of text to background. Metrics are measured mobile-first to
        ensure that sites can be optimized and accessed on all devices. These
        then allow developers to understand guidelines and implore best
        practices to have a fully optimized site.
      </p>
    </div>
  );
}
