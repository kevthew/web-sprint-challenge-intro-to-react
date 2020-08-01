// Write your Character component here
import React from "react";
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  Container,
  Row,
  Col,
} from "../../node_modules/reactstrap";
import styled from "styled-components";

const BackgroundDiv = styled.div`
  background: tomato;
`;

const ContentTxt = styled.p`
  color: grey;
`;

function Character(props) {
  return (
    <Container>
      <Row>
        {props.characterArray.map((character) => {
          return (
            <Col xs="4">
              <Card key={character.created}>
                <BackgroundDiv>
                  <CardTitle>{character.name}</CardTitle>

                  <CardSubtitle>Gender: {character.gender}</CardSubtitle>
                  <CardBody>
                    <ContentTxt>
                      Born: {character.birth_year}
                      <br />
                      Height: {character.height}
                      <br />
                      Mass: {character.mass}
                    </ContentTxt>
                  </CardBody>
                </BackgroundDiv>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Character;
