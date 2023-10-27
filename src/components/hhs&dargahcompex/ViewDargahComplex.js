import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Header from "../common/Header";
import "react-datepicker/dist/react-datepicker.css";
import "../../asset/style.css";
import { BiArrowBack } from "react-icons/bi";
import { Dropdown } from 'react-bootstrap';
import { DargahComplexService } from "../../services/DargahComplexService";
const ViewDargahComplex = () => {
  const [alldaraghcomplex, setAlldaraghcomplex] = useState({});
  
  const navigate = useNavigate();
  const handleViewProfile=(dc_id)=>{
    navigate (`/detaildergah/${dc_id}`)
   }
   const fetchAlldaraghcomplex = async () => {
    try {
      const response = await DargahComplexService.getAllDargahComplex();
      console.log("API Response dargah complex:", response);
      if (Array.isArray(response)) {
        const dargahomplexobject={};
        response.forEach((dargah) => {
          dargahomplexobject[dargah.dc_id] = dargah;
          });
          setAlldaraghcomplex(dargahomplexobject);
      } else {
        console.error("Invalid data received from the API:", response);
      }
    } catch (error) {
      console.error("Error fetching dargah complex data:", error);
    }
  };
  useEffect(() => {
    fetchAlldaraghcomplex();
  }, []);
//   const handleEditProfile=(id)=>{
//     navigate (`/`)
//    }
//    const handleDelete=(id)=>{
//     navigate (`/`)
//    }
  return (
    <div>
      <Header />
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
      <h2 className="title">Details of Daragh Complex </h2>

      <Table striped>
        <thead className="shadow-lg p-3 mb-5 bg-white rounded">
          <tr>
          <th>Sr. No.</th>
          <th>Receiver Name</th>
          <th>Date</th>
           <th>Rupee</th>
            <th>Shop Rent</th>
            <th>Month</th>
            <th>Cheque No.</th>
            <th>Draw On</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="shadow-lg p-3 mb-5 bg-white rounded">
  {Object.keys(alldaraghcomplex).map((dcId, index) => {
    const dargahcom = alldaraghcomplex[dcId];
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{dargahcom.receiverName}</td>
        <td>{dargahcom.date}</td>
       <td>{dargahcom.rupee}</td>
        <td>{dargahcom.shopRent}</td>
        <td>{dargahcom.month}</td>
        <td>{dargahcom.chequeNo}</td>
        <td>{dargahcom.drawnOn}</td> 
        <td>
          <div className="dropdown">
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdownMenuButton">
                &#8942;
              </Dropdown.Toggle>
              <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleViewProfile(dcId)}>
                          View Profile
                        </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </td>
      </tr>
    );
  })}
</tbody>
      </Table>
    </div>
  );
};

export default ViewDargahComplex;