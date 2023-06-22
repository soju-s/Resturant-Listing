import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";

function Review({ reviews }) {
  const [open, setOpen] = useState(false);
  console.log(reviews);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Review
      </Button>

      <Collapse in={open}>
        <div id="example-collapse-text">
          {reviews?.map((item) => (
            <div className="border p-2 rounded mt-2">
              <h6>
                {item.name} : {item.date}
              </h6>
              <p>Rating : {item.rating}</p>
              <p>Comments : {item.comments}</p>
            </div>
          ))}
        </div>
      </Collapse>
    </>
  );
}

export default Review;
