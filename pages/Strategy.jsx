import Image from "next/image";
import react from "../public/img/react.png";

export default function Strategy() {
  return (
    <div>
      <h2 className="title-men overword strategy-id" id="Strategy">
        {" "}
        Render Speed and Strategies <sup className="titlenumber"> 5</sup>
      </h2>
      <Image
        src={react}
        width={150}
        height={150}
        alt="react logo"
        className="imagewrap"
      />
      <p>
        One thing to consider when optimizing your site is the rendering
        strategy that can directly affect the speed of your site’s load.{" "}
      </p>
      <h4>Client-Side Rendering: </h4>
      <p>
        Many front-end frameworks such as <em>React.js</em> and <em>Angular</em>{" "}
        implore this strategy which parses the JavaScript and HTML to request
        data. In turn, it creates a very clean and interactive app-like feel
        which naturally has a great user experience <em>(UX)</em>. Drawbacks,
        however, include bots having a hard time reliably parsing information
        because of the front-end JavaScript shell.
      </p>
      <h4>Static Generation: </h4>
      <p>
        This strategy relies on prerendering HTML so that pages are built in
        advance. The information is then cached into the network which allows
        bots to quickly parse data. The result is that the end user sees fully
        rendered sites almost instantly. Drawbacks come from limited scale,
        forcing developers to manually add new information, thus making it a
        poor choice for dynamically changing data.
      </p>
      <h4>Server-Side Rendering: </h4>
      <p className="overword">
        Sites rendered server-side also load very fast due to each component
        only being rendered when necessary, on demand, if you will. Data can be
        updated as needed and HTML is generated on the server, which is great
        for bots. The drawbacks come from inefficiently cached data, and
        continuously retrieving from the same point (data fetch redundancy),
        inevitably slowing down load times.{" "}
      </p>
    </div>
  );
}
