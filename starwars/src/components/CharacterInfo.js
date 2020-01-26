import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardSubtitle } from 'reactstrap';
import CharacterFilms from './CharacterFilms';

const CharacterInfo = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardText>Birth Year: {props.birth_year}</CardText>
          <CardText>Gender: {props.gender}</CardText>
          <CardSubtitle>Appears In:</CardSubtitle>
          {/* <CardText>{props.characters.map((film) => <CharacterFilms film={film}/>)}</CardText> */}
        </CardBody>
      </Card>
    </div>
  )
}

export default CharacterInfo;