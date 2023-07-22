import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
 import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
 import Row from 'react-bootstrap/Row';
import image1 from '../images/img1.jpg'
import image2 from '../images/img2.jpg'
import image3 from '../images/img3.jpg'
//  import Waxing from '../ServiceItems/Waxing';
import './Services.css'

function Services() {
  return (
    <>
    <div id="services-section">
    <h1 className='heading'>Services</h1>
    <Container>
      <Row className= 'content'>
        {/* <Col xs={6} md={4}>
          <Image src={image1} rounded />
        </Col> */}
        
         <Col xs={4} md={4}>
         <NavLink to="/packages">
          <Image src={image1} className='img'roundedCircle />
          <h3  className="service-name"> PACKAGES</h3>
          </NavLink>
        </Col>

         <Col xs={4} md={4}>
         <NavLink to="/waxing">
          <Image src={image2} className='img' roundedCircle />
          <h3 className="service-name"> WAXING</h3>
         </NavLink>
        </Col>


        <Col xs={4} md={4}>
        <NavLink to="/bleach & de-tan">
          <Image src={image3}className='img' roundedCircle />
          <h3 className="service-name"> BLEACH & DE-TAN</h3>
          </NavLink>
        </Col>


        <Col xs={4} md={4}>
          <NavLink to="/mani-padi">
          <Image src={image3}className='img' roundedCircle />
          <h3 className="service-name">MANI-PEDI</h3>
          </NavLink>
        </Col>
        {/* <Col xs={6} md={4}>
          <Image src={image3} thumbnail />
        </Col> */}
      </Row>

      <Row className= 'content'>
        {/* <Col xs={6} md={4}>
          <Image src={image1} rounded />
        </Col> */}
         <Col xs={4} md={4}>
          <NavLink to="/pre-bridal">
          <Image src={image1} className='img'roundedCircle />
          <h3 className="service-name">PRE-BRIDAL</h3>
          </NavLink>
        </Col>


         <Col xs={4} md={4}>
          <NavLink to="/threading">
          <Image src={image2} className='img' roundedCircle />
          <h3 className="service-name">THREADING</h3>
          </NavLink>
        </Col>

        <Col xs={4} md={4}>
          <NavLink to="/hair-care">
          <Image src={image3}className='img' roundedCircle />
          <h3 className="service-name">HAIR CARE</h3>
          </NavLink>
        </Col>

        <Col xs={4} md={4}>
          <NavLink to="/makeup">
          <Image src={image3}className='img' roundedCircle />
          <h3 className="service-name">MAKEUP</h3>
          </NavLink>
        </Col>
        {/* <Col xs={6} md={4}>
          <Image src={image3} thumbnail />
        </Col> */}
      </Row>


      <Row className= 'content'>
        {/* <Col xs={6} md={4}>
          <Image src={image1} rounded />
        </Col> */}
         <Col xs={4} md={4}>
          <NavLink to="/bridal-makeup">
          <Image src={image1} className='img'roundedCircle />
          <h3 className="service-name">BRIDAL MAKEUP</h3>
          </NavLink>
        </Col>

         <Col xs={4} md={4}>
          <NavLink to="/nails">
          <Image src={image2} className='img' roundedCircle />
          <h3 className="service-name">NAILS</h3>
          </NavLink>
        </Col>

        <Col xs={4} md={4}>
          <NavLink to="/body-massage">
          <Image src={image3}className='img' roundedCircle />
          <h3 className="service-name">BODY MASSAGE</h3>
          </NavLink>
        </Col>

        <Col xs={4} md={4}>
          <NavLink to="/facial & clean-up">
          <Image src={image3}className='img' roundedCircle />
          <h3 className="service-name">FACIAL & CLEAN-UP</h3>
          </NavLink>
        </Col>
        {/* <Col xs={6} md={4}>
          <Image src={image3} thumbnail />
        </Col> */}
      </Row>


    </Container>
    </div>
    </>
  );

}

export default Services;