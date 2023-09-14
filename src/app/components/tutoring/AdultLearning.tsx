import React from 'react';
import { OfferedSchemes } from './OfferedSchemes';
import { RateCard } from './RateCard';
import { AdultLearningCourse } from './AdultLearningCourse';

export function AdultLearning() {
    return <section className="row topic" id="adult-learning">
        <h3>Adult Learning</h3>
        <OfferedSchemes />
        <RateCard />
        <p>I can offer free-form lessons or courses for particular topics, as required.</p>
        {/* <ul className="adult-learning-courses">
            <AdultLearningCourse name="Java for Beginners">
                <p>Learn to write applications in Java for Desktop computers and Laptops.</p>
                <p>For Java beginners, we can start with command line applications and gradually progress to creating applications for the desktop and web applications served over HTTP.</p>
            </AdultLearningCourse>
            <AdultLearningCourse name="SQL for Beginners">
                <p>For those starting with SQL, we will cover the basics of syntax and queries, moving on to more advanced topics such as stored procedures and database design.</p>
            </AdultLearningCourse>
            <AdultLearningCourse name="‘Cloud’ Programming for Beginners">
                <p>We will cover the basics of cloud programming and introduce students to cloud platforms such as Amazon Web Services (AWS).</p>
                <ul>
                    <li>Object Storage</li>
                    <li>Content Delivery Networks</li>
                    <li>Identity and Authentication</li>
                    <li>“Serverless” Computing</li>
                    <li>Horizontal and Vertical Scaling</li>
                    <li>Containerization</li>
                </ul>                </AdultLearningCourse>
            <AdultLearningCourse name="‘Make a website’ with HTML, CSS and Javascript">
                <p>Create a simple static website with some interactive behaviour to learn the fundamentals that the web is built on top of and gain an understanding of how these core technologies are built upon to create the more sophisticated sites we use every day.</p>
            </AdultLearningCourse>
        </ul> */}
    </section>;
}
