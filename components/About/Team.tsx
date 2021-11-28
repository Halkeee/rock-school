import React, { VFC } from "react";

export interface TeamMemberInterface {
  name: string;
  role: string;
  image: string;
}

const Team: VFC<{ members: TeamMemberInterface[] }> = ({ members = [] }) => {
  return (
    <div className="about-team box">
      <div className="columns is-multiline is-mobile is-tablet is-desktop">
        {members.map((member: TeamMemberInterface, k: number) => (
          <div key={k} className="column is-4 about-team-member">
            <figure className="image is-1by1">
              <img src={member.image} alt="Team member" />
            </figure>
            <p className="title size-3 is-secondary mb-0">{member.name}</p>
            <p className="about-team-member-role">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
