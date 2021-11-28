import React from "react";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

const LearnToPlay = () => {
  return (
    <div className="learn-to-play" id="learn-to-play">
      <div className="learn-to-play-container container box">
        <SectionTitle title="NAUČI SVIRATI" icon="learn" color="#01abaa" />

        <div className="columns">
          <div className="column is-5-desktop">
            <div className="learn-to-play-content">
              <SectionParagraph
                text={`Sed ut perspiciatis unde omnis iste natus error sit 
                            voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto 
                            beatae vitae dicta sunt explicabo.  Eaque ipsa quae ab illo 
                            inventore veritatis et quasi architecto beatae vitae dicta sunt 
                            explicabo. omnis iste natus error sit voluptatem accusantium 
                            doloremque laudantium.`}
                color="#01abaa"
              />
            </div>
            <div className="is-flex is-align-items-center">
              <a className="button is-info is-medium" href="#contact">KONTAKTIRAJTE NAS</a>
              <p className="has-text-info ml-3">i saznajte više.</p>
            </div>
          </div>
          <div className="column is-7-desktop">
            <div className="learn-to-play-image">
              {/* <figure className="image is-4by3"> */}
              <img src="/images/playing-guitar.png" alt="Playing guitar" />
              {/* </figure> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnToPlay;
