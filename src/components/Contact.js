import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  

  const handleLinkedInClick = () => {
    window.location.href = 'https://www.linkedin.com/in/your-linkedin-profile';
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <h3>Contact No.:</h3>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <h3>+91 7668588806</h3>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <h3>Contact Email:</h3>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <h3>Shivapaliwal.hts@gmail.com</h3>
                    </Col>
                    
                    <Col size={12} className="px-1">
                    <button onClick={handleLinkedInClick}>Linked-In</button>
                    </Col>
                    
                  </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}