import React, { PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, IconLookup } from '@fortawesome/free-solid-svg-icons';
import './Chip.scss';

export interface ChipProps {
    icons: (IconDefinition | IconLookup)[];
    iconSeperator?: string;
}
export const Chip: React.FC<PropsWithChildren<ChipProps>> = ({ icons, iconSeperator = '/', children }) => {
    return <span className='chip'>
        {icons && (
            <span className='icon'>
                {icons.map((icon, i) => <>
                    <FontAwesomeIcon icon={icon} key={i} />
                    {i < icons.length - 1 ? iconSeperator : <></>}
                </>)}
            </span>
        )}
        {children}
    </span>;
};
