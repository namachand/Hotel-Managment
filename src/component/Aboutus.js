import React from "react";
import { Parallax } from "react-parallax";
import imag from '../component/images/hotelhuts.jpg';
import {Link} from 'react-router-dom';
import Dropdown from "react-bootstrap/Dropdown";
import '../css/styles.css';
import Navbar from '../component/common/Navbar'
import image1 from '../component/images/beach.jpg'
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

const Aboutus = () => {
return(
<div>
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

 <div className='huts'>
 <img src={imag} className='househuts animate fadeIn five'/>  
 <h1>About Us!</h1>
 </div>
 <Breadcrumb style={{
	 width:"180px"
 }}>
 <BreadcrumbItem><Link to='/'>Home</Link></BreadcrumbItem>
 <BreadcrumbItem active>Aboutus</BreadcrumbItem>
 </Breadcrumb>
 <div className='row middle'>

	<div className="col-md-4 offset-2">
	<h1>A Place TO Remember</h1>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
	<button className='btn btn-danger'>Read more</button>
	</div>
	<div className='col-md-4'>
	<img src='./image/hot.jpg' className='househuts animate fadeIn five'/>  
	</div>
</div>

<div>
<Parallax style={{styles}} bgImage={image1} strength={500}>
	<div style={{ height: 500 }}>
	<div style={insideStyles}>Best Luxirious Comfort</div>
	</div>
</Parallax>
</div>
<div className='lastone'>
<h1>Our Hotels</h1>
</div>
<div className='row'>
<div className="col-md-3 offset-1">
<img className='pic' src='./image/one.jpg'/>
</div>
<div className='col-md-3 ml-2'>
<img className='pic' src='./image/two.jpg'/>
</div>
<div className='col-md-4 ml-2'>
<img className='pic' src='./image/four.jpg'/>
</div>

</div>
</div>
)};

export default Aboutus;