import React from 'react';
import {Link,Route} from 'react-router-dom';
import image1 from '../../assets/1.png';
import listSVG from '../../assets/list.svg';
import Thumb from '../../assets/thumb.svg';
import './HomeGrid.css';
import Grid from './Grid';
import List from './List';
const HomeGrid = () => {
  return (
        <div className="container">
			{/* <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12" style={{paddingTop: '2%'}}>
				<div className="col-md-8 col-sm-8 col-xs-6 col-lg-8">
					<div className="dropdown">
						<button className="dropbtn">Filter By</button>
						<div className="dropdown-content">
						<a href="#">JPG</a>
						<a href="#">PNG</a>
						<a href="#">SVG</a>
						</div>
						</div>
				</div>
				<div className="col-md-4 col-sm-4 col-lg-4 col-xs-6">
					<div className="view">
						<Link to="/home/list" style={{color: '#F58C1F'}}><img src={listSVG} className="img-responsive"/></Link>
						<Link to="/home/grid"><img src={Thumb} className="img-responsive"/></Link>
					</div>
				</div>
			</div> */}

			{/* <Route exact path="/home/grid" component={Grid}/>
			<Route exact path="/home/list" component={List}/> */}


			<div className="col-md-12 col-lg-12 col-xs-12 thumbnail-upload" id="page">
				<div className="col-md-3 col-sm-4 col-xs-6">
					<div className="upload-image">
						<img src={image1} className="img-responsive"/>
					</div>
				</div>
				<div className="col-md-3 col-sm-4 col-xs-6">
					<div className="upload-image">
						<img src={image1} className="img-responsive"/>
					</div>
				</div>
				<div className="col-md-3 col-sm-4 col-xs-6">
					<div className="upload-image">
						<img src={image1} className="img-responsive"/>
					</div>
				</div>
				<div className="col-md-3 col-sm-4 col-xs-6">
					<div className="upload-image">
						<img src={image1} className="img-responsive"/>
					</div>
				</div>
				<div className="col-md-3 col-sm-4 col-xs-6">
					<div className="upload-image">
						<img src={image1} className="img-responsive"/>
					</div>
				</div>
				<div className="col-md-3 col-sm-4 col-xs-6">
					<div className="upload-image">
						<img src={image1} className="img-responsive"/>
					</div>
				</div>
				<div className="col-md-3 col-sm-4 col-xs-6">
					<div className="upload-image">
						<img src={image1} className="img-responsive"/>
					</div>
				</div>
				<div className="col-md-3 col-sm-4 col-xs-6">
					<div className="upload-image">
						<img src={image1} className="img-responsive"/>
					</div>
				</div>
				<div className="col-md-3 col-sm-4 col-xs-6">
					<div className="upload-image">
						<img src={image1} className="img-responsive"/>
					</div>
				</div>
				<div className="col-md-3 col-sm-4 col-xs-6">
					<div className="upload-image">
						<img src={image1} className="img-responsive"/>
					</div>
				</div>
				<div className="col-md-3 col-sm-4 col-xs-6">
					<div className="upload-image">
						<img src={image1} className="img-responsive"/>
					</div>
				</div>
				<div className="col-md-3 col-sm-4 col-xs-6">
					<div className="upload-image">
						<img src={image1} className="img-responsive"/>
					</div>
				</div>
				<div className="col-md-3 col-sm-4 col-xs-6">
					<div className="upload-image">
						<img src={image1} className="img-responsive"/>
					</div>
				</div>
				<div className="col-md-3 col-sm-4 col-xs-6">
					<div className="upload-image">
						<img src={image1} className="img-responsive"/>
					</div>
				</div>
				<div className="col-md-3 col-sm-4 col-xs-6">
					<div className="upload-image">
						<img src={image1} className="img-responsive"/>
					</div>
				</div>
				<div className="col-md-3 col-sm-4 col-xs-6">
					<div className="upload-image">
						<img src={image1} className="img-responsive"/>
					</div>
				</div>
				<div className="col-md-3 col-sm-4 col-xs-6">
					<div className="upload-image">
						<img src={image1} className="img-responsive"/>
					</div>
				</div>
				<div className="col-md-3 col-sm-4 col-xs-6">
					<div className="upload-image">
						<img src={image1} className="img-responsive"/>
					</div>
				</div>
				<div className="col-md-3 col-sm-4 col-xs-6">
					<div className="upload-image">
						<img src={image1} className="img-responsive"/>
					</div>
				</div>
				<div className="col-md-3 col-sm-4 col-xs-6">
					<div className="upload-image">
						<img src={image1} className="img-responsive"/>
					</div>
				</div>
				<div className="col-md-3 col-sm-4 col-xs-6">
					<div className="upload-image">
						<img src={image1} className="img-responsive"/>
					</div>
				</div>
				<div className="col-md-3 col-sm-4 col-xs-6">
					<div className="upload-image">
						<img src={image1} className="img-responsive"/>
					</div>
				</div>
				<div className="col-md-3 col-sm-4 col-xs-6">
					<div className="upload-image">
						<img src={image1} className="img-responsive"/>
					</div>
				</div>
			</div>
	</div>
  )
}

export default HomeGrid;
