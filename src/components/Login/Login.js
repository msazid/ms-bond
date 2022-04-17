import React, { memo, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.init";

const Login = memo(() => {
    const [signInWithGoogle, User, Loading, Error] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate()
      const userEmail = useRef('');
      const userPassword = useRef('');
      const location = useLocation()
      let from = location.state?.from?.pathname || '/';
      if(user){
          navigate(from,{replace:true});
      }
      const handleLogin = async (event) =>{
          event.preventDefault()
          const email = userEmail.current.value;
          const password = userPassword.current.value;
          signInWithEmailAndPassword(email,password)
      }
  return (
    <div>
      <Form onSubmit={handleLogin} className="container">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={userEmail} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={userPassword} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div className="my-2 pb-5 container">
        <div className="text-center"> <Link className="" to='/signup'>New user create an account</Link></div>
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
});

export default Login;
