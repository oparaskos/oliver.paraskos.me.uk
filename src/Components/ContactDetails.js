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
            <p className="address">
                <span>{name}</span><br />
                <address>{street}<br />
                    {city} {state}, {zip}
                </address>
                <br />
                <a href={`tel:${phone}`}>{phone}</a>
                <br />
                <a href={`mailto:${email}`}>{email}</a>
            </p>
        </div>
    }
}

export default ContactDetails;

