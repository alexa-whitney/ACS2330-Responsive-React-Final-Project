import { Container, Row, Col } from "react-bootstrap";
import './Footer.css';
import linkedin from "../../assets/images/linkedin.svg";
import github from "../../assets/images/github.svg";

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a
                                href="https://www.linkedin.com/in/alexawhitney/"
                                aria-label="Visit Alexa Whitney's LinkedIn profile"
                            >
                                <img src={linkedin} alt="LinkedIn Icon" />
                            </a>
                            <a
                                href="https://github.com/alexa-whitney"
                                aria-label="Visit Alexa Whitney's GitHub profile"
                            >
                                <img src={github} alt="GitHub Icon" />
                            </a>
                        </div>
                        <p>© 2023 Alexa Whitney</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;