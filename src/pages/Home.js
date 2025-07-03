import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import churchWide from "../assets/church_wide.png";
import breakerRockLogo from "../assets/2025_full.jpg";

const Home = () => {
  return (
    <div
      className='hero-background'
      style={{
        backgroundImage: `url(${churchWide})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top', 
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '50px'
      }}
    >
      
      <Container>
      {/* Row for text */}
        <Row className="justify-content-center mt-3 mb-5"> 
          <Col md={12} className='text-center px-3'>
          <h1
            className="mx-auto"
            style={{
              maxWidth: '80vw',
              backgroundColor: 'rgba(255, 255, 255, 0.6)', // soft frosted-glass feel
              color: '#2c2c2c', // deep gray, easier on the eyes than black
              padding: '0.75rem 1.5rem',
              borderRadius: '12px',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)', // gentle depth
              display: 'inline-block',
              backdropFilter: 'blur(4px)', // enhances contrast without being harsh
            }}
          >
              Welcome to Blankenship Community Church!
            </h1>
          </Col>
        </Row>
        {/* CARD */}
        <Row className="mt-4 justify-content-lg-start justify-content-center">
          <Col xs={12} sm={8} md={6} lg={4}  className="px-4">
            <Card className='text-center px-3'>
              <Card.Img variant="top" src={breakerRockLogo} className='mt-2'/> 
              <Card.Body>
                <Card.Title>VBS is coming soon! Sign up your child today!</Card.Title>
                {/* <Card.Text>
                  VBS is coming soon! Sign up your child today!
                </Card.Text> */}
                <Link to="https://form.jotform.com/251825090295055">
                  <Button variant="primary" className='mt-2 mb-2'>Register Now</Button>
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