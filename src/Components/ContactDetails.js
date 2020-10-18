import React, { Component } from 'react';

class ContactDetails extends Component {
    render() {

        if (this.props.data) {
           var name = this.props.data.name;
           var street = this.props.data.location.address;
           var city = this.props.data.location.city;
           var state = this.props.data.location.region;
           var zip = this.props.data.location.postalCode;
           var phone = this.props.data.phone;
           var email = this.props.data.email;
        }

        return <div className="columns contact-details">
            <h2>Contact Details</h2>
            <aside className="address">
                <span>{name}</span><br />
                <address>
                    {street}
                    {street && (city || state || zip) && <br />}
                    {city}
                    {(state && <span>, {state}</span>)}
                    {(zip && <span>, {zip}</span>)}
                </address>
                <br />
                <a href={`tel:${phone}`}>{phone}</a>
                <br />
                <a href={`mailto:${email}`}>{email}</a>
            </aside>
        </div>
    }
}

export default ContactDetails;

