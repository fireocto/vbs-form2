import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap"
import { useLocation } from 'react-router-dom';

function Signup() {

  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    childAddress: '',
    childInfo: '',
    childEmergencyContactName: '',
    childEmergencyContactNumber: '',
    childDismissal: '',
    guardianName: '',
    guardianNumber: '',
    guardianEmail: '',
    guardianAddress: '',
    guardianChurch: '',
    guardianGuest: '',
    photoPermission: ''
  })

  const location = useLocation();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const onChangeHandler = (event) =>{
    event.preventDefault();
    setFormData(()=>({
      ...formData,
      [event.target.name]: event.target.value 
    }))
  }

  const makeRequest = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_VBS_FORM_API}/register`, formData);
      if (response.status === 200) {
        setShowSuccessMessage(true); // Show success message
        setTimeout(() => {
          setShowSuccessMessage(false); // Hide success message after 3 seconds
          window.location.reload(); // Reload the page after hiding the message
        }, 3000);

       location.push('/roster', { state: { formData } });
      }
      console.log('Response:', response.data); // Optionally log response data
    } catch (error) {
      console.error('Error fetching results:', error.message);
    }
  };


  return (
    <div className="kidForm">
      <header className="kidForm-header">
        <Container>
          <Card className="mb-10">
            <Card.Img />
            <Card.Body>
              <Card.Title>VBS Signup</Card.Title>
              <Card.Text>Sign your child up for VBS!</Card.Text>
            </Card.Body>
          </Card>
        </Container>

        <Container>  
          <Form onSubmit={makeRequest}>
            {/* CHILD INFORMATION FORM AREA */}
            <Row>
              <Col lg={6}>
                <Form.Group>
                  <Form.Label>Child's Information</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Child's Name" 
                    name='childName'
                    value={formData.childName}
                    onChange={onChangeHandler}
                    required
                  />
                  <Form.Control 
                    type="text" 
                    placeholder="Child's Age, Enter a Number" 
                    name='childAge'
                    value={formData.childAge}
                    onChange={onChangeHandler}
                    required
                  />
                  <Form.Control 
                    type="text" 
                    placeholder="Address" 
                    name='childAddress'
                    value={formData.childAddress}
                    onChange={onChangeHandler}
                    required
                  />
                  <Form.Text className="text">Medical or other information we need to know</Form.Text>
                  <Form.Control 
                    type="textarea" 
                    placeholder="Please include food allergies" 
                    name='childInfo'
                    value={formData.childInfo}
                    onChange={onChangeHandler}
                    required
                  />
                  <Form.Text className="text">Emergency Contact</Form.Text>
                  <Form.Control 
                    type="text" 
                    placeholder="Name" 
                    name='childEmergencyContactName'
                    value={formData.childEmergencyContactName}
                    onChange={onChangeHandler}
                    required
                  />
                  <Form.Control 
                    type="text" 
                    placeholder="Phone Number (###-###-####)" 
                    name='childEmergencyContactNumber'
                    value={formData.childEmergencyContactNumber}
                    onChange={onChangeHandler}
                    required
                  />
                  <Form.Text className='text'>Dismissal Information</Form.Text>
                  <Form.Control 
                    type="textarea" 
                    placeholder="Who may pick up your child at the end of each VBS day?"
                    name='childDismissal'
                    value={formData.childDismissal}
                    onChange={onChangeHandler}
                    required
                    />
                </Form.Group>
              </Col>

            {/* PARENT INFORMATION FORM AREA */}

            <Col md={6}>
                <Form.Group>
                <Form.Label>Parent/Guardian Information</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Name" 
                    name='guardianName'
                    value={formData.guardianName}
                    onChange={onChangeHandler}
                    required
                  />
                <Form.Control 
                    type="text" 
                    placeholder="Phone Number (###-###-####)" 
                    name='guardianNumber'
                    value={formData.guardianNumber}
                    onChange={onChangeHandler}
                    required
                  />
                <Form.Control 
                    type="email" 
                    placeholder="Email Address (example@example.com)" 
                    name='guardianEmail'
                    value={formData.guardianEmail}
                    onChange={onChangeHandler}
                    required
                  />
                <Form.Control 
                    type="text" 
                    placeholder="Address, if different from child" 
                    name='guardianAddress'
                    value={formData.guardianAddress}
                    onChange={onChangeHandler}
                  />
                <Form.Text className="text">Do You Attend Church?</Form.Text>
                <Form.Control 
                    type="text" 
                    placeholder="If so, where?" 
                    name='guardianChurch'
                    value={formData.guardianChurch}
                    onChange={onChangeHandler}

                  />
                <Form.Text className="text">Are you visiting?</Form.Text>
                <Form.Control 
                    type="text" 
                    placeholder="Who are you a guest of?" 
                    name='guardianGuest'
                    value={formData.guardianGuest}
                    onChange={onChangeHandler}
                  />
                <Form.Label className="text">May we have permission to photograph your child for promotional purposes?</Form.Label>

                <Form.Check
                    type='radio'
                    label='Yes'
                    value={true}
                    name='photoPermission'
                    onChange={onChangeHandler}>
                </Form.Check>
                <Form.Check
                    type='radio'
                    label='No'
                    value={false}
                    name='photoPermission'
                    onChange={onChangeHandler}>
                </Form.Check>
                </Form.Group>
              </Col>
            </Row> 
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
          {showSuccessMessage && (
            <div className="success-message">
            <span style={{ color: 'green' }}>
            Thanks for signing up!
            </span>
            </div>
      )}
        </Container>
      </header>
    </div>
  )
}
export default Signup;
