import { isNumeric } from 'jquery';
import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education && this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })
      var work = this.props.data.work && this.props.data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.position}<span>&bull;</span> <em className="date">{work.startDate}–{work.endDate || "Present"}</em></p>
          <p>{work.summary}</p>
          {work.highlights && <ul className='highlights'>
            {work.highlights.map(it => <li>{it}</li>)}
          </ul>}
        </div>
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
        {work && (<div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>)}

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
