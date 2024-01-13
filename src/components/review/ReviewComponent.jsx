import { Card, Col, Container, Row } from 'react-bootstrap';
import { Review1, Review2, Review3 } from '../../assets';

const ReviewComponent = () => {
  return (
    <div className="min-vh-100 review">
      <Container>
        <Row>
          <Col>
            <h1 className="fw-normal display-6 text-center mx-auto w-75">An enterprise template to ramp up your company website</h1>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 gy-3 my-5">
          <Col>
            <Card>
              <Card.Body className="d-flex flex-column">
                <Card.Text className="fs-4">“Buyer buzz partner network disruptive non-disclosure agreement business”</Card.Text>
                <div className=" d-flex align-items-center gap-2">
                  <div className="img-section">
                    <Card.Img variant="bottom" src={Review1} className="w-100" />
                  </div>
                  <div className="text-section">
                    <Card.Text className="fw-bold my-0">Albus Dumbledore</Card.Text>
                    <Card.Text className="fw-normal my-0">Manager @ Howarts</Card.Text>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body className="d-flex flex-column">
                <Card.Text className="fs-4">“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”</Card.Text>
                <div className=" d-flex align-items-center gap-2">
                  <div className="img-section">
                    <Card.Img variant="bottom" src={Review2} className="w-100" />
                  </div>
                  <div className="text-section">
                    <Card.Text className="fw-bold my-0">Severus Snape</Card.Text>
                    <Card.Text className="fw-normal my-0">Manager @ Slytherin</Card.Text>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body className="d-flex flex-column">
                <Card.Text className="fs-4">“Release facebook responsive web design business model canvas seed money monetization.”</Card.Text>
                <div className=" d-flex align-items-center gap-2">
                  <div className="img-section">
                    <Card.Img variant="bottom" src={Review3} className="w-100" />
                  </div>
                  <div className="text-section">
                    <Card.Text className="fw-bold my-0">Harry Potter</Card.Text>
                    <Card.Text className="fw-normal my-0">Team Leader @ Gryffindor</Card.Text>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ReviewComponent;
