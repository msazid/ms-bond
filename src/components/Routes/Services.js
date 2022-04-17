import { Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div>
            <p>This is services</p>
           <Link to='/checkout'> <Button>Check Out</Button></Link>
        </div>
    );
};

export default Services;