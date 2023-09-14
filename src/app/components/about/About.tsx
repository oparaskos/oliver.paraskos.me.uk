import React from 'react';
// import ContactDetails from './ContactDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './About.scss';
import { ContactDetails } from '../contact/ContactDetails';
import Image from 'next/image';

interface AboutProps {
  basics?: {
    name: string;
    picture: string;
    bio?: string;
    summary?: string;
  };
  interests?: {
    name: string;
    keywords?: string[];
  }[];
}

const About: React.FC<AboutProps> = ({ basics, interests }) => {
  const name = basics?.name;
  const profilepic = basics?.picture;
  const bio = basics?.bio || basics?.summary;
  const download = "/static/resume.pdf";

  return (
    <section id="about">
      <div className="row">
        {profilepic && (
          <div className="three columns">
            <Image className="profile-pic" src={profilepic} alt={`${name}`} />
          </div>
        )}
        <div className="nine columns main-col">
          {bio && (
            <div>
              <h2>About Me</h2>
              <section>{bio.split('\n').map((it, index) => <p key={index}>{it}</p>)}</section>
            </div>
          )}
          <div className="row">
            <ContactDetails data={basics as any} />
            {download && (
              <div className="columns download">
                <p>
                  <a href={download} className="button">
                    <FontAwesomeIcon icon={faDownload} className="button-icon" />
                    Download Resume
                  </a>
                </p>
              </div>
            )}
          </div>
          {interests && (
            <div className="row">
              <div className="twelve columns" id="interests">
                <h2>My Interests</h2>
                <ul className="interests">
                  {interests.map((interest, index) => (
                    <li key={index}>
                      <span className="name">{interest.name}</span>
                      {interest.keywords && (
                        <ul className="keywords">
                          {interest.keywords.map((it, i) => (
                            <li key={i}>{it}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
