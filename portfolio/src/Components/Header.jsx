import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn, faGithubAlt} from '@fortawesome/free-brands-svg-icons'

import './header.scss'

const Header = () => {
return(
    <div className="header-container">
        <div className="links">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Projects</a>
            <a href="">Resume</a>
            <a href="">Contact</a>
        </div>

        <div className="icons">
            <FontAwesomeIcon className="icon" icon={faTwitter}/>
            <FontAwesomeIcon className="icon"  icon={faLinkedinIn}/>
            <FontAwesomeIcon className="icon"  icon={faGithubAlt} />
            
        </div>
    </div>
)
}

export default Header;