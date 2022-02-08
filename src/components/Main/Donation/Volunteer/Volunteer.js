import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './Volunteer.css'

const Volunteer = () => {
    document.title="Volunteer"
    const [volunteers, setVolunteers] = useState([])
    useEffect(() => {
        fetch("https://thawing-bastion-81553.herokuapp.com/volunteer")
            .then(res => res.json())
            .then(data => setVolunteers(data))
    }, []);

    const deleteHandler = (id) => {
        console.log(id)
        fetch(`https://thawing-bastion-81553.herokuapp.com/volunteer/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount === 1){
                    const remainingVolunteers = volunteers.filter(volunteer => volunteer._id !== id)
                    setVolunteers(remainingVolunteers);
                }
            })
    }

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
                                    <td><span style={{cursor: "pointer"}} onClick={() => deleteHandler(volunteer._id)} className="text-danger"><FontAwesomeIcon icon={faTrashAlt} /></span></td>
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