import React from 'react';
import { DateRange } from './DateRange';

export interface WorkProps {
  jobs: any[]; // Define the type for jobs data accordingly
}

export interface Work {
  startDate?: string;
  endDate?: string;
  website: string;
  company: string;
  position: string;
  summary: string;
  highlights?: string[];
}

export interface RoleProps {
  work: Work;
}

export const Work: React.FC<WorkProps> = ({ jobs }) => (
  <div className="row work">
    <div className="three columns header-col">
      <h2><span>Work</span></h2>
    </div>

    <div className="nine columns main-col">
      {jobs.map((work, i) => <Role key={i} work={work} />)}
    </div>
  </div>
);

export const Role: React.FC<RoleProps> = ({ work }) => {
  return (
    <div className='role-info'>
      <h3>
        { work.website ? 
          <a rel="noreferrer noopener" id={work.company} href={work.website} itemProp="alumniOf">
            {work.company}
          </a>
        : work.company ? <a rel="noreferrer noopener" id={work.company} itemProp="alumniOf">
            {work.company}
          </a>
        : <a rel="noreferrer noopener" id={work.position}>
            {work.position}
          </a>}
      </h3>
      <p className="info">
        { work.company && work.position ? <span className="role" itemProp="roleName">
          {work.position}
        </span> : null }
        <span>&bull;</span>
        <DateRange startDate={work.startDate} endDate={work.endDate} />
      </p>

      <p>{work.summary}</p>

      {work.highlights && (
        <ul className="highlights">
          {work.highlights.map((it, index) => (
            <li key={index}>{it}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
