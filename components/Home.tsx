import React, { VFC } from "react";
import Icons from "./Icons";

const Home: VFC = () => {
  return (
    <div className="home" id="home">
      <div className="home-overlay">
        <div className="box">
          <p className="title is-1 is-secondary">
            Rock&lsquo;n&lsquo;Roll SCHOOL
          </p>

          <div className="social-medias">
            <a className="facebook">
              <Icons icon="facebook" />
            </a>
            <a className="instagram">
              <Icons icon="instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
