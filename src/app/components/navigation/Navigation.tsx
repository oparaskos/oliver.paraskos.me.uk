import React from 'react';
import Link from '../link/Link';
import './Navigation.scss';

interface NavigationProps {
    className?: string | undefined;
    data: {
        basics?: any | undefined; portfolio?: any; // Define the type for portfolio data accordingly

        // Define the type for portfolio data accordingly
        testimonials?: any;
    }
}

export const Navigation = ({ className, data }: NavigationProps) => {

    return <nav className={[className, 'desktop'].join(' ')}>
            <input type='checkbox' id='overlay-input' />
            <label htmlFor="overlay-input"><span></span></label>
            <ul id="nav" className="nav">
                <li>
                    <Link to="/#home">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/#about">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/#resume">
                        Resume
                    </Link>
                </li>
                {data.portfolio && (
                    <li>
                        <Link to="/#portfolio">
                            Works
                        </Link>
                    </li>
                )}
                {data.testimonials && (
                    <li>
                        <Link to="/#testimonials">
                            Testimonials
                        </Link>
                    </li>
                )}
                <li>
                    <Link to="#contact">
                        Contact
                    </Link>
                </li>
                {/* <li>
                    <Link to="/tutoring">
                        Tutoring
                    </Link>
                </li> */}
            </ul>
        </nav>;

}

