import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap"


function Roster() {

    const getRoster = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.get(`${process.env.REACT_APP_VBS_FORM_API}/admin`);
          console.log('Response:', response.data); // Optionally log response data
        } catch (error) {
          console.error('Error fetching results:', error.message);
        }
      };
}
  return (
    <div>Roster</div>
  )

export default Roster