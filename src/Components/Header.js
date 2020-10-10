import React, { Component } from 'react';

class Header extends Component {
  render() {

   const networkToClass = (name) => `fa fa-${name.toLowerCase()}`

    if(this.props.data && this.props.data.basics){
      var name = this.props.data.basics.name;
      var occupation= this.props.data.basics.label;
      var description= this.props.data.basics.summary;
      var city= this.props.data.basics.location.city;
      var networks= this.props.data.basics.profiles.map(function(network){
        return <li key={network.network}><a href={network.url}><i className={network.className || networkToClass(network.network)}></i></a></li>
      })
    } else {
       return <div>Something Went Wrong!</div>
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            {this.props.data.portfolio && <li><a className="smoothscroll" href="#portfolio">Works</a></li>}
            {this.props.data.testimonials && <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>}
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}.</h1>
            <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
