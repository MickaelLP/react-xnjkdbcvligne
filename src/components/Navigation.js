// Fichier react pour le menu de navigation du WebCV.
import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
  return(
    <div className="sidebar">

      <div className="id">

        <div className="idContent">
          <img src="./media/img.jpg" alt="Photo de profil"/>
          <h3>Mickael Joly</h3>
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

    </div>
  );
};

export default Navigation;