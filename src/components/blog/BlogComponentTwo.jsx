import { Card, Col, Container, Row } from 'react-bootstrap';
import { BlogEllipse10, BlogEllipse101, BlogEllipse102, Rectangle1270, Rectangle12701, Rectangle12702 } from '../../assets/index';

const BlogComponentTwo = () => {
  return (
    <div className="w-100 min-vh-100">
      <Container>
        <Row className="text-center">
          <Col>
            <h6 className="h6 opacity-50">Our Blog</h6>
          </Col>
        </Row>
        <Row className="text-center mb-5">
          <Col className="">
            <h1 className="h1 fw-normal">Value proposition accelerator product management venture</h1>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 g-4 justify-content-center">
          <Col className="w-auto">
            <Card className="mx-auto" style={{ width: '300px', maxWidth: '300px', minWidth: '300px', border: 'none' }}>
              <Card.Img variant="top" src={Rectangle1270} />
              <Card.Body className="ps-1">
                <Card.Title className="fs-6 fw-bold ">
                  Category <span className="fw-normal ps-1 opacity-50">November 22, 2021</span>
                </Card.Title>
                <Card.Text>Pitch termsheet backing validation focus release.</Card.Text>
                <div className="align-items-center d-flex">
                  <img src={BlogEllipse10} width={30} height={30} className="" />
                  <span className="p-2">Chandler Bing</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="w-auto">
            <Card className="mx-auto" style={{ width: '300px', maxWidth: '300px', minWidth: '300px', border: 'none' }}>
              <Card.Img variant="top" src={Rectangle12701} />
              <Card.Body className="ps-1">
                <Card.Title className="fs-6 fw-bold ">
                  Category <span className="fw-normal ps-1 opacity-50">November 22, 2021</span>
                </Card.Title>
                <Card.Text>Seed round direct mailing non-disclosure agreement graphical user interface rockstar.</Card.Text>
                <div className="align-items-center d-flex">
                  <img src={BlogEllipse101} width={30} height={30} className="" />
                  <span className="p-2">Rachel Green</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="w-auto">
            <Card className="mx-auto" style={{ width: '300px', maxWidth: '300px', minWidth: '300px', border: 'none' }}>
              <Card.Img variant="top" src={Rectangle12702} />
              <Card.Body className="ps-1">
                <Card.Title className="fs-6 fw-bold ">
                  Category <span className="fw-normal ps-1 opacity-50">November 22, 2021</span>
                </Card.Title>
                <Card.Text>Beta prototype sales iPad gen-z marketing network effects value proposition</Card.Text>
                <div className="align-items-center d-flex">
                  <img src={BlogEllipse102} width={30} height={30} className="" />
                  <span className="p-2">Monica Geller</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="text-center" style={{ paddingBlock: '50px' }}>
          <Col>
            <button className="btn text-white" style={{ background: 'var(--dark-blue)' }}>
              Load More
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// row-cols-lg-3 row-cols-md-2 row-cols-1

export default BlogComponentTwo;
