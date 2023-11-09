import { Figure, Row, Col, Container } from "react-bootstrap";
import profilePic from "../../assets/profileImage.jpg";
function About() {
  return (
    <>
    <Container >
      <Row >
        <Col>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={profilePic}
            />
          </Figure>
        </Col>
        <Col>
          <Figure>
            <Figure.Caption>
              My name is Britain Gilgour and I have recently began my journey into coding. So far coding has been
              incredibly fast paced, challenging, and at times incredibly frustrating...I love it.
              <br/>
              I got into coding on a whim but found that I really enjoyed the challenge of it and decided to go for a career
              change. 
              <br/>
              When I'm not studying coding I am spending time with my supportive wife and my three delightful cats,
              playing video games, or, working at a restaurant as a floor manager.
              <br/>
              This site highlights some of my work so far and is (and probably will remain) a work in progress. 
              
            </Figure.Caption>
          </Figure>
        </Col>
      </Row>
      </Container>
    </>
  );
}

export default About;
