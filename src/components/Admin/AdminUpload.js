import React from 'react';
import './AdminUpload.css';
import cloud from '../../assets/cloud.svg';
const AdminUpload =  () => {
  return (
					<div className="main-content">
						<div className="upload-area">
							<div className="center-logo">
								<img src={cloud} className="img-responsive"/>
								<h4>Upload your image here</h4>
							</div>
							<div className="choose-button">
								<form action="#">
								  <input type="file" name="pic" accept="image/*" className="upload-button" multiple id="file"/>
								  <label for="file">Choose a file</label>
								  <input type="submit" className="submit-button"/>

								</form>
							</div>
						</div>
						<table className="table table-striped custab">
						    <thead>
						        <tr>
						            <th className="text-center">File Name</th>
						            <th className="text-center">Status</th>
						            <th className="text-center">Size</th>
						            {/* <!-- <th className="text-center">Action</th> --> */}
						        </tr>
						    </thead>
				            <tr>
				                <td>1</td>
				                <td>News</td>
				                <td>News Cate</td>
				                {/* <td className="text-center"><a className='btn btn-info btn-xs' href="#">Edit</a> <a href="#" className="btn btn-danger btn-xs"> Del</a></td> --> */}
				            </tr>
						            
    					</table>
					</div>
  )
}

export default AdminUpload;
