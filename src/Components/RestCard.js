import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function RestCard({ resturant }) {
  console.log(resturant);
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={`/view-resturant/${resturant.id}`}
    >
      <Card className="m-4">
        <Card.Img variant="top" src={resturant.photograph} />
        <Card.Body>
          <Card.Title>{resturant.name} </Card.Title>
          <Card.Text>
            <p>{resturant.neighborhood} </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}
