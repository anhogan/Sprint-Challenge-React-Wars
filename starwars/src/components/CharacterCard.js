import React from 'react';
import CharacterInfo from './CharacterInfo';

const CharacterCard = (props) => {
  return (
    <div>
      {props.characters.map((character) => <CharacterInfo key={character.name} name={character.name} birth_year={character.birth_year} gender={character.gender} />)}
    </div>
  )
}

export default CharacterCard;