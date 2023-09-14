import React from 'react';
import './Tutoring.scss';
import Link from '../link/Link';
import { GCSESupport } from './GCSESupport';
import { AdultLearning } from './AdultLearning';

const TutoringInfo: React.FC = () => {
    return (
        <article>
            <section className='summary'>
                <div className="row section-head">
                    <div className="nine columns main-col">
                        <h2>Tutoring</h2>
                        <p>
                            I hold a 1st Class Degree with Honours in Computer Science
                            from Oxford Brookes University.
                            My diverse career has provided me with practical experience
                            in software development, system architecture, and database
                            integration across multiple technologies, solidifying my
                            foundational knowledge in the field.
                        </p>

                        <p>
                            I&apos;ve worked with cutting-edge technologies, driven best practices,
                            and mentored junior developers, contributing to my comprehensive
                            understanding of computer studies.
                        </p>

                        <p>
                            I&apos;m excited to share my knowledge and help students grasp complex
                            computer science concepts.
                            My goal is to create a supportive and engaging learning environment
                            where students can excel, whether they&apos;re beginners or advanced
                            learners.
                        </p>

                        <p>
                            I can offer targeted <Link to="#gcse-support">GCSE support</Link> or <Link to="#adult-learning">Adult Learning</Link>
                        </p>
                    </div>
                </div>
            </section>
            <GCSESupport />
            <AdultLearning />
        </article>);
}

export default TutoringInfo;
