import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export interface ContactDetailsProps {
  data: {
    name: string;
    location?: {
      address?: string;
      city?: string;
      region?: string;
      postalCode?: string;
    };
    phone?: string;
    email?: string;
  };
}

export const ContactDetails: React.FC<ContactDetailsProps> = ({ data }) => {
  const name = data?.name;
  const street = data?.location?.address;
  const city = data?.location?.city;
  const state = data?.location?.region;
  const zip = data?.location?.postalCode;
  const phone = data?.phone;
  const email = data?.email;

  return (
    <div className="columns contact-details">
      <h2>Contact Details</h2>
      <aside className="address">
        <span>{name}</span>
        <br />
        {data.location && (
          <address>
            {street}
            {street && (city || state || zip) && <br />}
            {city}
            {state && <span>, {state}</span>}
            {zip && <span>, {zip}</span>}
          </address>
        )}
        <br />
        {phone && (<a itemProp="telephone" href={`tel:${phone}`}>
          <FontAwesomeIcon icon={faPhone} /> {phone}
        </a>)}
        <br />
        {email && (<a itemProp="email" href={`mailto:${email}`}>
          <FontAwesomeIcon icon={faEnvelope} /> {email}
        </a>)}
      </aside>
    </div>
  );
};
