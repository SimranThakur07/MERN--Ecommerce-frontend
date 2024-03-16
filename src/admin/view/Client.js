import React, { useEffect, useState } from 'react'
import '../style/admin.css'
import Sidebar from './partial/Sidebar'
import Header from './partial/Header'
import { Link } from 'react-router-dom'
import { useAllUserQuery, useDeleteMutation } from '../../redux/api/userApi'
import Loader from '../../components/cards/Loader'
import { FaTrash } from 'react-icons/fa6'
import { responseToast } from '../../utils/feature'
import { server } from "../../redux/store";
const Client = () => {
  const [rows, setRows] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const id = userData?.user?.id;
  const { data, isLoading } = useAllUserQuery(id);
const [ deleteUser ] = useDeleteMutation()

  const handleDelete = async (userId) => {
    const res = await deleteUser({userId, adminId: id})
    responseToast(res, null, "")
  }
  useEffect(() => {
    if (data) {
      const updatedRows = data.users.map((i) => ({
        photo: <img src={`${server}${i.photo}`} alt={i.name} className=' rounded-5 '/>,
        email: i.email,
        name: i.name,
        role: i.role,
        gender: i.gender,
        action: ( 
          <button onClick={() => handleDelete(i._id)} className=' border-0  bg-transparent text-danger'> <FaTrash/> </button>
        )
      }));
      setRows(updatedRows);
    }
  }, [data]);

  

  return (
    <>
     <Sidebar/>
    <div className="main-context  ">
      <Header/>
      <div className="admin-dashboard p-4">
      <div aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Client</li>
  </ol>
</div>
{
            isLoading ? 
            (
              <Loader/>
            )
            : 
            (
<div className=' card p-4'>
    <div  className='d-flex justify-content-end mb-2'>
    <input type="text" placeholder='Search...' className='w-25 ' />
    </div>
<div className="table-wrapper w-100  overflow-x-auto ">
<table class="table table-bordered ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Img</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Role</th>
      <th scope="col">Gender</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {rows.map((row, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <th scope="row">{row.photo}</th>
                      <td>{row.name}</td>
                      <td>{row.email}</td>
                      <td>{row.role}</td>
                      <td>{row.gender}</td>
                     
                      <td>{row.action}</td>
                    </tr>
                  ))}
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
            )
  }
</div>
</div>
    </>
  )
}

export default Client