import React from 'react';
import Header from './Components/Header.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faHtml5, faCss3Alt, faDocker, faNode, faReact, faTwitter, faLinkedinIn, faGithubAlt} from '@fortawesome/free-brands-svg-icons'
import Projects from './Components/Projects/Projects.jsx'

import './App.css';

function App() {
  return (
    <div className="App">
   
{/* <div class="menu-wrap">
    <input type="checkbox" class="toggler"/>
    <div class="hamburger"><div></div></div>
    <div class="menu">
      <div>
        <div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  

  <header class="showcase">
    <div class="container showcase-inner">
      <div>
      <FontAwesomeIcon className="social-icon twitter" icon={faTwitter}/>
      <FontAwesomeIcon className="social-icon" icon={faLinkedinIn}/>
      <FontAwesomeIcon className="social-icon" icon={faGithubAlt} />
      </div>
      <h1>Welcome!</h1>
      <h3>I am Brandon Allison,  a software developer located in Pennsylvania.</h3>
      <div>
      <FontAwesomeIcon className="icon" icon={faHtml5} />
      <FontAwesomeIcon className="icon" icon={faCss3Alt}/>
      <FontAwesomeIcon className="icon" icon={faJs} />
      <FontAwesomeIcon className="icon" icon={faReact} />
      <FontAwesomeIcon className="icon" icon={faNode} />
      <FontAwesomeIcon className="icon" icon={faDocker} />
      </div>
    </div>
  </header> */}
    <Projects/>
    </div>
  );
}

export default App;
