import { Figure, Row, Col } from "react-bootstrap";
import profilePic from "../../assets/profileImage.jpg";
function About() {
  return (
    <>
      <Row>
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
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </Figure.Caption>
          </Figure>
        </Col>
      </Row>
    </>
  );
}

export default About;
