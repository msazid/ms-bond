
import React from "react";
import {Button , Form } from "react-bootstrap";

const CheckOut = () => {
  return (
    <div>
      <h1 className="text-center mt-5 ">Please fill up the form</h1>
        <div className="container d-flex justify-content-center my-5">
        <Form className="w-50">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" name="name" placeholder="Enter full name" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="email" name="email" placeholder="enter a valid email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="number" name="number" placeholder="enter contact no" required/>
        </Form.Group>

        <Form.Group>
            <Form.Select>
                <option>Select One</option>
                <option >Murder</option>
                <option >Find a person</option>
                <option >Personal investigation</option>
            </Form.Select>
        </Form.Group>
        <Form.Group className="mt-2">
            <Form.Control as='textarea' placeholder="please tell me what happen" required/>
        </Form.Group>
        <Form.Group className="my-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Terms and condition" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
        </div>
    </div>
  );
};

export default CheckOut;
