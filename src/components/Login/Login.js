import React, { memo, useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import Loading from "../Loading/Loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = memo(() => {
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [showPass,setShowPass] = useState(false);
      const navigate = useNavigate()
      const userEmail = useRef('');
      const userPassword = useRef('');
      const location = useLocation()
      let from = location.state?.from?.pathname || '/';
      
      if(user || user1){
          navigate(from,{replace:true});
      }

      const handleLogin = async (event) =>{
          event.preventDefault()
          const email = userEmail.current.value;
          const password = userPassword.current.value;
          await signInWithEmailAndPassword(email,password)
          toast('login')
      }
      const togglePass = () =>{
          setShowPass(!showPass)
      }
      if(loading || loading1 || sending){
        return <Loading></Loading>;
      }
      let errorElement ;
      if(error || error1){
         errorElement = <p>{error?.message}{error1?.message}</p>
      }
      const resetPassword = async () =>{
        console.log(user);
        const email = userEmail.current.value;
        if(email){
        await sendPasswordResetEmail(email);
        toast('Sent email')
        }
        else{
          toast('Please enter')
        }
      }
  return (
    <div className="">
        <h1 className="text-center my-3">Log in</h1>
      <div className="p-3">
      <Form onSubmit={handleLogin} className='mx-auto w-75' >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control className="py-3" required ref={userEmail} type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group style={{position:'relative'}} className="mb-3" controlId="formBasicPassword">
          <Form.Control className="py-3" required ref={userPassword} type={showPass ? "text" : "password"} placeholder="enter your password" />
          <p className="border-0 bg-white" style={{position:'absolute',top:'15px',right:'5px',cursor:'pointer'}} onClick={togglePass}>Show</p>
        </Form.Group>
        {errorElement}
        <Button className="w-25 py-2 mx-auto d-block" variant="primary" type="submit">
          Log in
        </Button>
      </Form>
      <div className="my-2 pb-5 w-75 mx-auto">
        <div className="text-center">New user ? <Link className="text-decoration-none" to='/signup'>Create an account</Link></div>
        <div className="text-center"><button className="text-decoration-none btn btn-link text-primary" onClick={resetPassword}>Forget Password ?</button></div>
        <div className="d-flex align-items-center">
          <div style={{ height: "1px" }} className="bg-dark w-50"></div>
          <p className="pt-3 px-3 fw-bold">OR</p>
          <div style={{ height: "1px" }} className="bg-dark w-50"></div>
        </div>
        <div className="text-center mt-3 py-1">
          <button onClick={() => signInWithGoogle()}className="btn btn-light" >
            <span className="fs-3">
              <FcGoogle></FcGoogle>
            </span>{" "}
            <span className="fs-4 text-muted">
              Continue with google
            </span>
          </button>
        </div>
      </div>
      </div>
      <ToastContainer/>
    </div>
  );
});

export default Login;
