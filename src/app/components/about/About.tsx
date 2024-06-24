import React from 'react';
// import ContactDetails from './ContactDetails';
import './About.scss';
import { ContactDetails } from '../contact/ContactDetails';
import Image from 'next/image';
import { DownloadButton } from './DownloadButton';

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
        <div className="twelve columns main-col">
          {bio && (
            <div>
              <h2>About Me</h2>
              <section>{bio.split('\n').map((it, index) => <p key={index}>{it}</p>)}</section>
            </div>
          )}
          <div className="row">
            <ContactDetails data={basics as any} />
            {download && <DownloadButton download={download}/>}
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


