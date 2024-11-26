import { faHouse,faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryApi, getHistoryApi } from '../services/allApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function WatchHistory() {

  const [allHisVideo,SetAllHisVideo]=useState([])
  const [deleteStatus,SetDeleteStatus]=useState({})
  const getAllVideo=async()=>{
    const result=await getHistoryApi()
      SetAllHisVideo(result.data);
      
    
  }
  console.log(allHisVideo);
   

   const handleDelete=async(id)=>{
    const result=await deleteHistoryApi(id)
    console.log(result);
    if(result.status>=200&&result.status<300){
      SetDeleteStatus(result)
    }
    else{
      toast.error('Something Went Wrong')

    }

   }
   useEffect(()=>{getAllVideo()},[deleteStatus])

  
  return (
   <>
   <div className='d-flex justify-content-between px-5 mt-5'>
    <h5>Watch History</h5>
    <Link to={'/home'} style={{textDecoration:'none'}}><h5><FontAwesomeIcon icon={faHouse} size="lg" className='me-2' /><span className='d-md-inline d-none' style={{fontWeight:600}}>Back Home</span></h5></Link>
   </div>

   {allHisVideo.length>0? 
   <div className="container-fluid">
   <div className="row">
     <div className="col-md-1"></div>
     <div className="col-md-10 table-responsive">
       <table className='table table-bordered border-secondary mt-5 custom-table'
>
 <thead className='text-center'>
   <tr>
     <th>Sl No</th>
     <th>Caption</th>
     <th>URL</th>
     <th>Time Stamp</th>
     <th>Action</th>
   </tr>
 </thead>
 <tbody>
   {allHisVideo?.map((item,index)=>
    <tr>
    <td className='text-center'>{index+1}</td>
    <td>{item?.caption}</td>
    <td ><Link style={{textDecoration:'none'}} className='' to={item?.url} target='_blank'>{item?.url}</Link></td>
    <td>{item?.timeStamp}</td>
    <td className='text-center'> <button onClick={()=>handleDelete(item?.id)}  className='btn btn-danger'><FontAwesomeIcon icon={faTrash} size="lg" /></button></td>
  </tr>
  )}
  
 </tbody>
 
 </table>      
 </div>
     <div className="col-md-1"></div>
   </div>
  </div>
  :

  <h3 className='text-danger text-center'>No Watch History</h3>

   }
    <ToastContainer position='top-center' theme='colored' autoClose={2000} hideProgressBar={false}  />
   </>
  )
}

export default WatchHistory