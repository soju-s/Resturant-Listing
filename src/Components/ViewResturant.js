import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { base_url } from "../baseUrl";
import axios from "axios";
import { Col, Image, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import OperatingHours from "./OperatingHours";
import Review from "./Review";

export default function ViewResturant() {
  // to get path parameter and deconstruct them

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchData();
  }, []);

  // api call to get particular resturant details

  const fetchData = async () => {
    const { data } = await axios.get(`${base_url}/restaurants/${id}`);

    setDetails(data);
  };

  // creating a state to hold resturant details

  const [details, setDetails] = useState({});

  console.log(details);

  return (
    <>
      {details && (
        <Row className="p-5">
          <Col sm={12} md={3}>
            <Image
              className="rounded border p-1"
              fluid
              src={`${details?.photograph}`}
              alt="resturant image"
            />
          </Col>
          <Col md={1}></Col>

          <Col md={8}>
            <h2>{details?.name}</h2>
            <h6>{details?.neighborhood} </h6>
            <ListGroup className="mt-5">
              <ListGroupItem>
                <h5>Cousine : {details?.cuisine_type}</h5>
              </ListGroupItem>
              <ListGroupItem>
                <OperatingHours op={details?.operating_hours} />
              </ListGroupItem>
              <ListGroupItem>
                <Review reviews={details?.reviews} />
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
}
