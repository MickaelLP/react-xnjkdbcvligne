import React from 'react';

const ProgressBar = (props) => {

  return (
    <div className={props.className}>
      <h3>{props.title}</h3>
      <div className="years">

        <span>Années d'expérience</span>
        <span>1 an</span>
        <span>2 ans</span>

      </div>

      <div>
        {/* Les crochets dans du JSX veut dire qu'on va coder du javascript  */}   
        {
          /* À quoi sert map ?. le nom "items" peut être changé */
          props.languages.map((item) => {
            let xpYears = 2; 
            let progressBar = item.xp / xpYears *100 + "%";

            return (
              <div key={item.id} className="languagesList"> {/* Il faut obligatoirement une clé. */}
                <li>{item.value}</li>
                <div className="progressBar" style={{width:progressBar}}> {/* Les deux accolades sont utilisés pour faire de l'ajout de style. */}

                </div>
              </div>
            )
          })
        }
      </div>


    </div>
  );
}

export default ProgressBar;