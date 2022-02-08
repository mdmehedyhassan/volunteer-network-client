import React, { useEffect, useState } from 'react';
import HomeDetails from './HomeDetails';

const Home = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('https://thawing-bastion-81553.herokuapp.com/allEvent')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    // console.log(events);
    return (
        <div>
            <div className="row">
                {
                    events.map(event => <HomeDetails key={event._id} event={event}></HomeDetails>)
                }
            </div>
        </div>
    );
};

export default Home;