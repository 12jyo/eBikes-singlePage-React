import React from 'react';
import { Row } from 'react-bootstrap';


const Contact = () => {
  return (
    <>
      <div className="contactContainer">
        <h1 className="row align-items-center justify-content-center" >Conatct Us</h1>
        <Row>
          <div className="col-4 contactItems row align-items-center justify-content-center">Get in Touch
            <p>Contact Us on +918950754626</p>
            <p>Email Us on info @kuberebikes.com</p>
          </div>
          <div className="col-4 contactItems row align-items-center justify-content-center text-decoration-none">Quick Links
            <p><a href="#home">Home</a></p>
            <p><a href="#about">About Us</a></p>
            <p><a href="#dealer">Become a Dealer</a></p>
          </div>
          <div className="col-4 contactItems row align-items-center justify-content-center">Models
            <p><a href="#juniper">Juniper</a></p>
            <p><a href="#festiva">Festiva</a></p>
            <p><a href="#vamos">Vamos</a></p></div>
        </Row>
      </div>

      <footer>
        <Row>
          <p className="col-6"><b> &copy;Kuber E-Bikes 2022 All rights reserved</b></p>
          <p className="col-6"><b> Made with in Kuber E-Bikes</b></p>
        </Row>
      </footer>
    </>
  );
};

export default Contact;