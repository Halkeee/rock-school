import React from "react";
import { TeamMembers } from "../../utils/const";
import SectionParagraph from "../SectionParagraph";
import SectionTitle from "../SectionTitle";
import Team from "./Team";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-container">
        <div className="container box">
          <SectionTitle title="O NAMA" icon="about-us" color="#000" />

          <div className="about-container-content">
            <img src="/images/about-us-img.jpg" alt="About us" />
            <div className="about-container-content-text">
              <p className="title is-3">Ko smo mi?</p>
              <SectionParagraph
                text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
                color="#000"
              />
            </div>
            <img className="question-mark is-hidden-touch" src="/images/icons/question-mark.svg" alt="Question mark"/>
          </div>
        </div>
      </div>
      <div className="about-team-container">
        <div className="container">
          <Team members={TeamMembers} />
        </div>
      </div>
    </div>
  );
};

export default About;
