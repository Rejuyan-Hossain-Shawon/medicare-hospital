import React from 'react';
import error from "../../images/notFound.jpg"
const NotFound = () => {
    return (
        <div>
            <img src={error} alt="" />
            <h1 className="text-danger" >Error 404 !!!!!!!!!!</h1>
            <h2 className="text-danger">Your Requested Page Is not Available Right Now</h2>
        </div>
    );
};

export default NotFound;