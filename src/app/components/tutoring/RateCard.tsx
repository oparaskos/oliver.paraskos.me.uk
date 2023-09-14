import React from 'react';
import './RateCard.scss';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function RateCard() {
    return <table className='rate-card'>
        <thead>
            <tr>
                <th></th>
                <th>Online</th>
                <th>In-Person (I travel to you)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>1-1</th>
                <td>£40 p.h.</td>
                <td>£50 p.h.</td>
            </tr>
            <tr>
                <th>Small-Group</th>
                <td style={{textAlign: "center", verticalAlign: "middle"}}><FontAwesomeIcon icon={faXmark} /></td>
                <td>
                    <span><b>Hourly:</b> £45 p.h. + £25 p.h. per additional person, up to 4 people, booked in advance.</span>
                    <br />
                    <span><b>10+ Hours:</b> £40 p.h. Bulk Rate</span>
                </td>
            </tr>
        </tbody>
    </table>;
}
