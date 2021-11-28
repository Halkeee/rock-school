import React, { VFC } from "react";

interface SectionParagraphInterface {
  text: string;
  color: string;
}

const SectionParagraph: VFC<SectionParagraphInterface> = ({ text, color }) => {
  return (
    <div className="section-paragraph">
      <p style={{ color: color, borderLeft: `5px solid ${color}` }}>{text}</p>
    </div>
  );
};

export default SectionParagraph;
