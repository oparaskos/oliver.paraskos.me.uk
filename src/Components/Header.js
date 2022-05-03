import React, { useState } from 'react';
import Socials from './Socials';
import { Link as LinkOriginal } from "react-scroll";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Link = ({ to, children }) => <LinkOriginal
   to={to}
   smooth={true}
   duration={500}
   style={{cursor : "pointer"}}
>
   {children}
</LinkOriginal>


function navClass(y, h) {
   if ( (y > h*.20) && (y < h) && (window.outerWidth > 768 ) ) {
      return 'transparent';
   }
   else {
      if (y < h*.20) {
         return '';
      }
      else {
         return 'opaque';
      }
   }
}

var listener;
const Header = ({ data }) => {
   
   var name = "";
   var occupation= "";
   var description= "";
   var city = "";
   var profiles = [];
   var loading = true;

   if (data && data.basics) {
      var currentEmployer = <span>
         {data.work
            .filter((it) => !it.endDate)
            .map((work) => <a key={work.company} href={work.website} itemProp="affiliation" rel="noreferrer noopener">
                  {work.company.split(/\s+/).join("\u00A0")}
               </a>
            )}
      </span>
      name = data.basics.name;
      occupation= data.basics.label;
      description= currentEmployer ? <span>Currently working at {currentEmployer}</span> : <span />;
      city = data.basics.location.city;
      profiles = data.basics.profiles;
      loading = false;
   }

   const [navClassName, setNavClassName] = useState();
   if (listener) window.removeEventListener(listener);
   listener = window.addEventListener('scroll', () => {
      const y = window.scrollY;
      const h = document.documentElement.clientHeight;
      const newClassName = navClass(y, h);
      if (newClassName !== navClassName) setNavClassName(newClassName);
   }, [navClassName]);

   return (
      <header id="home">
         <nav id="nav-wrap" className={navClassName}>
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><Link className="smoothscroll" to="about">About</Link></li>
               <li><Link className="smoothscroll" to="resume">Resume</Link></li>
               {data.portfolio && <li><a className="smoothscroll" href="#portfolio">Works</a></li>}
               {data.testimonials && <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>}
               <li><Link className="smoothscroll" to="contact">Contact</Link></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               { loading && <p>Loading...</p> }
               { !loading && <h1 className="responsive-headline">I'm <span itemProp="name">{name}</span>.</h1>}
               <h2 className="subheading">I'm a <span itemProp="homeLocation">{city}</span> based <span itemProp="jobTitle">{occupation}</span>. {description}.</h2>
               <hr />
               <ul className="social">
                  <Socials profiles={profiles} />
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <Link to="about">
               <FontAwesomeIcon icon={faChevronDown} />
            </Link>
         </p>
      </header>
   );
}

export default Header;
