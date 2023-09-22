import React, { useState, useEffect } from "react";
import axios from "axios";
import { APIS } from "../constants/api";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaMicrophone } from "react-icons/fa";

import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBBtn as Button,
} from "mdb-react-ui-kit";

const AllPayment = () => {
  const [allPayment, setAllPayment] = useState([]); // Corrected variable name
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPayment() {
      try {
        const response = await axios.get(APIS.GETALLPAYMENT);
        // console.log("Hiiiii",response.data);
        if (response.status === 200) {
          setAllPayment(response.data); // Corrected variable name
        } else {
          console.error("Error while fetching inventory");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchPayment();
  }, []);

  const handleViewDetails = async (id) => {
    navigate(`/payment-details/${id}`);
  };
  const handleSearch = () => {
    console.log("Performing search for:", searchQuery);
  };

  const handleVoiceSearch = () => {
    console.log("Initiating voice search...");
  };

  return (
    <div className="p-5 mt-5 text-center">
      <h2 className="mb-4">Payment Details:</h2>
      <Col className="mb-4 d-flex flex-column align-items-center">
        <div className="input-group" style={{ maxWidth: "300px" }}>
          <input
            type="text"
            placeholder="Search payment..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-control rounded"
            style={{
              borderTopRightRadius: "1.25rem",
              borderBottomRightRadius: "1.25rem",
            }}
          />
          <div className="input-group-append">
            <span className="input-group-text" onClick={handleSearch}>
              <FaSearch />
            </span>
          </div>
          <div className="input-group-append">
            <span className="input-group-text" onClick={handleVoiceSearch}>
              <FaMicrophone />
            </span>
          </div>
        </div>
      </Col>
      <Row className="justify-content-center">
        <Col className="col-sm-5 d-flex justify-content-center">
          <ul className="list-group">
            {allPayment
              ?.filter((Payment) =>
                Payment?.voucherNum
                  ?.toLowerCase()
                  .includes(searchQuery.toLowerCase())
              )
              .map((Payment, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {Payment?.voucherNum}
                  <Button
                    color="primary"
                    onClick={() => handleViewDetails(Payment.id)}
                  >
                    View Payment Details
                  </Button>
                </li>
              ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default AllPayment;