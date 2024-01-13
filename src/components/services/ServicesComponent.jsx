import { Card, Col, Container, Row } from 'react-bootstrap';
import { Arrow, Services1, Services2, Services3 } from '../../assets';

const ServicesComponent = () => {
  return (
    <div className="w-100 max-vh-100 d-flex justify-content-center services">
      <Container>
        <Row>
          <Col className="text-center">
            <h6 className="opacity-50 py-2">Our Services</h6>
            <h1 className="fw-normal fs-4 pb-4">Handshake infographic mass market crowdfunding iteration.</h1>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 gy-3 justify-content-center">
          <Col>
            <Card className="card-services rounded-4 text-start mx-auto">
              <Card.Img variant="top" src={Services1} className="w-100 d-block" />
              <Card.Body className="ps-1 text-start p-0 py-2">
                <Card.Title>Cool Feature Title</Card.Title>
                <Card.Text className="opacity-75">Learning curve network effects return on investment.</Card.Text>
                <button className="btn fw-bold btn-explore ps-0">
                  Explore More <img src={Arrow} alt="Arrow" className="rotate-180" />
                  <div className="line-btn"></div>
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-services rounded-4 text-start">
              <Card.Img variant="top" src={Services2} />
              <Card.Body className="ps-1 text-start p-0 py-2">
                <Card.Title>Even cooler feature</Card.Title>
                <Card.Text className="opacity-75">Learning curve network effects return on investment.</Card.Text>
                <button className="btn fw-bold btn-explore ps-0">
                  Explore More <img src={Arrow} alt="Arrow" className="rotate-180" />
                  <div className="line-btn"></div>
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-services rounded-4 text-start">
              <Card.Img variant="top" src={Services3} />
              <Card.Body className="ps-1 text-start p-0 py-2">
                <Card.Title>Cool Feature Title</Card.Title>
                <Card.Text className="opacity-75">Learning curve network effects return on investment.</Card.Text>
                <button className="btn fw-bold btn-explore ps-0">
                  Explore More <img src={Arrow} alt="Arrow" className="rotate-180" />
                  <div className="line-btn"></div>
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServicesComponent;
