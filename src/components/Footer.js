import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import { Github } from 'react-bootstrap-icons';
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Link } from 'react-router-dom';
import { Twitter } from 'react-bootstrap-icons';


const footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <Link className='text-light font-weight-bold text-decoration-none'><h2 style={{fontFamily: 'monospace san-serif', marginTop: '2rem', fontStyle: 'oblique', fontSize: '2rem'} }>MANAS</h2></Link>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end justify-content-center">
            <div className="social-icon mt-5 center-block">
              <Link href="https://www.linkedin.com/in/manasbajpai/" target='_blank'><img src={navIcon1} alt="Icon" /></Link>
              <Link href="https://github.com/Manas0916" target='_blank'><Github className='hii' color='white'/></Link>
              <Link href="https://www.instagram.com/manas_0916/" target='_blank'><img src={navIcon3} alt="Icon" /></Link>
              <Link href="https://www.instagram.com/manas_0916/" target='_blank'><Twitter className='hii' color='white'/></Link>
            </div>
            <p><span className='fw-bold'>Call:</span> +91 7991994890</p>
            <p><span className='fw-bold'>Email:</span> manas.bajpai16@gmail.com</p>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default footer;
