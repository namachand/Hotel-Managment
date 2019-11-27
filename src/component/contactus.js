import React from "react";
import { Button, Form, FormGroup,Input, Col,Card,CardBody } from 'reactstrap';
import Navbar from './common/Navbar';
import Dropdown from "react-bootstrap/Dropdown";
import '../css/contact.css'
import image from '../component/images/contact.png'
const Contactus = () => {
  return (
<div className="back" style={{ background: `url('${image}') no-repeat`,
opacity:0.9,
backgroundSize:'cover',
minHeight:"100vh"
}}>
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

<Card className="crd col-md-4" style={{borderRadius:10,
    background:"transparent",
    opacity:2,
   backgroundColor:"white",
   background:'transparent'
    }}>
        <CardBody>
        <div className="row row-content content">
            <div className="col-12">
                <h3>Send us your Feedback</h3>
            </div>
            <div className="col-12 col-md-9 ">
                <Form>
                    <FormGroup row>

                        <Col className='col-md-12' md={{offset:2}}>
                            <Input type="text" id="firstname" name="firstname"
                                placeholder="Name"/>
                        </Col>
 
                    </FormGroup>
                    <FormGroup row>
                        <Col className="col-md-12" md={{offset:2}}>
                            <Input type="tel" id="telnum" name="telnum"
                                placeholder="Tel. number"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col className="col-md-12" md={{offset:2}}>
                            <Input type="email" id="email" name="email"
                                placeholder="Email"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>

                        <Col className="col-md-12" md={{offset:2}}>
                            <Input type="textarea" id="message" name="message"
                              placeholder="comment here"  rows="8"></Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{size: 10, offset: 3}}>
                            <Button type="submit" color="primary">
                                Send Feedback
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </div> 
        </CardBody>
    </Card>
      </div>
    
       
    );
};

export default Contactus;   