import React from 'react';
import Navbar from './common/Navbar';
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
import "../css/booking.css";

const BookingPage = () => {
    return(
        <>
        <div className="wholeContent3">
            <div className="header" >    
                <Navbar/>
                <div className="tagline">
                    <div className="tagline-1"> <span className="content-color">Save</span> Time</div>
                    <br/>            
                    <div className="tagline-2">Save <span className="content-color"> Money </span></div>            
                </div>
                <div className="profile">
                    <div className="profile-button">
                        <Dropdown className="button">
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <img src="/assets/img/profile-logo.jpg"  height="50" width="50" alt="profile"/>
                            </Dropdown.Toggle>
                        
                            <Dropdown.Menu>
                            <Dropdown.Item className="profile-button-links" href="#/action-1">Your Profile</Dropdown.Item>
                            <Dropdown.Item className="profile-button-links" href="#/action-2">My Bookings</Dropdown.Item>
                            <Dropdown.Item className="profile-button-links" href="#/action-3">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>    
                </div>  
            </div>
            <div className="container  acknowledgement-card">
                <div className="row">
                    <div className="col-7">
                        <Card style={{ width: '25rem' , backgroundColor: '#6699ff' }}>
                            <Card.Body>
                            <Card.Title style={{ marginLeft: '20%', fontWeight: '800', color: 'black'}}>Thanks For Booking</Card.Title>
                            <Card.Text style={{ marginLeft: '20%'}}>
                                Your Id is : A1265374B8DT93
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>  
        </>
    );
}
export default BookingPage;