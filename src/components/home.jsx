import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';



const Home = () => {
  return (
    <>
      <div className="containerOne">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src={require('./img/juniper.jpeg')}
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src={require('./img/festiva.jpeg')}
              alt="Second slide"
            />

            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src={require('./img/vamos.jpeg')}
              alt="Third slide"
            />

            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="containerTwo">
        <h1 className="row align-items-center justify-content-center">Features</h1>
        <div className="features row">
          <div className="col col-3 featureItem">
            <img
              src={require('./img/ecoFriendly.jpeg')}
              alt="" />
            <p>Eco Friendly</p>
          </div>
          <div className="col col-3 featureItem">
            <img
              src={require('./img/lowMaintenance.png')}
              alt="" />
            <p>Eco Friendly</p>
          </div>
          <div className="col col-3 featureItem">
            <img
              src={require('./img/noLicence.png')}
              alt="" />
            <p>Eco Friendly</p>
          </div>
          <div className="col col-3 featureItem">
            <img
              src={require('./img/noRegistration.jpeg')}
              alt="" />
            <p>Eco Friendly</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;