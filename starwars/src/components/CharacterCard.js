import React from 'react';
import CharacterInfo from './CharacterInfo';
import CharacterFilms from './CharacterFilms';

const CharacterCard = (props) => {
  return (
    <div>
      {props.characters.map((character) => <CharacterInfo name={character.name} birth_year={character.birth_year} gender={character.gender} />)}
      {/* <CharacterInfo name={props.characters.name} birth_year={props.characters.birth_year} gender={props.characters.gender} /> */}
      <CharacterFilms />
    </div>
  )
}

export default CharacterCard;