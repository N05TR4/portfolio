import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png"




export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                     <div className="skill-bx">
                        <h2>Habilidades</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Img" />
                                <h5>Desarrollador Web</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Img" />
                                <h5>Backend</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Img" />
                                <h5>Frontend</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Img" />
                                <h5>Resposabilidad</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Img" />
                                <h5>Trabajo en equipo</h5>
                            </div>
                           
                        </Carousel>
                     </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Img" />

        </section>
    )
}