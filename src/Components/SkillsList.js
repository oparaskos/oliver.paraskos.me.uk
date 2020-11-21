import React from 'react';

function isNumeric(str) {
  return RegExp('^[\\d\\.]+$').test(str);
}

export const SkillsList = ({ data }) => {
  return <ul className="skills">
    {data.skills && data.skills.map(function (skill) {
      var className = 'bar-expand ' + skill.name.toLowerCase();
      return <li key={skill.name} className={isNumeric(skill.level) ? 'bar' : 'simple'}>
        {isNumeric(skill.level) && (<span style={{ width: skill.level }} className={className}></span>)}
        <em>{skill.name} {!isNumeric(skill.level) && skill.level && (<span>({skill.level})</span>)}</em>
        {skill.keywords && (<span>{skill.keywords.join(', ')}</span>)}
      </li>;
    })}
  </ul>;
};
