export default function Structure() {
  return (
    <div>
      <h2 className="title-men underword" id="Structure">
        {" "}
        Analyzing Markup Structure <sup className="titlenumber">4</sup>
      </h2>
      <p className="overword">
        Although many factors contribute to creating a working website, bots
        read the metadata present in the <em>head</em> of an HTML webpage. This
        is invisible to site visitors, however, developers put work into
        ensuring that the information present in the head is easily
        comprehensible and able to be parsed efficiently by bots. Therefore, the
        HTML meta tag contains vital information that makes the bot’s job
        easier. This can comprise of anything from character set, keywords, and
        description, to author of the page and site viewport. Semantic style
        markup, in which each element has a unique name, can be a creative way
        to get bots to parse your webpage more efficiently, because each part is
        read in a distinctive manner. The structure of your webpage is also
        responsible for the way it appears in a search engine before you click
        on it. This allows users to get to their target subject quickly and
        directly through the search engine. <em>Alt attributes,</em> the words
        shown if an image cannot be displayed, also help bots crawl effectively
        and are good for accessibility. A good indicator for a site’s metadata
        optimization is if it can be easily analyzed and presented correctly
        through something like <em>‘Twitter Card Validator’</em>, a site that
        allows you to see how your site will look if linked in a Twitter card.
      </p>
    </div>
  );
}
