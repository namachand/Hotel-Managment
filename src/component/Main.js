import React from "react";
import Navbar from "./common/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Aboutus from "../component/Aboutus";
import {Switch ,Route,useLocation} from 'react-router-dom'
import Contactus from './contactus';
import Hotel from "./Hotel";
import BookingPage from './BookingPage'
import "../css/main.css";

export default function Main(){

    const Home = () => {
        return (
            <>
            <div className="wholeContent">
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
            </div>    
            <div className="container ourRooms">
                <div className="row mt-5">
                    <div className="offset-5 col-7"><span className="font-heading">Our Rooms</span></div>
                </div>
                <div className="row ml-5 mt-5">
                    <div className=" col-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/assets/img/room1.jpg" height="200" width="200" />
                            <Card.Body>
                            <Card.Title>Standard Room</Card.Title>
                            <Card.Text>
                                ₹ 2800 / per night
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="offset-1 col-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/assets/img/room2.jpeg" height="200" width="200" />
                            <Card.Body>
                            <Card.Title>Family Room</Card.Title>
                            <Card.Text>
                                ₹ 4000 / per night
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="offset-1 col-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/assets/img/room3.jpg" height="200" width="200" />
                            <Card.Body>
                            <Card.Title>Single Room</Card.Title>
                            <Card.Text>
                                ₹ 1800 / per night
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>            
                <div className="row ml-5 mt-5">
                    <div className=" col-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/assets/img/room4.jpg" height="200" width="200" />
                            <Card.Body>
                            <Card.Title>Deluxe Room</Card.Title>
                            <Card.Text>
                                ₹ 1500 / per night
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="offset-1 col-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/assets/img/room5.jpg" height="200" width="200" />
                            <Card.Body>
                            <Card.Title>Luxury Room</Card.Title>
                            <Card.Text>
                                ₹ 2000 / per night
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="offset-1 col-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/assets/img/room6.jpg" height="200" width="200" />
                            <Card.Body>
                            <Card.Title>Single Room</Card.Title>
                            <Card.Text>
                                ₹ 1800 / per night
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>            
            </div>    
            <div className="container aboutUs">
                <div className="row ml-5 mt-5">
                    <div className="col-6">
                        <img src="/assets/img/hotel1.jpg" height="400" width="500"/>
                    </div>
                    <div className="offset-1 col-5">
                        <div className="row">
                            <div className="col-12"><span className="font-heading">About Us</span></div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-12 aboutusContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget ipsum vitae ligula condimentum interdum vitae eget risus. Aliquam porttitor leo a aliquet bibendum. Proin et commodo nulla, a feugiat nisi. Integer dignissim dolor eu risus pellentesque, sit amet feugiat nibh tempor. Morbi a venenatis nulla.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container hotelFeatures">
                <div className="row mt-5">
                    <div className="offset-5 col-7"><span className="font-heading">Hotel Features</span></div>
                </div>
                <div className="row mt-5 ml-5">
                    <div className="col-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/assets/img/feature1.jpg" height="200" width="200" />
                            <Card.Body>
                            <Card.Title>Swimming</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="offset-1 col-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/assets/img/feature2.jpg" height="200" width="200" />
                            <Card.Body>
                            <Card.Title>Fire Exit</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="offset-1 col-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/assets/img/feature3.jpg" height="200" width="200"/>
                            <Card.Body>
                            <Card.Title>Car Parking</Card.Title>
                            </Card.Body>
                        </Card>
                    </div> 
                </div>
                <div className="row mt-5 ml-5">
                    <div className="col-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/assets/img/feature4.jpg" height="200" width="200" />
                            <Card.Body>
                            <Card.Title>Minibar</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="offset-1 col-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/assets/img/feature5.jpg" height="200" width="200" />
                            <Card.Body>
                            <Card.Title>Drinks</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="offset-1 col-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/assets/img/feature6.jpg" height="200" width="200" />
                            <Card.Body>
                            <Card.Title>Car Airport</Card.Title>
                            </Card.Body>
                        </Card>
                    </div> 
                </div>
            </div>
            <div className="container testimonials">
                <div className="row mt-5 ml-5">
                    <div className="col-8 offset-4"><span className="font-heading">Testimonials</span></div>
                </div>
                <div className="row mt-5">
                <Carousel>
                    <Carousel.Item>
                        <CardGroup>
                            <Card>
                            <Card.Img variant="top" src="assets/img/testimonial1.jpg" height="250" />
                            <Card.Body>
                                <Card.Title>John Doe</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum libero vel turpis viverra, in.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 6 mins ago</small>
                            </Card.Footer>
                            </Card>
                            <Card>
                            <Card.Img variant="top" src="assets/img/testimonial2.jpg" height="250" />
                            <Card.Body>
                                <Card.Title>David</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum libero vel turpis viverra, in.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 8 mins ago</small>
                            </Card.Footer>
                            </Card>
                            <Card>
                            <Card.Img variant="top" src="assets/img/testimonial3.png" height="250"/>
                            <Card.Body>
                                <Card.Title>Johny</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum libero vel turpis viverra, in.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 9 mins ago</small>
                            </Card.Footer>
                            </Card>
                        </CardGroup>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardGroup>
                            <Card>
                                <Card.Img variant="top" src="assets/img/testimonial4.jpg" height="250" />
                                <Card.Body>
                                    <Card.Title>John</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum libero vel turpis viverra, in.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="assets/img/testimonial5.jpg" height="250" />
                                <Card.Body>
                                    <Card.Title>David</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum libero vel turpis viverra, in.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 12 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="assets/img/testimonial6.jpg" height="250"/>
                                <Card.Body>
                                    <Card.Title>Johny</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum libero vel turpis viverra, in.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardGroup>
                            <Card>
                                <Card.Img variant="top" src="assets/img/testimonial7.jpg" height="250" />
                                <Card.Body>
                                    <Card.Title>John</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum libero vel turpis viverra, in.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="assets/img/testimonial8.jpg" height="250" />
                                <Card.Body>
                                    <Card.Title>David</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum libero vel turpis viverra, in.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 15 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="assets/img/testimonial9.jpg" height="250" />
                                <Card.Body>
                                    <Card.Title>Johny</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum libero vel turpis viverra, in.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </Carousel.Item>
                </Carousel>
                </div>
            </div>
            </>
        );
    }
let location = useLocation();
let background=location.state && location.state.background;
return(
<div>
    <Switch location={background || location}>
    <Route exact path='/' children={<Home/>}/>
    <Route path='/aboutus' children={<Aboutus/>}/>
    <Route exact path='/contact' children={<Contactus/>}/>
    <Route path='/hotel' children={<Hotel/>}/>
    <Route path='/book' children={<BookingPage/>}/>
    
    </Switch>
</div>
);
}
