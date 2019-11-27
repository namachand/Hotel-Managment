import React, { useState } from 'react';
import '../../css/navbar.css';
import { IoIosMenu } from 'react-icons/io';
import Sidebar from 'react-sidebar';
import {Link} from 'react-router-dom';

const Navbar = () => {
    
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function onSetSidebarOpen(open)
  {
    setSidebarOpen(open);
  }

  return (
        <Sidebar
          sidebar={<div className="root">
              <img className="img-logo" src={'/assets/img/logo.png'}  height="150" width="100" alt="Logo" />
            
            <ul className="links">
              <li className="links-list"><Link to="/">Home</Link></li>
             <li className="links-list"><Link to='/hotel'>Hotels</Link></li>
             <li className="links-list"><Link to="/aboutus">About Us</Link></li>
              <li className="links-list"><Link to='/contact'>Contact Us</Link></li>
            </ul>
            </div>
          }
          open={sidebarOpen}
          onSetOpen={onSetSidebarOpen}
          styles={{sidebar: { background:"#6699ff"}, overlay:{backgroundImage:'assets/img/hotel2.jpg'}}}

        >
        <IoIosMenu size={40} className="toggle" onClick={onSetSidebarOpen} />
        </Sidebar>

  );
};
export default Navbar;