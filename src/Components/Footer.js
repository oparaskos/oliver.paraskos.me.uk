import React, { Component } from 'react';

class Footer extends Component {
  render() {

    const networkToClass = (name) => `fa fa-${name.toLowerCase()}`

    if(this.props.data){
      var networks= this.props.data.profiles.map(function(network){
        return <li key={network.network}><a title={network.network} href={network.url}><i className={network.className || networkToClass(network.network)}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright 2020 Oliver Paraskos</li>
              <li>Template &copy; Copyright 2017 Tim Baker</li>
              <li>Header Image by <a href="https://pixabay.com/photos/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=931706">Free-Photos</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=931706">Pixabay</a></li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
