import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { type IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faHandsBubbles, type IconLookup, type IconName } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { codebergIconpack } from './codebergIconpack';

library.add(fab, fas, codebergIconpack);

interface Network {
  network: string;
  url: string;
  className?: IconDefinition | IconLookup;
}

interface SocialsProps {
  profiles: Network[];
}

const Socials: React.FC<SocialsProps> = ({ profiles }) => (
  <ul>
    {profiles.map((network) => (
      <li key={network.network}>
        <a rel="noreferrer noopener" href={network.url} title={network.network} itemProp="sameAs">
          {network.className && Array.isArray(network.className) ? (
            <FontAwesomeIcon icon={network.className || faHandsBubbles} />
          ) : (
            <FontAwesomeIcon icon={['fab', network.network.toLowerCase() as IconName]} />
          )}
        </a>
      </li>
    ))}
  </ul>
);

export default Socials;
