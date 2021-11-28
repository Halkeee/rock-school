import React, { VFC } from "react";
import SectionParagraph from "../SectionParagraph";
import SectionTitle from "../SectionTitle";
import Gallery from "./Gallery";

const Studio: VFC<{images: string[]}> = ({images}) => {
  return (
    <div className="studio" id="music-studio">
      <div className="studio-main">
        <div className="studio-main-overlay">
          <div className="studio-container container box">
            <SectionTitle
              title="MUZIČKI STUDIO"
              icon="music-studio"
              color="#fedc3d"
            />
            <SectionParagraph
              text={`Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
                inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo 
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Sed ut 
                perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis 
                et quasi architecto beatae vitae dicta sunt explicabo. `}
              color="#fedc3d"
            />
          </div>
        </div>
      </div>
      <div className="studio-gallery">
        <Gallery images={images} />
      </div>
    </div>
  );
};

export default Studio;
