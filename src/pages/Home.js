import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container className="mt-5">
      <h1>Welcome to Blankenship!</h1>
      <p>Sign your child up for VBS today!</p>
      <Link to="/register">
        <Button variant="primary">Register Now</Button>
      </Link>
    </Container>
  );
};

export default Home;