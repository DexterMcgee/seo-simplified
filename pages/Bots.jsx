import Image from "next/image";
import happybot from "../public/img/happybot.png";
import bounce from "../public/img/bounce.png";
import irobot from "../public/img/irobot.png";

export default function Bots() {
  return (
    <div>
      <h2 className="title-men overword" id="Bots">
        {" "}
        How Exactly do you Appeal to Bots? <sup className="titlenumber">3</sup>
      </h2>
      <Image
        src={happybot}
        width={150}
        height={150}
        alt="robot"
        className="imagewrap"
      />
      <p className="underword bot-id">
        First and foremost, the major factor when it comes to SEO is creating
        interesting content.&nbsp;Although subjective, bots interpret
        interesting as a site with a relevant title and description, high{" "}
        <em>
          {" "}
          <strong> click-through rate</strong> (how often a user clicks through
          the site in a given session),{" "}
        </em>{" "}
        high{" "}
        <em>
          <strong>dwell time</strong> (the amount of time a user spends on the
          site),
        </em>{" "}
        and
        <em>
          {" "}
          <strong>minimal Bounce</strong>{" "}
          <Image src={bounce} width={18} height={18} alt="back button" />
          (the occurrence of a user hitting back and exiting the site quickly).
        </em>{" "}
        High click-through rate can be achieved by investing in links that
        separate your site into many relevant pages to increase pages per
        session rather than having a one-page site. Bots can then search for
        those pages individually and when a user clicks on a link to your site,
        they can be directed straight to that page, minimizing load times. High
        dwell time can be achieved through presenting content that appeals
        directly to your visitors. Keeping an engaged audience on, for instance,
        a video website, means showing the most viewed videos at the forefront
        of the site; certain algorithms exist to cater to just this metric. On
        an article, it means having a title that is interesting enough to get
        visitors to stay and read through the entire passage. Bots determine
        that because people spend a considerable amount of time on these sites,
        it is interesting enough for more people to want to see. This goes hand
        in hand with minimizing bounce and increasing overall session duration.
      </p>
      <Image
        src={irobot}
        width={150}
        height={150}
        alt="pointer finger"
        className="imagewrap"
      />
    </div>
  );
}
