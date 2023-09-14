import React from 'react';

import rawResumeJson from '../resume';
import Header from '../components/header/Header';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import TutoringInfo from '../components/tutoring/TutoringInfo';
import Head from 'next/head';

function Tutoring() {
    const resume = JSON.parse(JSON.stringify(rawResumeJson));
    const description = `I'm ${resume.basics.name}, a ${resume.basics.location.city} based Tutor. I teach I.T, Programming and Computer Studies.`;
    resume.occupation = "Computer Studies Tutor";
    resume.description = description;


    return (
        <div className="Tutoring" itemScope itemProp="Person" itemType="https://schema.org/Person">
            {resume.basics && (
                <Head>
                    <title>{resume.basics.fullName || resume.basics.name}</title>
                    <meta property="og:title" content={resume.basics.fullName || resume.basics.name} />
                    <meta property="og:description" content={description} />
                    <meta name="description" content={description} />
                </Head>
            )}
            <Header data={{ basics: { name: 'Oliver Paraskos', label: '', description } }} />
            <TutoringInfo />
            <Contact data={resume.basics} />
            <Footer data={resume} />
        </div>
    );
}

export default Tutoring;
