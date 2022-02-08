import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import './Donation.css';
import Events from './Events/Events';
import Volunteer from './Volunteer/Volunteer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const Donation = () => {
    const location = useLocation();
    return (
        <div className="row">
            <div className="col-3">
                <ul>
                    <li>
                        <Link style={{textDecoration: 'none'}}  to='volunteer'><p className={location.pathname === '/donation/volunteer' ? "activeLink" : "deactivateLink" }><FontAwesomeIcon icon={faUserFriends} /> Volunteer register list</p></Link>
                    </li>
                    <li>
                        <Link style={{textDecoration: 'none'}} to='events' ><p className={location.pathname === '/donation/events' ? "activeLink" : "deactivateLink" }><FontAwesomeIcon icon={faPlus} /> Add event</p></Link>
                    </li>
                </ul>
            </div>
            <div className="col-9">
                <Routes>
                    <Route path="/volunteer" element={<Volunteer />} />
                    <Route path="/events" element={<Events />} />
                </Routes>
            </div>
        </div>
    );
};

export default Donation;