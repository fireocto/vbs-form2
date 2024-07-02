import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import churchWide from "../assets/church_wide.png";
import breakerRockLogo from "../assets/visit_breaker_rock.jpg";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${churchWide})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      
      <Container>
      {/* Row for text */}
        <Row className="justify-content-center mb-5"> {/* Adjust alignment to center */}
          <Col md={12}>
            <h1>Welcome to Blankenship Community Church!</h1>
          </Col>
        </Row>
        {/* CARD */}
        <Row className="justify-content-start">
          <Col md={4}>
            <Card style={{ width: '100%', textAlign: 'center' }}>
              <Card.Img variant="top" src={breakerRockLogo} /> {/* Replace with your actual photo */}
              <Card.Body>
                <Card.Title>God’s rock solid truth in a world of shifting sands</Card.Title>
                <Card.Text>
                  VBS is coming soon! Sign up your child today!
                </Card.Text>
                <Link to="/register">
                  <Button variant="primary">Register Now</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;