import React from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import AdminEdit from './AdminEdit';
import AdminUpload from './AdminUpload';
class Admin extends React.Component {
    constructor(){
        super();
        this.state = {
            flag: true
        }
    }
    changeFlag = () =>{
        this.setState({flag:false});
    }
    render(){
        return (
            <BrowserRouter>
          <div className="container">
                  <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                      <div className="col-md-6 col-lg-6 col-sm-8 col-xs-12 col-md-offset-3 col-lg-offset-3 col-sm-offset-2 main-box">
                          <div className="main-content">
                              <div className="toggling">
                                  <Link to="/admin/upload" onClick={this.changeFlag}>Upload</Link>
                                  <span style={{color: '#fff', margin:'0% 2%'}}>|</span>
                                  <Link to="/admin/edit" style={{color: '#F58C1F'}} onClick={this.changeFlag}>Edit</Link>
                              </div>
                              {this.state.flag ? <AdminUpload/> : null}
                              <Route exact path="/admin/edit" component={AdminEdit}/>
                              <Route exact path="/admin/upload" component={AdminUpload}/>
      
                          </div>
                      </div>
                  </div>
              </div>
              </BrowserRouter>
        )
    }
}

export default Admin;
