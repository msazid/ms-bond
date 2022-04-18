import React from "react";
import { Button, Carousel } from "react-bootstrap";
import "../css/style.css";
import banner from "../../assets/others/person.jpg";
import detective from "../../assets/others/aboutbanner.jpg";
const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item className="slider-1" interval={1000}>
          <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            <div className="container">
              <p className="text-light">
                IF YOU THINK IT'S <span className="text-danger">HAPPENING</span>
                , IT PROBABLY IS
              </p>
              <h1 className="banner-title text-white">
                The city's <span className="text-danger">best detective</span>{" "}
                <br />
                John is here for
                <br /> you to <span className="text-danger">help</span>
              </h1>
              <Button className="border-0 py-3 px-2 bg-danger">
                Explore More
              </Button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="slider-2" interval={500}>
          <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            <div className="container">
              <p className="text-light">
                DON'T WORRY ABOUT{" "}
                <span className="text-danger">INVESTIGATE</span>
              </p>
              <h1 className="banner-title text-white">
                I've more than
                <br /> <span className="text-danger">50</span> case solved{" "}
                <br />
                experience
              </h1>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="slider-3">
          <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            <div className="container">
              <p className="text-light">IF SOMETHINGS BOTHERING YOU</p>
              <h1 className="banner-title text-white">
                I'm here to help you
                <br />
                Any kind of <span className="text-danger">investigation</span>
                <br /> problems
              </h1>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-6" style={{ position: "relative" ,overflow:'hidden'}}>
            <div
              style={{
                zIndex: "3",
                position: "absolute",
                top:"10px",
                left:"25px",
                background: "white",
                height: "fit-content",
                padding: "10px",
                width: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "5px solid red",
                transform:'rotate(-20deg)',
              }}
            >
              {" "}
              <span className="text-center">
                {" "}
                <span
                  style={{fontSize: "35px", fontWeight: "bold" }}
                  className="text-danger"
                >
                  50
                </span>{" "}
                <br />
                <span style={{ fontFamily:'consolas' }}>Case Solved </span>
                <br /> <span style={{ fontFamily:'consolas' }}>Experience</span> 
              </span>{" "}
            </div>
            <img
              style={{ zIndex: "2", transform: "rotate(10deg)" }}
              className="img-fluid"
              src={banner}
              alt=""
            />
            <img
              className="img-fluid w-50"
              style={{
                borderRadius: "5px",
                border: "5px solid red",
                position: "absolute",
                top: "100px",
                right: "20px",
              }}
              src={detective}
              alt=""
            />
          </div>
          <div className="col-md-6 mt-5 d-flex justify-content-center">
              <div className="w-75">
                <h4 className="my-3">Introducing the My Private Investigating Services</h4>
                <ul style={{fontFamily:'arial'}}>
                <li><span style={{fontWeight:"bold",fontSize:'15px',color:'red'}}>|</span> 99% success rate solving cases</li>
                <li><span style={{fontWeight:"bold",fontSize:'15px',color:'red'}}>|</span> 100% Confidential</li>
                <li><span style={{fontWeight:"bold",fontSize:'15px',color:'red'}}>|</span> Affordable fees</li>
                <li><span style={{fontWeight:"bold",fontSize:'15px',color:'red'}}>|</span> Free Consultation</li>
                </ul>
              </div>
          </div>
        </div>
      </div>

      <div className="container my-3">
          <h2 className="text-center text-danger">My Services</h2>
          <div className="row">
              <div className="col-md-4">

              </div>
              <div className="col-md-4">

              </div>
              <div className="col-md-4">
                  
              </div>
          </div>
      </div>
    </div>
  );
};

export default Home;
