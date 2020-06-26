// Fichier react pour le menu de navigation du WebCV.
import React from 'react';
import {NavLink} from 'react-router-dom';
import img from '../../media.jpg';

const Navigation = () => {
  return(
    <div className="sidebar">

      <div className="id">

        <div className="idContent">
          <img src="https://wallpapercave.com/wp/wp2377581.jpg" alt="Photo de profil" height="200"/>
          <h3>Mickael Joly</h3>
        </div>

      </div>

        <div className="navigation">
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="navActive"> {/*  en react les classes se nomment className. */}
              <i className="fas fa-home"></i>
              <span>Accueil</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/Competences" activeClassName="navActive"> {/*  en react les classes se nomment className. */}
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/Portefolio" activeClassName="navActive"> {/*  en react les classes se nomment className. */}
              <i className="fas fa-images"></i>
              <span>Portefolio</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/Contact" activeClassName="navActive"> {/*  en react les classes se nomment className. */}
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>

    </div>
  );
};

export default Navigation;