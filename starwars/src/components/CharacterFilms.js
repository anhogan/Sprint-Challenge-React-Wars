import React, { useState, useEffect } from 'react';

const CharacterFilms = (props) => {
  const [films, setFilms] = useState(props.films);
  console.log(films);

  return (
    <div>
      {props.films.map((film) => film)}
    </div>
  )
}

export default CharacterFilms;