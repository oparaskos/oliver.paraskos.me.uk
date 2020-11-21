import React from 'react';
import { Role } from './Role';

const Work = ({ jobs }) => (
    <div className="row work">
        <div className="three columns header-col">
            <h2><span>Work</span></h2>
        </div>

        <div className="nine columns main-col">
            { jobs.map((work, i) => <Role key={i} work={work} />) }
        </div>
    </div>
);

export default Work;


