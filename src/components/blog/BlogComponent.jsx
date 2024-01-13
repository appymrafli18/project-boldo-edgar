import { Col, Container, Row } from 'react-bootstrap';
import { Check, ImageBlog } from '../../assets';

const BlogComponent = () => {
  return (
    <div className="w-100 max-vh-100" style={{ paddingBlock: '200px' }}>
      <Container>
        {/* TOP */}
        <Row>
          <Col>
            <img src={ImageBlog} alt="Blog" className="w-100" />
          </Col>
        </Row>
        <Row style={{ paddingBlock: '30px' }} className="row-cols-md-2 row-cols-1 gy-3 align-items-center">
          <Col>
            <h1 className="fs-2">We connect our customers with the best, and help them keep up-and stay open.</h1>
          </Col>
          <Col>
            <Row className="row-cols-1 gy-4 mx-1">
              <Col className="p-3 shadow d-flex justify-content-between rounded-3">
                <span>We connect our customers with the best?</span>
                <img src={Check} alt="check" width={28} />
              </Col>
              <Col className="p-3 shadow d-flex justify-content-between rounded-3">
                <span>We connect our customers with the best?</span>
                <img src={Check} alt="check" width={28} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {/* TOP */}
    </div>
  );
};

export default BlogComponent;
