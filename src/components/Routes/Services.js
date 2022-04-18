import React from 'react';
import { Link } from 'react-router-dom';
import person1 from '../../assets/others/person-1.jpg'
import person2 from '../../assets/others/person-2.jpg'
import murder from '../../assets/others/murder.jpg'
import Footer from '../Footer/Footer';

const Services = () => {
    return (
        <div>
        <h3 className="text-center my-3">Services</h3>
         <div className="container">
            <div className="row">
                <div className="col-md-12 mx-auto">
                    <div className='d-md-flex row'>
                        <img className='img-fluid col-lg-6' src={person1} alt="" />
                        <div className='col-lg-6 d-flex align-items-center'>
                            <div>
                            <h1 className='px-3 py-1'>Find A Person</h1>
                            <p className='p-3'> Have you lost your child or he/she kidnaped by bad people.Don't worry I can help you.With the help of some advance technology I can find 
                                Missing person by special investigation.
                            </p>
                            <Link className='btn btn-danger m-3' to='/checkout'>Check out for Appointment</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 my-3 mx-auto">
                    <div className='d-md-flex row'>
                        <img className='img-fluid col-lg-6' src={person2} alt="" />
                        <div className='col-lg-6 d-flex align-items-center'>
                            <div>
                            <h1 className='px-3 py-1'>Personal Investigation</h1>
                            <p className='p-3'> Have you lost your child or he/she kidnaped by bad people.Don't worry I can help you.With the help of some advance technology I can find 
                                Missing person by special investigation.
                            </p>
                            <Link className='btn btn-danger m-3' to='/checkout'>Check out for Appointment</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mx-auto">
                    <div className='d-md-flex row'>
                        <img className='img-fluid h-50 col-lg-6' src={murder} alt="" />
                        <div className='col-lg-6 d-flex align-items-center'>
                            <div>
                            <h1 className='px-3 py-1'>Murder Case Investigation</h1>
                            <p className='p-3'> 
                                I've solved more than 20 murder cases.I love to solve the murder cases.If you have any cases please fill free to contact me.
                            </p>
                            <Link className='btn btn-danger m-3' to='/checkout'>Check out for Appointment</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
         <footer class=" bg-light text-center text-lg-start">
        <div class="text-center p-3" style={{backgroundColor:'rgba(0, 0, 0, 0.2)'}}>
          © 2022 Copyright:
          <Link to='/' class="text-dark">mrbond.com</Link>
        </div>
      </footer>
        </div>
    );
};

export default Services;