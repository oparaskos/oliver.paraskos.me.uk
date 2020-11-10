import React from 'react';

const Work = ({ jobs }) => (
    <div className="row work">
        <div className="three columns header-col">
            <h1><span>Work</span></h1>
        </div>

        <div className="nine columns main-col">
            {jobs.map((work) => 
                <div key={work.company}>
                    <h3><a rel="noreferrer noopener" href={work.website} itemProp="alumniOf">{work.company}</a></h3>

                    <p className="info">{work.position}<span>&bull;</span> <em className="date">{work.startDate}–{work.endDate || "Present"}</em></p>

                    <p>{work.summary}</p>

                    {work.highlights &&
                        <ul className='highlights'>
                            {work.highlights.map(it => <li key={it}>{it}</li>)}
                        </ul>}
                </div>
            )}
        </div>
    </div>
);

export default Work;