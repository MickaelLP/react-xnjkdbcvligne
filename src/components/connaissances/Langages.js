import React, { Component } from 'react';

class Langages extends Component{

  state = {

    // Création d'un tableau langages et frameworks. 

    languages: [
      {id: 1, value:"javascript", xp:1.8},
      {id: 2, value:"Css", xp:1.8},
      {id: 3, value:"Php", xp:1.8},
      {id: 4, value:"Python", xp:1.8},
      {id: 5, value:"Visual Basic", xp:1.8},
      {id: 5, value:"C#", xp:1.8}
    ],

    frameworks: [
      {id:1, value:"Bootstrap", xp:2},
      {id:1, value:"React", xp:0.2},
      {id:1, value:"Laravel", xp:0.2},
      {id:1, value:"Angular", xp:0.2},
      {id:1, value:"Sass", xp:2},
    ]
  }

  render () {

    let {languages,frameworks} = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar />
        <ProgressBar />
      </div>
    );
  }
}

export default Langages;