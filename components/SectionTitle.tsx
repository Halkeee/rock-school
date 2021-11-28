import React, { VFC } from "react";
import Icons from "./Icons";

interface SectionTitleInterface {
  title: string;
  icon: string;
  color: string;
}

const SectionTitle: VFC<SectionTitleInterface> = ({ title, icon, color }) => {
  return (
    <div className="section-title">
      <div className="section-title-decor-line"></div>
      <div className="section-title-content">
        <p style={{color: color}} className="title size-2">{title}</p>
        <div style={{backgroundColor: color}} className="section-title-content-long-line"></div>
        <Icons icon={icon} fill={color}/>
      </div>
    </div>
  );
};

export default SectionTitle;
