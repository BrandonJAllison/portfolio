import React from 'react';
import Header from './Components/Header.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faHtml5, faCss3Alt, faDocker} from '@fortawesome/free-brands-svg-icons'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', height: '80vh', justifyContent:'center'}}>
      <div>
      <h2>Brandon J. Allison</h2>
      <h3>Portfolio Coming Soon ...</h3>
      </div>
      <div>
      <FontAwesomeIcon className="icon" icon={faJs} />
      <FontAwesomeIcon className="icon" icon={faHtml5} />
      <FontAwesomeIcon className="icon" icon={faCss3Alt}/>
      <FontAwesomeIcon className="icon" icon={faDocker} />
      </div>
      </div>

    </div>
  );
}

export default App;
