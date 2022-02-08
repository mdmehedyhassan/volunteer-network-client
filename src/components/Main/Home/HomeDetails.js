import React from 'react';
import { Link } from 'react-router-dom';

const HomeDetails = (props) => {
    const {title, _id, date, description} = props.event;
    return (
        <div className="col-md-4">
            <div style={{borderRadius: '15px' ,boxShadow: '5px 5px 10px green, -5px -5px 10px green'}} className="p-2 m-1 text-center">
                <h3>{title}</h3>
                <h5>{date}</h5>
                <p>{description}</p>
                <Link to={`/register/${_id}`}><button className="form-control btn btn-primary">Donation</button></Link>
            </div>
        </div>
    );
};

export default HomeDetails;