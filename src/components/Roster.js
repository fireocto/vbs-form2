import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Table} from "react-bootstrap"

function Roster() {
    const [formDataList, setFormDataList] = useState([]);
  
    useEffect(() => {
      // Function to fetch form data from backend
      const fetchFormData = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_VBS_FORM_API}/register`); // Replace with your API endpoint
          setFormDataList(response.data); // Update state with fetched data
        } catch (error) {
          console.error('Error fetching form data:', error);
        }
      };
  
      fetchFormData(); // Call fetchFormData when component mounts
    }, []); // Empty dependency array ensures this effect runs only once
  
    return (
        <div>
          <h1>Blankenship VBS Roster</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Child Name</th>
                <th>Child Age</th>
                <th>Child Address</th>
                <th>Child Medical Info</th>
                <th>Emergency Contact</th>
                <th>Emergency Contact Number</th>
                <th>Dismissal Info</th>
                <th>Guardian Name</th>
                <th>Guardian Number</th>
                <th>Guardian Email</th>
                <th>Guardian Address</th>
                <th>Church</th>
                <th>Visitor</th>
                <th>Photo?</th>
                {/* Add more headers for other form fields */}
              </tr>
            </thead>
            <tbody>
              {formDataList.map((formData, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{formData.childName}</td>
                  <td>{formData.childAge}</td>
                  <td>{formData.childAddress}</td>
                  <td>{formData.childInfo}</td>
                  <td>{formData.childEmergencyContactName}</td>
                  <td>{formData.childEmergencyContactNumber}</td>
                  <td>{formData.childDismissal}</td>
                  <td>{formData.guardianName}</td>
                  <td>{formData.guardianNumber}</td>
                  <td>{formData.guardianEmail}</td>
                  <td>{formData.guardianAddress}</td>
                  <td>{formData.guardianChurch}</td>
                  <td>{formData.guardianGuest}</td>
                  <td>{formData.photoPermission ? 'Yes' : 'No'}</td>
                  {/* Add more cells for other form fields */}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }
  
  export default Roster;