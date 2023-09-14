import React, { PropsWithChildren } from 'react';

export const AdultLearningCourse: React.FC<PropsWithChildren<{ name: string; }>> = ({ name, children }) => <li className="adult-learning-course">
    <h3 id="java-for-beginners">{name}</h3>
    {children}
</li>;
