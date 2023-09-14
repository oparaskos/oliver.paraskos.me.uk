import React from 'react';

export interface Skill {
  name: string;
  level?: string;
  keywords?: string[];
}

export interface SkillsListProps {
  data: {
    skills?: Skill[];
  };
}

function isNumeric(str?: string) {
  if(typeof str === "undefined") return false;
  return RegExp('^[\\d\\.]+$').test(str);
}

export const SkillsList: React.FC<SkillsListProps> = ({ data }) => {
  return (
    <ul className="skills">
      {data.skills &&
        data.skills.map(function (skill: Skill) {
          const className = 'bar-expand ' + skill.name.toLowerCase();
          return (
            <li key={skill.name} className={isNumeric(skill.level) ? 'bar' : 'simple'}>
              {isNumeric(skill.level) && <span style={{ width: skill.level }} className={className}></span>}
              <em>
                {skill.name} {!isNumeric(skill.level) && skill.level && <span>({skill.level})</span>}
              </em>
              {skill.keywords && <span>{skill.keywords.join(', ')}</span>}
            </li>
          );
        })}
    </ul>
  );
};
