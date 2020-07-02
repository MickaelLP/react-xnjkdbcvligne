import React from 'react';
import Navigation from '../components/Navigation';
import Langages from '../components/connaissances/Langages';
import Loisirs from '../components/connaissances/Loisirs';
import Experiences from '../components/connaissances/Experiences';
import AutresCompetences from '../components/connaissances/AutresCompetences';

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