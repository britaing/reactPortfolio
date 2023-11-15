import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import password from "../../assets/pgen.png";
import readme from "../../assets/readmeIcon.png";
import schedule from "../../assets/scheduler.png";
import svg from "../../assets/svg.png";
import port from "../../assets/portfolio.jpg";
import craft from "../../assets/crafting.jpg";

function Portfolio() {
  return (
    <Container>
      <CardGroup>
        <Row xs={1} md={2} lg={2}>
          <Col>
            <Card className="cardSpace">
              <a href="https://britaing.github.io/PasswordGenerator/">
                <Card.Img
                  variant="top"
                  src={password}
                  width={180}
                  height={180}
                  alt="password generator"
                />
              </a>
              <Card.Body>
                <Card.Title>Password Generator</Card.Title>
                <Card.Text>
                  A simple application to create a safe and secure randomized
                  password.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <a href="https://github.com/britaing/PasswordGenerator">
                    Git Repo
                  </a>
                </small>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="cardSpace">
              <Card.Img
                variant="top"
                src={readme}
                width={180}
                height={180}
                alt="readme generator"
              />
              <Card.Body>
                <Card.Title>README Generator</Card.Title>
                <Card.Text>An easy to use README file generator.</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <a href="https://github.com/britaing/README-Generator">
                    Git Repo
                  </a>
                </small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row xs={1} md={2} lg={2}>
          <Col>
            <Card className="cardSpace">
              <a href="https://britaing.github.io/Work_Day_Scheduler/">
                <Card.Img
                  variant="top"
                  src={schedule}
                  width={180}
                  height={180}
                  alt="password generator"
                />
              </a>
              <Card.Body>
                <Card.Title>Password Generator</Card.Title>
                <Card.Text>
                  An easy to use application to keep track of your schedule
                  throughout the day.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <a href="https://github.com/britaing/Work_Day_Scheduler">
                    Git Repo
                  </a>
                </small>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="cardSpace">
            <Card.Img
                variant="top"
                src={svg}
                width={180}
                height={180}
                alt="svg generator"
              />
              <Card.Body>
                <Card.Title>SVG Generator</Card.Title>
                <Card.Text>
                  A quick and easy to use SVG image generator.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <a href="https://github.com/britaing/svg-logo-maker">
                    Git Repo
                  </a>
                </small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row xs={1} md={2} lg={2}>
          <Col>
            <Card className="cardSpace">
           <a href='https://britaing.github.io/Portfolio/'> <Card.Img
                variant="top"
                src={port}
                width={180}
                height={180}
                alt="original portfolio"
              /></a>
              <Card.Body>
                <Card.Title>Original Portfolio</Card.Title>
                <Card.Text>
                  My first portfolio site that I created - I have come a long
                  way from this one and I'm very proud of what I have
                  accomplished.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted"><a href="https://github.com/britaing/Portfolio">
                    Git Repo
                  </a></small>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="cardSpace">
           <Card.Img
                variant="top"
                src={craft}
                width={180}
                height={180}
                alt="original portfolio"
              />
              <Card.Body>
                <Card.Title>Crafts and Other Passions</Card.Title>
                <Card.Text>
                  This page will be someplace that I can show some of my other hobbies and interests such as crafting and painting miniatures.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">COMING SOON</small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </CardGroup>
    </Container>
  );
}

export default Portfolio;
