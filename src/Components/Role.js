import React from 'react';
import { DateRange } from './DateRange';


export const Role = ({ work }) => {
    const startDate = work.startDate && new Date(work.startDate);
    const endDate = work.endDate && new Date(work.endDate);

    return <div>
        <h3><a rel="noreferrer noopener" href={work.website} itemProp="alumniOf">{work.company}</a></h3>
        <p className="info">
            <span className="role" itemProp="roleName">{work.position}</span>
            <span>&bull;</span>
            <DateRange startDate={startDate} endDate={endDate} />
        </p>

        <p>{work.summary}</p>

        {work.highlights &&
            <ul className='highlights'>
                {work.highlights.map(it => <li key={it}>{it}</li>)}
            </ul>}
    </div>;
};
