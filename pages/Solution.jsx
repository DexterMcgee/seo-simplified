import Image from "next/image";
import nextlight from "../public/img/nextlight.png";

export default function Solution() {
  return (
    <div>
      <h2 className="title-men" id="Solution">
        {" "}
        Perhaps there’s a Solution <sup className="titlenumber">6</sup>
      </h2>
      <p className="overword">
        Of the aforementioned strategies, each rendering practice can work well
        if implemented correctly, but the drawbacks can often be a weakness that
        ultimately force a compromise between good user experience, speed, and
        bot-friendly imlementaion practices. What if, perhaps, there was a
        rendering strategy that limited compromise, allowed for good UX, was
        fast, scalable, and friendly to robots? Well, it just so happens such a
        thing exists.{" "}
      </p>
      <Image
        src={nextlight}
        width={255}
        height={150}
        alt="next.js logo"
        className="imagewrap"
      />
      <h4 className="underword">Incremental Static Regeneration: </h4>
      <p className="overword">
        This strategy has all the performance advantages of Static Generation,
        while also allowing flexibility to continuously add new data in a quick
        and bot-friendly method. It’s adopted by <em>Next.js</em> which is a
        front-end framework built on top of the popular React.js, so it also has
        the benefit of a great user experience. In fact, this very write-up was
        created with the power of Next.js. Perhaps the only drawback of this
        approach is the fact that it’s slightly more complex to implement, and
        may be subject to vendor lock-in. Peradventure there is no single,
        perfect rendering method, some frameworks have embraced{" "}
        <em>hybrid rendering, </em>
        which allows the developer to utilize different methods for different
        pages in order to find the perfect combination to optimize their site.
      </p>
    </div>
  );
}
