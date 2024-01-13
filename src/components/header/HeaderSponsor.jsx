import { Col, Container, Row } from 'react-bootstrap';
import { Boldo, Presto } from '../../assets';

const HeaderSponsor = () => {
  return (
    <div className="w-100 header header-brand text-white">
      <Container>
        <Row className="d-flex gy-2 py-2">
          <Col className="fw-bold fs-5 d-flex align-items-center">
            <img src={Boldo} alt="Boldo" className="me-1" />
            Boldo
          </Col>
          <Col className="fw-bold fs-5 d-flex align-items-center">
            <img src={Presto} alt="Presto" className="me-1" />
            Presto
          </Col>
          <Col className="fw-bold fs-5 d-flex align-items-center">
            <img src={Boldo} alt="Boldo" className="me-1" />
            Boldo
          </Col>
          <Col className="fw-bold fs-5 d-flex align-items-center">
            <img src={Presto} alt="Presto" className="me-1" />
            Presto
          </Col>
          <Col className="fw-bold fs-5 d-flex align-items-center">
            <img src={Boldo} alt="Boldo" className="me-1" />
            Boldo
          </Col>
          <Col className="fw-bold fs-5 d-flex align-items-center">
            <img src={Presto} alt="Presto" className="me-1" />
            Presto
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderSponsor;
