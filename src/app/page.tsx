import React from 'react';
import About from './components/about/About';

import resume from './resume';
import Header from './components/header/Header';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Head from 'next/head';

function Home() {
  if (!resume) return <></>;

  return (
    <div className="Home" itemScope itemProp="Person" itemType="https://schema.org/Person">
      {resume.basics && (
        <Head>
          <title>{resume.basics.fullName || resume.basics.name}</title>
          <meta property="og:title" content={resume.basics.fullName || resume.basics.name} />
          <meta
            property="og:description"
            content={`I'm ${resume.basics.name}. I'm a ${resume.basics.location.city} based ${resume.basics.label}, ${resume.basics.summary}.`}
          />
          <meta
            name="description"
            content={`I'm ${resume.basics.name}. I'm a ${resume.basics.location.city} based ${resume.basics.label}, ${resume.basics.summary}.`}
          />
        </Head>
      )}
      <Header data={resume} />
      <About basics={resume.basics} interests={resume.interests} />
      <Resume data={resume} />
      <Contact data={resume.basics} />
      <Footer data={resume as any} />
    </div>
  );
}

export default Home;
