import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/prog1.jpg";
import projImg2 from "../assets/img/prog2.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Infinite Customizations",
      description: "Features designed specifically for your business",
      imgUrl: projImg1,
    },
    {
      title: "Leading the Evolution",
      description: "Push Boundaries ad Lead.",
      imgUrl: projImg2,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Why Choose Us?</h2>
                <p>Chefie is committed to providing innovative, customized solutions that cater to the unique challenges of the hospitality industry, empowering you to deliver exceptional service and achieve operational excellence.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Customizations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Innovations</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        <ProjectCard key={0} {...projects[0]}/>
                        <Col>
                          <h4 style={{textAlign: 'center', margin: '15px 0'}} className="buddy1">Comprehensive Table Management </h4>
                          <p className="dsa">Optimize seating and reservations and booking directly at tables through QR codes which redirects to a personalised app.</p>
                          <h4 style={{textAlign: 'center', margin: '15px 0'}} className="buddy2">Seamless POS Systems </h4>
                          <p className="dsa">Fast and efficient point-of-sale management. Every feature is optimized to meet your specific needs.</p>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        <ProjectCard key={1} {...projects[1]}/>
                        <Col>
                          <h4 style={{textAlign: 'center', margin: '15px 0'}} className="buddy1">Mobile Integration</h4>
                          <p className="dsa">Access and manage your business on the go. Make data-driven decisions with immediate insights.</p>
                          <h4 style={{textAlign: 'center', margin: '15px 0'}} className="buddy2">AI-Driven Insights</h4>
                          <p className="dsa">Enhance customer engagement and operational efficiency using cutting edge tech and stay ahead of the curve</p>
                        </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
