import React, { Component } from 'react';
import ContactDetails from './ContactDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = this.props.data.image;
         var interests = this.props.interests;
         var bio = this.props.data.bio || this.props.data.summary;
         var download = process.env.PUBLIC_URL + "/resume.pdf";
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
                     <p>{bio.split('\n').map(it => <p>{it}</p>)}</p>
                  </div>)}
                  <div className="row">
                     <ContactDetails data={this.props.data} />
                     {download && <div className="columns download">
                        <p>
                           <a href={download} className="button"><FontAwesomeIcon icon={faDownload} className='button-icon' />Download Resume</a>
                        </p>
                     </div>}
                  </div>
                  {interests && (<div className='row'>
                     <div className='twelve columns' id="interests">
                        <h2>My Interests</h2>   
                        <ul className='interests'>
                           {interests.map((interest, index) => (<li key={index}>
                              <span className='name'>{interest.name}</span>
                              {interest.keywords && (<ul className='keywords'>
                                 {interest.keywords.map((it, i) => (<li key={i}>{it}</li>))}
                              </ul>)}
                           </li>))}
                        </ul>
                     </div>
                  </div>)}
               </div>
            </div>

         </section>
      );
   }
}

export default About;
