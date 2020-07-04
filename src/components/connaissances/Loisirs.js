import React from 'react';

const Loisirs = () =>  {
  return (
    <div className="hobbies">
      <h3>Mes loisirs</h3>

      <ul>
        <li className="hobby">
          <i className="fas fa-running"></i>
          <span>Écriture de fiction</span>
        </li>


        <li className="hobby">
          <i className="fas fa-running"></i>
          <span>Lecture (Théâtre, Histoire, psychologie,...)</span>
        </li>

        <li className="hobby">
          <i className="fas fa-running"></i>
          <span>Théâtre classique</span>
        </li>

        <li className="hobby">
          <i className="fas fa-running"></i>
          <span>Improvisation théâtrale</span>
        </li>        

        <li className="hobby">
          <i className="fas fa-running"></i>
          <span>Cégep en spectacle</span>
        </li>                

      </ul>

    </div>
  );
};


export default Loisirs;