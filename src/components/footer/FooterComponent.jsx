import { Col, Container, Image, Row } from 'react-bootstrap';
import { Boldo } from '../../assets';

const FooterComponent = () => {
  return (
    <div className="w-100 max-vh-100 p-4 mt-5">
      <Container>
        <Row className="row-cols-lg-5 row-cols-sm-2 row-gap-4 row-cols-1 justify-content-lg-between justify-content-center">
          <Col className="row-gap-sm-4 row-gap-2 d-grid text-black-50">
            <div className="d-flex align-items-center gap-2">
              <Image src={Boldo} width={30} /> <span className="text-black fw-bold fs-1">Boldo</span>
            </div>
            <h6>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</h6>
            <h6>All rights reserved.</h6>
          </Col>
          <Col className="text-black-50 d-grid row-gap-sm-4 row-gap-2">
            <h1 className="fw-bold fs-3 text-black">Landings</h1>
            <h5>Home</h5>
            <h5>Products</h5>
            <h5>Services</h5>
          </Col>
          <Col className="text-black-50 d-grid row-gap-sm-4 row-gap-2">
            <h1 className="fw-bold fs-3 text-black">Company</h1>
            <h5>Home</h5>
            <h5>
              Careers{' '}
              <span className="btn text-black py-1 rounded-5 fw-bold ms-2" style={{ fontSize: '0.8rem', backgroundColor: 'var(--green-color)' }}>
                Hiring!
              </span>
            </h5>
            <h5>Services</h5>
          </Col>
          <Col className="text-black-50 d-grid row-gap-sm-4 row-gap-2">
            <h1 className="fw-bold fs-3 text-black">Recourses</h1>
            <h5>Blog</h5>
            <h5>Products </h5>
            <h5>Services</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
