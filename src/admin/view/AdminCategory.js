import React from 'react'
import '../style/admin.css'
import Sidebar from './partial/Sidebar'
import Header from './partial/Header'
import { Link } from 'react-router-dom'
import img from '../assest/product2.webp'
const AdminCategory = () => {
  return (
    <>
     <Sidebar/>
    <div className="main-context  ">
      <Header/>
      <div className="admin-dashboard p-4">
      <div aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Category</li>
  </ol>
</div>
<div className=' card p-4'>
    <div  className='d-flex justify-content-end mb-2'>
    <input type="text" placeholder='Search...' className='w-25 ' />
    </div>
<div className="table-wrapper w-100  overflow-x-auto ">
<table class="table table-bordered ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Image</th>
      <th scope="col">Category</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><img src={img} alt="" width={80} /></td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td><img src={img} alt="" width={80} /></td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td><img src={img} alt="" width={80} /></td>
      <td >Larry the Bird</td>
      <td >Larry the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td><img src={img} alt="" width={80} /></td>
      <td >Larry the Bird</td>
      <td >Larry the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
<div className='d-flex justify-content-between  align-items-center '>
    <p className='m-0'>Showing 1 to 10 of 57 entries</p>
    <div aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><Link class="page-link text-black " href="#">Previous</Link></li>
    <li class="page-item"><Link class="page-link text-black " href="#">1</Link></li>
    <li class="page-item"><Link class="page-link text-black " href="#">2</Link></li>
    <li class="page-item"><Link class="page-link text-black " href="#">3</Link></li>
    <li class="page-item"><Link class="page-link text-black " href="#">Next</Link></li>
  </ul>
</div>
</div>
</div>
</div>
</div>
    </>

  )
}

export default AdminCategory