import Image from "next/image";
import cert from "../public/img/cert.png";

export default function Title() {
  return (
    <div id="Title">
      <h1 className="title-man">
        {" "}
        Improving Your Website with Search Engine Optimization (SEO){" "}
      </h1>
      <p className="overword">
        {" "}
        So, you’ve created a website. Maybe you want to share something, or
        perhaps even sell a product. You’ll want to start by making sure it can
        be seen by as many people as possible. This is where{" "}
        <em>
          {" "}
          <strong>SEO </strong>
        </em>
        comes in to play. It helps everyday users connect swiftly to the content
        that is deemed important.
      </p>
      <Image
        src={cert}
        width={150}
        height={150}
        alt="cert image"
        className="imagewrap"
      />
    </div>
  );
}
