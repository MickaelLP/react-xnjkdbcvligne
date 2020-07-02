import React from 'react';
import Navigation from '../components/Navigation.js';
import Langages from '../connaissances/Langages';
import Loisirs from '../connaissances/Loisirs';
import Experiences from '../connaissances/Experiences';
import autresCompetences from '../connaissances/autresCompetences';

const Connaissances = () => {
  return (
    <div classNames="knowledges">
      <Navigation />
        <div classNames="knowledgesContent">
          <Langages />
          <AutresCompetences />
          <Experiences />
          <Loisirs />
        </div>
      <h1>Page de connaissances</h1>
    </div>
  );
}

export default Connaissances;