import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import { Helmet } from 'react-helmet';


function App() {

  const [resume, setResume] = useState();

  useEffect(() => {
    return fetch('/resume.json')
      .then(response => response.json())
      .then(data => setResume(data))
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }, [setResume]);

  if (!resume) return <></>;

  return (
    <div className="App" itemScope itemProp="Person" itemType="https://schema.org/Person">
      {resume.basics && <Helmet>
        <title>{resume.basics.fullName || resume.basics.name}</title>
        <meta property="og:title" content={resume.basics.fullName || resume.basics.name} />
        <meta property="og:description" content={`I'm ${resume.basics.name}. I'm a ${resume.basics.location.city} based ${resume.basics.label}, ${resume.basics.summary}.`} />
        <meta name="description" content={`I'm ${resume.basics.name}. I'm a ${resume.basics.location.city} based ${resume.basics.label}, ${resume.basics.summary}.`} />
      </Helmet>
      }
      <Header data={resume} />
      <About data={resume.basics} />
      <Resume data={resume} />
      {resume.portfolio && <Portfolio data={resume.portfolio} />}
      {resume.testimonials && <Testimonials data={resume.testimonials} />}
      <Contact data={resume.basics} />
      <Footer data={resume} />
    </div>
  );
}

export default App;
