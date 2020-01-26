import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardBody, CardTitle, CardText, CardSubtitle, Container, Row, Col } from 'reactstrap';

const CharacterInfo = (props) => {
  const [films, setFilms] = useState(props.films);

  useEffect(() => {
    films.map((film) => {
      axios.get(film)
      .then(response => {
        setFilms(response.data.title)})
      .catch(error => {
        console.log(error.message)})});
  }, []);

  return (
    <Container>
      <Row className="m-2">
        <Col md={{ size: 8, order: 2, offset: 2 }}>
          <Card>
            <CardBody>
              <CardTitle>{props.name}</CardTitle>
              <CardText>Birth Year: {props.birth_year}</CardText>
              <CardText>Gender: {props.gender}</CardText>
              <CardSubtitle>Appears In:</CardSubtitle>
              <CardText>{films}</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default CharacterInfo;