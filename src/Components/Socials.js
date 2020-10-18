import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab)

const Socials = ({profiles}) => {
    return profiles.map(function(network){
        return <li key={network.network}><a href={network.url}>
           <FontAwesomeIcon icon={['fab', network.className || (network.network.toLowerCase())]} />
         </a></li>
      });
}

export default Socials;