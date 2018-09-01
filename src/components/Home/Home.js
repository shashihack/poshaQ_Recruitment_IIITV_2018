import React from 'react';
import HomeGrid from './HomeGrid';
import HomeList from './HomeList';
import {BrowserRouter,Route,Switch} from 'react-router-dom'; 
import {Link} from 'react-router-dom';
import listSVG from '../../assets/list.svg';
import Thumb from '../../assets/thumb.svg';
import Grid from './Grid';
import List from './List';
class Home extends React.Component {

	constructor(){
		super();
		this.state={
			flag : true
		}
	}

	changeFlag=()=>{
		this.setState({flag:false});
	}
	render(){
		return (
			<BrowserRouter>
			<div className="container">
				<div className="col-md-12 col-lg-12 col-sm-12 col-xs-12" style={{paddingTop: '2%'}}>
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
							<Link to="/grid" ><img src={Thumb} className="img-responsive" onClick={this.changeFlag}/></Link>
							<Link to="/list" style={{color: '#F58C1F'}}><img src={listSVG} onClick={this.changeFlag} className="img-responsive"/></Link>
							
						</div>
					</div>
				</div>
							{this.state.flag ? <Grid/> : null}
							<Route exact path = "/grid" component={Grid}/>
							<Route exact path = "/list" component={List}/>
			</div>
			</BrowserRouter>
		)
	}
  
}

export default Home;
