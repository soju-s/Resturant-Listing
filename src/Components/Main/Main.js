import React, { useEffect, useState } from "react";
import "./Main.css";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import RestCard from "../RestCard";
import { base_url } from "../../baseUrl";
import { resturantListAction } from "../action/allResturantAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Main() {
  const dispatch = useDispatch();

  const [allResturant, setResturant] = useState([]);

  const { allResturants } = useSelector((state) => state.resturantReducer);
  console.log(allResturants);

  useEffect(() => {
    // fetchData()
    dispatch(resturantListAction());
  }, []);

  // api call to get resturant details
  const fetchData = async () => {
    const data = await axios.get(`${base_url}/restaurants`);

    setResturant(data.data);
  };

  // console.log(allResturant);

  return (
    <Row>
      {allResturants?.map((items) => (
        <Col sm={12} md={6} lg={4} xl={3}>
          <RestCard resturant={items} />
        </Col>
      ))}
    </Row>
  );
}
