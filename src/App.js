import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import MyFox from "./components/myAPIVolpe/myAPIVolpe";
import MyCardDogList from "./components/myCardDog/cardListDogs";
import MyCardDigimonList from "./components/myDigimonCard/myCardDigimonList";
import MySearchDigimon from "./components/myDigimonCard/myCercaDigimon";
function App() {
  return (
    <>
      <Container className="mt-5 text-center">
        <Row>
          <Col>
            <MyFox />
          </Col>
          <Col>
            <MyCardDogList />
          </Col>
        </Row>
        <Row md={5}>
          <MySearchDigimon />
        </Row>
        <Row md={5}>
          <MyCardDigimonList />
        </Row>
      </Container>
    </>
  );
}

export default App;
