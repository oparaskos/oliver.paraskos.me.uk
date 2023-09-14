import React from 'react';
import { SkillsList, SkillsListProps } from './SkillsList';
import { Work } from './Work';
import { DateRange } from './DateRange';
import './Resume.scss';

interface Education {
  school?: string;
  institution?: string;
  studyType: string;
  area: string;
  startDate: string;
  endDate: string;
  description: string;
}


type ResumeProps = {
  data: any;
} & SkillsListProps;

const Resume: React.FC<ResumeProps> = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education?.map(function (education: Education) {
      return (
        <div key={education.school || education.institution} itemProp="alumniOf">
          <h3>{education.school || education.institution}</h3>
          <p className="info">
            {education.studyType}
            <span>&bull;</span>
            {education.area}
            <span>&bull;</span>
            <DateRange startDate={education.startDate} endDate={education.endDate} />
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
  }

  return (
    <section id="resume">
      {data.work && <Work jobs={data.work} />}

      {education && (
        <div className="row education">
          <div className="three columns header-col">
            <h2>
              <span>Education</span>
            </h2>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>
      )}

      <div className="row skill">
        <div className="three columns header-col">
          <h2>
            <span>Skills</span>
          </h2>
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
};

export default Resume;
