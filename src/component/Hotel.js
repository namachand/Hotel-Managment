import React from 'react';
import Navbar from './common/Navbar';
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import '../css/hotel.css';

const Hotel = () => {
    return(
        <>
            <div className="wholeContent2">
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
                <div className="captionHeading">
                    <span className="hotels">Our Hotels</span>
                </div>
            </div>
            <div className="container card-hotel">
                <div className="row  card-wrapper">
                    <div className="card-image col-3"><img src="assets/img/hotelList1.jpg" height="150" width="150" alt="logo" /></div>
                    <div className="card-body offset-1 col-5">
                        <div className="row mt-4">
                            <div className="card-title col-12"><h4><b>Raddison Bengaluru City Center</b></h4></div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12"><h6>Bengaluru, 2.5 km to City centre</h6></div>
                        </div>
                    </div>
                    <div className="mt-5 col-2 offset-1">
                       <button><Link to='/book'> Book Now</Link></button>
                      <div className="price mt-4 ml-2">₹1294</div>
                    </div>
                </div>
            </div>    
            <div className="container card-hotel">
                <div className="row  card-wrapper">
                    <div className="card-image col-3"><img src="assets/img/hotelList2.jpg" height="150" width="150"  alt="logo" /></div>
                    <div className="card-body offset-1 col-5">
                        <div className="row mt-4">
                            <div className="card-title col-12"><h4><b>Treebo Tryst Monarch Brigade Road</b></h4></div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12"><h6>Bengaluru, 1.4 km to City centre</h6></div>
                        </div>
                    </div>
                    <div className="mt-5 col-2 offset-1">
                    <button><Link to='/book'> Book Now</Link></button>
                        <div className="price mt-4 ml-2">₹1594</div>
                    </div>
                </div>
            </div>    
            <div className="container card-hotel">
                <div className="row  card-wrapper">
                    <div className="card-image col-3"><img src="assets/img/hotelList3.jpg" height="150" width="150" alt="logo" /></div>
                    <div className="card-body offset-1 col-5">
                        <div className="row mt-4">
                            <div className="card-title col-12"><h4><b>FabHotel Berry's Marathahalli</b></h4></div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12"><h6>Bengaluru, 10.2 km to City centre</h6></div>
                        </div>
                    </div>
                    <div className="mt-5 col-2 offset-1">
                    <button><Link to='/book'> Book Now</Link></button>
                        <div className="price mt-4 ml-2">₹2094</div>
                    </div>
                </div>
            </div>    
            <div className="container card-hotel">
                <div className="row  card-wrapper">
                    <div className="card-image col-3"><img src="assets/img/hotelList4.jpg" height="150" width="150" alt="logo" /></div>
                    <div className="card-body offset-1 col-5">
                        <div className="row mt-4">
                            <div className="card-title col-12"><h4><b>FabHotel Astra Electronic City</b></h4></div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12"><h6>Bengaluru, 15.2 km to City centre</h6></div>
                        </div>
                    </div>
                    <div className="mt-5 col-2 offset-1">
                    <button><Link to='/book'> Book Now</Link></button>
                        <div className="price mt-4 ml-2">₹1854</div>
                    </div>
                </div>
            </div>    
            <div className="container card-hotel">
                <div className="row  card-wrapper">
                    <div className="card-image col-3"><img src="assets/img/hotelList5.jpg" height="150" width="150" alt="logo" /></div>
                    <div className="card-body offset-1 col-5">
                        <div className="row mt-4">
                            <div className="card-title col-12"><h4><b>FabHotel Oriental Suites BTM Layout</b></h4></div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12"><h6>Bengaluru, 6.6 km to City centre</h6></div>
                        </div>
                    </div>
                    <div className="mt-5 col-2 offset-1">
                    <button><Link to='/book'> Book Now</Link></button>
                        <div className="price mt-4 ml-2">₹1224</div>
                    </div>
                </div>
            </div>    
            <div className="container card-hotel">
                <div className="row  card-wrapper">
                    <div className="card-image col-3"><img src="assets/img/hotelList6.jpg" height="150" width="150" alt="logo" /></div>
                    <div className="card-body offset-1 col-5">
                        <div className="row mt-4">
                            <div className="card-title col-12"><h4><b>Hotel Ramada Plaza JHV</b></h4></div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12"><h6>Varanasi, 2.1 km to City centre</h6></div>
                        </div>
                    </div>
                    <div className="mt-5 col-2 offset-1">
                    <button><Link to='/book'> Book Now</Link></button>
                        <div className="price mt-4 ml-2">₹2294</div>
                    </div>
                </div>
            </div>    
            <div className="container card-hotel">
                <div className="row  card-wrapper">
                    <div className="card-image col-3"><img src="assets/img/hotelList7.jpg" height="150" width="150" alt="logo" /></div>
                    <div className="card-body offset-1 col-5">
                        <div className="row mt-4">
                            <div className="card-title col-12"><h4><b>Palace On Ganges</b></h4></div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12"><h6>Varanasi, 4.6 km to City centre</h6></div>
                        </div>
                    </div>
                    <div className="mt-5 col-2 offset-1">
                    <button><Link to='/book'> Book Now</Link></button>
                        <div className="price mt-4 ml-2">₹1994</div>
                    </div>
                </div>
            </div>    
            <div className="container card-hotel">
                <div className="row  card-wrapper">
                    <div className="card-image col-3"><img src="assets/img/hotelList8.jpg" height="150" width="150" alt="logo" /></div>
                    <div className="card-body offset-1 col-5">
                        <div className="row mt-4">
                            <div className="card-title col-12"><h4><b>Hotel Sarin Inn Heritage</b></h4></div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12"><h6>Varanasi, 1.5 km to City centre</h6></div>
                        </div>
                    </div>
                    <div className="mt-5 col-2 offset-1">
                    <button><Link to='/book'> Book Now</Link></button>
                        <div className="price mt-4 ml-2">₹2294</div>
                    </div>
                </div>
            </div>    
            <div className="container card-hotel">
                <div className="row  card-wrapper">
                    <div className="card-image col-3"><img src="assets/img/hotelList9.jpg" height="150" width="150"  alt="logo" /></div>
                    <div className="card-body offset-1 col-5">
                        <div className="row mt-4">
                            <div className="card-title col-12"><h4><b>Tree Of Life Resort & Spa, Varanasi</b></h4></div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12"><h6>Varanasi, 13.0 km to City centre</h6></div>
                        </div>
                    </div>
                    <div className="mt-5 col-2 offset-1">
                    <button><Link to='/book'> Book Now</Link></button>
                        <div className="price mt-4 ml-2">₹3294</div>
                    </div>
                </div>
            </div>    
            <div className="container card-hotel">
                <div className="row  card-wrapper">
                    <div className="card-image col-3"><img src="assets/img/hotelList10.jpg" height="150" width="150" alt="logo" /></div>
                    <div className="card-body offset-1 col-5">
                        <div className="row mt-4">
                            <div className="card-title col-12"><h4><b>Alka Hotel</b></h4></div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12"><h6>Varanasi, 2.5 km to City centre</h6></div>
                        </div>
                    </div>
                    <div className="mt-5 col-2 offset-1">
                    <button><Link to='/book'> Book Now</Link></button>
                        <div className="price mt-4 ml-2">₹2589</div>
                    </div>
                </div>
            </div>    
        </>
    );
};

export default Hotel;