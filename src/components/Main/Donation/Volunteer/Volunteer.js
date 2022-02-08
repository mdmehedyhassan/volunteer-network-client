import React, { useEffect, useState } from 'react';


const Volunteer = () => {
    const [volunteers, setVolunteers] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/donation")
            .then(res => res.json())
            .then(data => setVolunteers(data))
    }, [])
    return (
        <div>
            <div>
                <h4>Volunteer register list</h4>
            </div>
            <div>
                <table>
                    <tbody>
                        <tr className="bg-warning">
                            <th>Name</th>
                            <th>Email Id</th>
                            <th>Registating date</th>
                            <th>Volunteer list</th>
                            <th>Action</th>
                        </tr>
                        {
                            volunteers.map(volunteer => (
                                <tr key={volunteer._id}>
                                    <td>{volunteer.name}</td>
                                    <td>{volunteer.email}</td>
                                    <td>{volunteer.date}</td>
                                    <td>{volunteer.volunteerType}</td>
                                    <td>delete</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Volunteer;