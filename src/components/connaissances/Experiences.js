import React from 'react';


// function est abrégé par "=>";
const Experiences = () => {
  return (
    <div className="experience">

      <h3>Mes expériences</h3>

      <div className="exp-1">
        <h4>Création d'une application web permettant d'effectuer un blast entre deux ADN du génome humain.</h4>
        <h5>2016</h5>
        <p>Lorem ipsum etc...</p>
      </div>

      <div className="exp-2">
        <h4>Création d'une application web gérant les factures de machine du lycée Le Cobusier, Illkirsch</h4>
        <h5>2017</h5>
        <p>Lorem ipsum etc...</p>
      </div>

      <div className="exp-3">
        <h4>Site vitre de l'ABMLP avec Joomla</h4>
        <h5>2018</h5>
        <p>Lorem ipsum etc...</p>
      </div>


    </div>
  );
}

export default Experiences;