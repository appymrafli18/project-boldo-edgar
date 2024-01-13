import { Col, Container, Row } from 'react-bootstrap';
import { Check, Feather, HomeBout1, HomeBout2, Star, Sun } from '../../assets';

const AboutComponent = () => {
  return (
    <div className="w-100 min-vh-100 homepageAbout">
      <Container>
        <Row className="row-cols-1 row-cols-lg-2">
          <Col>
            <img src={HomeBout1} alt="About Img" className="d-block w-75 mx-auto" />
          </Col>
          <Col>
            <h1 className="fs-2">We connect our customers with the best, and help them keep up-and stay open.</h1>
            <ul className="list-unstyled">
              <li>
                <img src={Check} width="25px" alt="Check" /> <span className="fs-6">We connect our customers with the best.</span>
              </li>
              <li>
                <img src={Check} width="25px" alt="Check" /> <span className="fs-6">Advisor success customer launch party.</span>
              </li>
              <li>
                <img src={Check} width="25px" alt="Check" /> <span className="fs-6">Business-to-consumer long tail.</span>
              </li>
            </ul>
            <button className="btn text-white fw-bold border">Start Now</button>
          </Col>
        </Row>
        <Row className="row-cols-1 row-cols-lg-2">
          <Col className="order-lg-2">
            <img src={HomeBout2} alt="About Img" className="d-block w-75 mx-auto" />
          </Col>
          <Col className="order-lg-1">
            <h1 className="fs-2">We connect our customers with the best, and help them keep up-and stay open.</h1>
            <ul className="list-unstyled">
              <li className="shadow">
                <img src={Feather} width="25px" alt="Check" /> <span className="fs-6">We connect our customers with the best.</span>
              </li>
              <li className="shadow">
                <img src={Star} width="25px" alt="Check" /> <span className="fs-6">Advisor success customer launch party.</span>
              </li>
              <li className="shadow">
                <img src={Sun} width="25px" alt="Check" /> <span className="fs-6">Business-to-consumer long tail.</span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutComponent;
