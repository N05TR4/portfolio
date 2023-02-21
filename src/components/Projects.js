import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
//import TrackVisibility from 'react-on-screen';


export const Projects = () => {
    
    const projects = [
        {
            title: "Business Startup1",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup2",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup3",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup4",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup5",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup6",
            description: "Design & Development",
            imgUrl: projImg3,
        },

    ];

    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Proyectos</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" defaultActiveKey="first" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Opción 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Opción 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Opción 3</Nav.Link>
                                </Nav.Item>
                                
                            </Nav>
                           
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return(
                                                    <ProjectCard 
                                                        key={index} 
                                                        {...project} 
                                                    />
                                                )
                                            })   
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
             
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                              
                                           
                                        }
                                    </Row>
                                </Tab.Pane>       
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="colorSharp2" />
        </section>
    )
}