import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Table, Button } from "react-bootstrap"
import YearSelector from "./Year";

function Roster() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [formDataList, setFormDataList] = useState([]);

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        // Fetch data filtered by year
        const response = await axios.get(`${process.env.REACT_APP_VBS_FORM_API}/register/${year}`);
        setFormDataList(response.data);
      } catch (error) {
        console.error('Error fetching form data:', error);
      }
    };

    fetchFormData();
  }, [year]);  // refetch whenever year changes

  const handleDelete = async (formId, index) => {
    if (window.confirm(`Are you sure you want to delete this entry?`)) {
      try {
        await axios.delete(`${process.env.REACT_APP_VBS_FORM_API}/register/${formId}`);
        setFormDataList(prevData => prevData.filter((_, idx) => idx !== index));
      } catch (error) {
        console.error('Error deleting form data:', error);
      }
    }
  };

  return (
    <div>
        <h1
          style={{
            marginBottom: '2vh',
            padding: '1rem 1.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '0.5rem',
            boxShadow: '0 0.2rem 0.6rem rgba(0,0,0,0.15)',
            textAlign: 'center',
            color: '#333',
            fontWeight: '700',
            fontSize: '2.5rem',
          }}
        >
          Blankenship VBS Roster
        </h1>
      {/* Pass year and setYear to YearSelector */}
      <YearSelector year={year} setYear={setYear} />
      <div style={{ margin: '2vh 1vw', overflowX: 'auto', paddingBottom: '1rem'}}>
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {formDataList.map((formData, index) => (
              <tr key={formData._id}>
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
                <td>
                  <Button variant="danger" onClick={() => handleDelete(formData._id, index)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Roster;


// import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useState, useEffect} from 'react';
// import axios from 'axios';
// import { Table, Button } from "react-bootstrap"
// import YearSelector from "./Year";

// function Roster() {
//     const [formDataList, setFormDataList] = useState([]);
  
//     useEffect(() => {
//       // Function to fetch form data from backend
//       const fetchFormData = async () => {
//         console.log(process.env.REACT_APP_VBS_FORM_API)
//         try {
//           const response = await axios.get(`${process.env.REACT_APP_VBS_FORM_API}/register`); // Replace with your API endpoint
//           setFormDataList(response.data); // Update state with fetched data
//         } catch (error) {
//           console.error('Error fetching form data:', error);
//         }
//       };
  
//       fetchFormData(); // Call fetchFormData when component mounts
//     }, []); // Empty dependency array ensures this effect runs only once
  
//     // Function to handle delete action
//     const handleDelete = async (formId, index) => {
//         if (window.confirm(`Are you sure you want to delete this entry?`)) {
//             try {
//                 await axios.delete(`${process.env.REACT_APP_VBS_FORM_API}/register/${formId}`);
//                 // Update frontend state (formDataList) after successful deletion
//                 setFormDataList(prevData => prevData.filter((formData, idx) => idx !== index));
//                 console.log('Form data deleted successfully');
//             } catch (error) {
//                 console.error('Error deleting form data:', error);
//             }
//         }
//     };
//     return (
//         <div>
//           <h1>Blankenship VBS Roster</h1>
//           <YearSelector />
//           <Table striped bordered hover>
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Child Name</th>
//                 <th>Child Age</th>
//                 <th>Child Address</th>
//                 <th>Child Medical Info</th>
//                 <th>Emergency Contact</th>
//                 <th>Emergency Contact Number</th>
//                 <th>Dismissal Info</th>
//                 <th>Guardian Name</th>
//                 <th>Guardian Number</th>
//                 <th>Guardian Email</th>
//                 <th>Guardian Address</th>
//                 <th>Church</th>
//                 <th>Visitor</th>
//                 <th>Photo?</th>
//                 {/* Add more headers for other form fields */}
//               </tr>
//             </thead>
//             <tbody>
//               {formDataList.map((formData, index) => (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{formData.childName}</td>
//                   <td>{formData.childAge}</td>
//                   <td>{formData.childAddress}</td>
//                   <td>{formData.childInfo}</td>
//                   <td>{formData.childEmergencyContactName}</td>
//                   <td>{formData.childEmergencyContactNumber}</td>
//                   <td>{formData.childDismissal}</td>
//                   <td>{formData.guardianName}</td>
//                   <td>{formData.guardianNumber}</td>
//                   <td>{formData.guardianEmail}</td>
//                   <td>{formData.guardianAddress}</td>
//                   <td>{formData.guardianChurch}</td>
//                   <td>{formData.guardianGuest}</td>
//                   <td>{formData.photoPermission ? 'Yes' : 'No'}</td>
//                   <td><Button variant="danger" onClick={() => handleDelete(formData._id, index)} >Delete</Button></td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </div>
//       );
//     }
  
//   export default Roster;