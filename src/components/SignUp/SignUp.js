import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const [signInWithGoogle, User, Loading, Error] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const newName = useRef("");
    const newEmail = useRef("");
    const newPassword = useRef("");
    const newConfirmPassword = useRef("");
    const submitted = async (event) => {
    event.preventDefault();
    const name = newName.current.value;
    const email = newEmail.current.value;
    const password = newPassword.current.value;
    const confirmPass = newConfirmPassword.current.value;
    if (password === confirmPass) {
      await createUserWithEmailAndPassword(email, password);
      console.log("hello");
    } else {
      alert("password did not matched");
    }
    if(user){
        navigate('/login')
    }
  };
  return (
    <div className="my-5">
        <div className="container p-3">
      <Form className="my-2" onSubmit={submitted}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            ref={newName}
            type="name"
            placeholder="Enter your name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control ref={newEmail} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={newPassword}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            ref={newConfirmPassword}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <div className="mx-auto d-flex justify-content-center">
        <Button className="w-50" variant="primary" type="submit">
          Sign Up
        </Button>
        </div>
      </Form>
    </div>
    <div className="my-2 pb-5 container">
        <div className="text-center"> <Link className="" to='/login'>Already Have an account ?</Link></div>
        <div className="d-flex align-items-center">
          <div style={{ height: "1px" }} className="bg-dark w-50"></div>
          <p className="pt-3 px-3 fw-bold">OR</p>
          <div style={{ height: "1px" }} className="bg-dark w-50"></div>
        </div>
        <div className="text-center mt-3">
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-light border"
          >
            <span className="fs-3">
              <FcGoogle></FcGoogle>
            </span>{" "}
            <span className="fs-lg text-muted fw-bolder">
              Continue with google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
