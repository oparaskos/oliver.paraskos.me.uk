import React from 'react';
import {ContactDetails, ContactDetailsProps} from './ContactDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Contact.scss';


const Contact: React.FC<ContactDetailsProps> = ({ data }) => {
  return (
    <section id="contact">
      <div className="row section-head">
        <h1>
          <FontAwesomeIcon icon={faEnvelope} /> Talk to me:
        </h1>
      </div>

      <div className="row">
        <div className="eight columns"></div>

        <aside className="four columns footer-widgets">
          <ContactDetails data={data} />
        </aside>
      </div>
    </section>
  );
};

export default Contact;
