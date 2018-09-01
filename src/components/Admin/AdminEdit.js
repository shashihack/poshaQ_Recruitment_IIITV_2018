import React from 'react';
import './AdminEdit.css';
const AdminEdit =  () => {
  return (
						<table className="table table-striped custab">
						    <thead>
						        <tr>
						            <th className="text-center">File Name</th>
						            <th className="text-center">Status</th>
						            <th className="text-center">Size</th>
						            <th className="text-center">Action</th>
						        </tr>
						    </thead>
				            <tr>
				                <td>1</td>
				                <td>News</td>
				                <td>News Cate</td>
				                <td className="text-center"><a className='btn btn-info btn-xs' href="#">Edit</a> <a href="#" class="btn btn-danger btn-xs"> Del</a></td>
				            </tr>
						            
    					</table>

  )
}

export default AdminEdit;
