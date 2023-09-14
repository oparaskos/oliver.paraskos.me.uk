import React from 'react';
import { faGlobe, faPeopleArrows, faPeopleGroup, faPerson } from '@fortawesome/free-solid-svg-icons';
import { Chip } from '../chip/Chip';

export function OfferedSchemes() {
    return <p>
        <Chip icons={[faGlobe, faPeopleArrows]}>
            <span><b>Online</b> or <b>In-Person</b></span>
        </Chip>
        <Chip icons={[faPeopleGroup, faPerson]}>
            <span><b>Small-Group</b> or <b>One-to-One</b></span>
        </Chip>
    </p>;
}
