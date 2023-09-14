import React from 'react';
import { Link } from '../link/Link';
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
        <ul id="nav" className="nav">
            <li className="current">
                <Link className="smoothscroll" to="/#home">
                    Home
                </Link>
            </li>
            <li>
                <Link className="smoothscroll" to="/#about">
                    About
                </Link>
            </li>
            <li>
                <Link className="smoothscroll" to="/#resume">
                    Resume
                </Link>
            </li>
            {data.portfolio && (
                <li>
                    <Link className="smoothscroll" to="/#portfolio">
                        Works
                    </Link>
                </li>
            )}
            {data.testimonials && (
                <li>
                    <Link className="smoothscroll" to="/#testimonials">
                        Testimonials
                    </Link>
                </li>
            )}
            <li>
                <Link className="smoothscroll" to="#contact">
                    Contact
                </Link>
            </li>
            <li>
                <Link className="smoothscroll" to="/tutoring">
                    Tutoring
                </Link>
            </li>
        </ul>
    </nav>;
}

