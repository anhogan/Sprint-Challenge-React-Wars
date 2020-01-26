import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const CharacterInfo = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardText>Birth Year: {props.birth_year}</CardText>
          <CardText>Gender: {props.gender}</CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default CharacterInfo;