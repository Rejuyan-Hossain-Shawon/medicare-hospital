import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from './Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch("/doctors.json")
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    // event handler for single doctor 

    return (
        <div>
            <Row xs={1} md={2} className="g-5">
                {
                    doctors.map(doctor => <Doctor doctor={doctor} key={doctor._id}></Doctor>)
                }


            </Row>

        </div>
    );
};

export default Doctors;