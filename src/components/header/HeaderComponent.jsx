import { Col, Container, Row } from 'react-bootstrap';
import { ImageHeader } from '../../assets';

const HeaderComponent = () => {
  return (
    <div className="header text-white max-vh-100 position-relative">
      {/* <img src={CircleArrow} alt="Circle" className="position-absolute bottom-50 end-0" style={{zIndex: '1'}} /> */}
      <Container className="z-2">
        <Row className="row-cols-1 row-cols-lg-2 py-5">
          <Col className="my-auto order-2 order-lg-1 mt-4 mt-lg-auto text-center text-lg-start col-gap-3">
            <h1 className="fw-normal fs-md-1 fs-3">Save time by building fast with Boldo Template </h1>
            <h4 className="fw-normal fs-6 h6 my-3">Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</h4>
            <button className="button-template me-3">Buy template</button>
            <button className="button-explore">Explore</button>
          </Col>
          <Col className="ms-auto order-1 order-lg-2">
            <img src={ImageHeader} alt="Image" className="w-100 d-block" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderComponent;
