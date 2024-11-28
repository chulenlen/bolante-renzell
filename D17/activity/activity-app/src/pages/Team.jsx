import React from 'react';
import { teamMembers } from '../team-data/data';
import { Link } from 'react-router-dom';

const Team = () => {
  return (
    <div className="container mt-5">
      <h2>Team Members</h2>
      <ul className="list-group">
        {teamMembers.map(member => (
          <li key={member.id} className="list-group-item">
            <Link to={`/team/${member.id}`}>{member.name}</Link> - {member.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
