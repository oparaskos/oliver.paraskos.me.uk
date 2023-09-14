import React from 'react';
import { format } from 'date-fns';

interface DateProps {
  startDate?: string | Date | undefined;
  endDate?: string | Date | undefined;
  fmtString?: string;
}

export const EndDate: React.FC<DateProps> = ({ endDate, fmtString = "MMMM yyyy" }) => {
  if (endDate) {
    const date = new Date(endDate);
    return (
      <time
        itemProp="endDate"
        dateTime={date.toISOString()}
      >
        {format(date, fmtString)}
      </time>
    );
  } else {
    return <span>Present</span>;
  }
};

export const StartDate: React.FC<DateProps> = ({ startDate, fmtString = "MMMM yyyy" }) => {
  const date = new Date(startDate as string);
  return (
    <time
      itemProp="startDate"
      dateTime={date.toISOString()}
    >
      {format(date, fmtString)}
    </time>
  );
};

export const DateRange: React.FC<DateProps> = ({ startDate, endDate }) => {
  return (
    <em className="date">
      <StartDate startDate={startDate} />&nbsp;&ndash;&nbsp;<EndDate endDate={endDate} />
    </em>
  );
};
