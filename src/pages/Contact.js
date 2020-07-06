import React from 'react';
import Navigation from '../components/Navigation.js';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
            <i className="fas fa-map-marker-alt"></i>
            <span>La Pocatière</span>
            </li>

            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0646190691">
                <span className="clickInput" onClick={
                  ()=>{
                    alert('Téléphone copié !')
                  }
                  }>06 46 19 06 91
                </span>
              </CopyToClipboard>
            </li>

            <li>
              <i className="fas fa-envelope"></i>
              <CopyToClipboard text="email@gmail.com">
                <span className="clickInput" onClick={
                  ()=>{
                    alert('Email copié !')
                  }
                  }>email@gmail.com
                </span>
              </CopyToClipboard>
            </li>

          </ul>

        

        </div>
        
      </div>
    </div>
  );
}

export default Contact;