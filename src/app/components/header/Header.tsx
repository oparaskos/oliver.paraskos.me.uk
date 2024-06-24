import React, { useState, useEffect } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';
import Socials from '../socials/Socials';
import { Navigation } from '../navigation/Navigation';
import Link from '../link/Link';


interface HeaderProps {
  loading?: boolean;
  data: {
    basics?: any;
    portfolio?: any; // Define the type for portfolio data accordingly
    testimonials?: any; // Define the type for testimonials data accordingly
  };
}

const Header: React.FC<HeaderProps> = ({ data, loading = false }) => {
  var name = data.basics?.name;
  var occupation = data.basics?.label;
  var description = data.basics?.description;
  var city = data.basics?.location?.city;
  var profiles = data.basics?.profiles;

  return (
    <header id="home">
      <Navigation data={data} />

      <div className="row banner">
        <div className="banner-text">
          {loading && <p>Loading...</p>}
          {!loading && (
            <h1 className="responsive-headline">
              <span className='pron'>I&apos;m</span> <span itemProp="name">{name}</span>.
            </h1>
          )}
          <h2 className="subheading">
            {description || (
              <>
                <span className='pron'>I&apos;m</span> a <span itemProp="homeLocation">{city}</span> based{' '}
                <span itemProp="jobTitle">{occupation}</span>.
              </>
            )}
          </h2>
          <hr />
          {profiles && (
            <ul className="social">
              <Socials profiles={profiles} />
            </ul>)}
        </div>
      </div>

      <p className="scrolldown">
        <Link to="#__pagecontent">
          <FontAwesomeIcon icon={faChevronDown} />
        </Link>
      </p>
      <a id="__pagecontent" style={{ marginBottom: "-1rem" }} />
    </header>
  );
};

export default Header;
