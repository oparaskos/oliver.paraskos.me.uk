import React, { useState } from 'react';
import Socials from './Socials';
import { Link as LinkOriginal } from "react-scroll";

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
   if (data && data.basics) {
      var name = data.basics.name;
      var occupation = data.basics.label;
      var description = data.basics.summary;
      var city = data.basics.location.city;
      var profiles = data.basics.profiles;
   } else {
      return <div>Loading&ellip;</div>
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
               <li><Link to="home">Home</Link></li>
               <li><Link to="about">About</Link></li>
               <li><Link to="resume">Resume</Link></li>
               {data.portfolio && <li><Link to="portfolio">Works</Link></li>}
               {data.testimonials && <li><Link to="testimonials">Testimonials</Link></li>}
               <li><Link to="contact">Contact</Link></li>
            </ul>

         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I'm {name}.</h1>
               <h3>I'm a {city} based <span>{occupation}</span> {description}.</h3>
               <hr />
               <ul className="social">
                  <Socials profiles={profiles} />
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <Link to="about"><i className="icon-down-circle"></i></Link>
         </p>

      </header>
   );
}

export default Header;
