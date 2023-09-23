import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBInput as Input,
  MDBBtn as Button,
} from "mdb-react-ui-kit";

import axios from "axios";
import { APIS } from "../constants/api";
import { TenantService } from "../../services/TenantService";

const TenantForm = () => {
  const navigate = useNavigate();
  const initialState = {
    tenantName: "",
    address: "",
    contactNum: "",
    allocatedShop: "",
    rentCollected: "",
    rentDue: "",
    securityDeposit: "",
    electricityDue: "",
    // electricityCollectionDetails:'',

    // date:'',
  };

  const [formData, setFormData] = useState(initialState);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await TenantService.createTenant(formData);

      console.log("TenantId", response.data.id);

      if (response.status === 201) {
        console.log("Tenant Created Successfully");
        setFormData(initialState);
      } else {
        console.error("Failed To create Tenant");
      }
    } catch (error) {
      console.error("Error", error);
    }
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const ShowTenant = (event) => {
    event.preventDefault();
    navigate("/showtenant");
  };

  return (
    <div className=" p-2 mt-5 ">
      <h1 className=" mb-4 text-center">Tenant Management</h1>
      <form onSubmit={handleSubmit}>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Name"
              type="text"
              name="tenantName"
              value={formData.tenantName}
              onChange={handleChange}
            />
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="Contact No"
              type="tel"
              name="contactNum"
              value={formData.contactNum}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Current Address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="Shop No"
              type="text"
              name="allocatedShop"
              value={formData.allocatedShop}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Collected Rent"
              type="number"
              name="rentCollected"
              value={formData.rentCollected}
              onChange={handleChange}
            />
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="Rent Due"
              type="text"
              name="rentDue"
              value={formData.rentDue}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Deposit"
              type="text"
              name="securityDeposit"
              value={formData.securityDeposit}
              onChange={handleChange}
            />
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="Electricity Due"
              type="text"
              name="electricityDue"
              value={formData.electricityDue}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <div className="text-center mt-4 ">
          <Button type="submit">Submit</Button>
        </div>
        <div className="text-center mt-4 ">
          <Button variant="primary" type="button" square onClick={ShowTenant}>
            Show Tenant
          </Button>
        </div>
      </form>
    </div>
  );
};
export default TenantForm;
