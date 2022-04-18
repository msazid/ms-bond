import React from "react";
import { Accordion } from "react-bootstrap";
import Footer from "../Footer/Footer";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-center">My Blogs</h1>
      <div className="container">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Difference between Authorization and Authentication</Accordion.Header>
            <Accordion.Body>
                <ul>
                    <strong>Authorization</strong>
                    <li>* The process of determining if a user has system access permissions is known as authorization.</li>
                    <li>* For instance, after we've established that a user is legitimate, we may discover which sites he or she has access to. Admin pages should not be accessible by ordinary users. This is the section where you provide permission.</li>
                    <li>* After authentication, it takes place.</li>
                </ul>
                <ul>
                    <strong>Authentication</strong>
                    <li>* The process of determining if a user has system access permissions is known as authorization.</li>
                    <li>* Assume we have two categories of users on a website: regular users and administrators. We need users to log in when they attempt to use the website. This is the section where you authenticate.</li>
                    <li>* It always comes before authorisation, even if our software allows anonymous users to login and utilize it.</li>
                </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
            Many characteristics distinguish Google Firebase as a back-end development solution for online and mobile apps. This lowers stress levels and cuts down on time spent on development. It's also a fantastic tool for prototyping. Firebase is easy to use, light, pleasant, and well-known in the business. Because of this, I utilize Google Firebase. AWS Amplify, Kuzzle, Couchbase, NativeScript, RxDB, and Flutter are the additional authentication alternatives available to me.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;
