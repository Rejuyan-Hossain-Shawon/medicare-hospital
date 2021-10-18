import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import DiagnosticDisplay from './DiagnosticDisplay/DiagnosticDisplay';


const Diagnostics = () => {
    const [diagnostics, setDiagnostics] = useState([]);
    useEffect(() => {
        fetch("/diagnostics.json")
            .then(res => res.json())
            .then(data => setDiagnostics(data))
    }, [])
    return (
        <div>
            <h2 className="text-primary">Diagnostics Center Services</h2>
            <Row xs={1} md={2} className="g-4">

                {
                    diagnostics.map(element => <DiagnosticDisplay element={element} key={element._id}></DiagnosticDisplay>)
                }

            </Row>
        </div>
    );
};

export default Diagnostics;