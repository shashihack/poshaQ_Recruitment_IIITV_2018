import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
const Navbar =  () => {
  return (
    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 header">
				<div className="brand-image">
				    <Link to="/home"><h3>PoshaQ</h3></Link>
					<div className="menu">
						<ul>
							<Link to="/home"><li>Home &emsp; |</li></Link>
							<Link to="/admin" style={{color:'#F58C1F'}}><li>&emsp; Admin </li></Link>
						</ul>
					</div>
				</div>
		</div>
  )
}

export default Navbar;
