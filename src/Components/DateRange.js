import React from 'react';
import { format } from 'date-fns';

export const EndDate = ({ endDate, fmtString = "MMMM yyyy" }) => {
    const date = new Date(endDate);
    if(endDate) {
        return <time
            itemProp="endDate"
            dateTime={date.toISOString()}>
                {format(date, fmtString)}
        </time>;
    } else {
        return <span>Present</span>;
    }
}

export const StartDate = ({ startDate, fmtString = "MMMM yyyy" }) => {
    const date = new Date(startDate);
    return <time
        itemProp="startDate"
        dateTime={date.toISOString()}>
            {format(date, fmtString)}
    </time>;
}

export const DateRange = ({ startDate, endDate }) => {
    return <em className="date">
        <StartDate startDate={startDate} />&nbsp;&ndash;&nbsp;<EndDate endDate={endDate} />
    </em>;
}