import React, { Component } from 'react';
import ContactDetails from './ContactDetails';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = this.props.data.image;
         var bio = this.props.data.bio || this.props.data.summary;
         var resumeDownload = this.props.data.resumedownload;
      }

      return (
         <section id="about">
            <div className="row">
               {profilepic && <div className="three columns">
                  <img className="profile-pic" src={profilepic} alt={`${name}`} />
               </div>}
               <div className="nine columns main-col">
                  {bio && (<div>
                     <h2>About Me</h2>
                     <p>{bio}</p>
                  </div>)}
                  <div className="row">
                     <ContactDetails data={this.props.data} />
                     {resumeDownload && <div className="columns download">
                        <p>
                           <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                        </p>
                     </div>}
                  </div>
               </div>
            </div>

         </section>
      );
   }
}

export default About;
