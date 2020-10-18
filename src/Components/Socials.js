import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab, fas)

const Socials = ({profiles}) => 
  (profiles.map((network) =>
    <li key={network.network}>
      <a href={network.url} title={network.network}>
        <FontAwesomeIcon icon={network.className || (network.network &&  ['fab', network.network.toLowerCase()] )} />
      </a>
    </li>)
  );

export default Socials;