
import React, { Component } from 'react';
import Work from './Work';

function isNumeric(str) {
  return RegExp('^[\\d\\.]+$').test(str);
}

class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education && this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })
      var skills = this.props.data.skills && this.props.data.skills.map(function (skill) {
        var className = 'bar-expand ' + skill.name.toLowerCase();
        return <li key={skill.name} className={isNumeric(skill.level) ? 'bar' : 'simple'}>
            {isNumeric(skill.level) && (<span style={{ width: skill.level }} className={className}></span>)}
            <em>{skill.name} {!isNumeric(skill.level) && (<span>({skill.level})</span>)}</em>
            {skill.keywords &&  (<span>{skill.keywords.join(', ')}</span>)}
          </li>
      })
    }

    return (
      <section id="resume">
        {this.props.data.work && <Work jobs={this.props.data.work} />}

        {education && (<div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>)}

        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            {skillmessage && <p>{skillmessage}</p>}
            <div className="bars">
              <ul className="skills">
                {skills}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
