
import React, { Component } from 'react';
import { SkillsList } from './SkillsList';
import Work from './Work';
import { DateRange } from './DateRange';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var data = this.props.data;
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education && this.props.data.education.map(function (education) {
        return (<div key={education.school || education.institution} itemProp="alumniOf">
            <h3>{education.school || education.institution}</h3>
            <p className="info">
              {education.studyType}
              <span>&bull;</span>
              {education.area}
              <span>&bull;</span>
              <DateRange startDate={education.startDate} endDate={education.endDate} />
            </p>
            <p>{education.description}</p>
          </div>);
      })
    }

    return (
      <section id="resume">
        {this.props.data.work && <Work jobs={this.props.data.work} />}

        {education && (<div className="row education">
          <div className="three columns header-col">
            <h2><span>Education</span></h2>
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
            <h2><span>Skills</span></h2>
          </div>
          <div className="nine columns main-col">
            {skillmessage && <p>{skillmessage}</p>}
            <div className="bars">
              <SkillsList data={data} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
