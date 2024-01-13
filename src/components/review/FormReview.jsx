import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const FormReview = () => {
  return (
    <div className="p-5 w-100 max-vh-100 text-white">
      <Container style={{ background: 'var(--dark-blue)' }} className="rounded-3 p-sm-5 p-2">
        <Row className="text-center mt-2">
          <Col>
            <h1 className="display-4 fs-2 p-2">An enterprise template to ramp up your company website</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form className="d-flex justify-content-center align-items-center p-4 gap-sm-2 row-gap-3 flex-wrap">
              <Form.Group controlId="form.email">
                <Form.Control type="email" placeholder="Your Email Address" className="rounded-5 py-2 px-4" style={{ maxWidth: '370px' }} />
              </Form.Group>
              <Button className="btn px-sm-5 py-sm-2 px-4 rounded-5 fw-bold" style={{ color: 'var(--dark-blue)', background: 'var(--green-color)' }} type="submit">
                Start Now
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// ps-3 pe-5

export default FormReview;
