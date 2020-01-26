import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardSubtitle, Container, Row, Col } from 'reactstrap';

const CharacterInfo = (props) => {

  return (
    <Container>
      <Row>
        <Col md={{ size: 8, order: 2, offset: 2 }}>
          <Card>
            <CardBody>
              <CardTitle>{props.name}</CardTitle>
              <CardText>Birth Year: {props.birth_year}</CardText>
              <CardText>Gender: {props.gender}</CardText>
              <CardSubtitle>Appears In:</CardSubtitle>
              <CardText>{props.films.map((film) => film.title)}</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default CharacterInfo;