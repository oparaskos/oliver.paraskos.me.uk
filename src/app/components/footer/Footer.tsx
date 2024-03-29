import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Footer.scss';
import Socials from '../socials/Socials';

interface FooterProps {
  data: {
    basics: {
      profiles: any[]; // Define the type for profiles data accordingly
      name: string;
    };
  } | null;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  if (data && data.basics) {
    var profiles = data.basics.profiles;
    var name = data.basics.name;
  } else {
    return <div>Loading</div>;
  }

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            <Socials profiles={profiles} />
          </ul>

          <ul className="copyright">
            <li>&copy; Copyright 2020 {name}</li>
            <li>
              Template &copy; Copyright 2017{' '}
              <a rel="noreferrer noopener" href="https://github.com/tbakerx">
                Tim Baker
              </a>{' '}
              Licensed under the{' '}
              <a rel="noreferrer noopener" href="https://mit-license.org/">
                MIT License
              </a>
            </li>
            <li>
              Header Image by{' '}
              <a
                rel="noreferrer noopener"
                href="https://pixabay.com/photos/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=931706"
              >
                Free-Photos
              </a>{' '}
              from{' '}
              <a
                rel="noreferrer noopener"
                href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=931706"
              >
                Pixabay
              </a>
            </li>
            <li>
              Design by{' '}
              <a
                rel="noreferrer noopener"
                title="Styleshout"
                href="http://www.styleshout.com/"
              >
                Styleshout
              </a>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <FontAwesomeIcon icon={faChevronUp} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
