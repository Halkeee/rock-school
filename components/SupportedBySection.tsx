import React from "react";
import SectionParagraph from "./SectionParagraph";

const SupportedBySection = () => {
  return (
    <div className="supported-by">
      <div className="container">
        <div className="box">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
            alt="France"
          />
          <div className="supported-by-content">
            <p className="title is-2">
              This project was supported by French Embassy.
            </p>
            <SectionParagraph
              text={`We are very grateful for the support provided by the French Embassy. 
            Thanks to good people, this project has been successfully realized.
            Now anyone who is interested in the music can join our school and learn 
            about music.`}
              color="#000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportedBySection;
