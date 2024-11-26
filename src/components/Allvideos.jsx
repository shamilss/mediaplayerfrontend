import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { getVideoApi, updateCategoryApi } from '../services/allApi'

function Allvideos({addStatus,setCategoryStatus}) {

  const[removeStatus,setRemoveStatus]=useState({})
  const[video,setVideo]=useState([])

  const getallVideo=async()=>{
    const result=await getVideoApi()
   setVideo(result.data)
  }
  console.log(video);
  
  useEffect(()=>{
    getallVideo()},[addStatus,removeStatus,setCategoryStatus]
  )

  const videoOver = (e)=>{
    e.preventDefault()
  }

  const videoDrop = async(e)=>{
  
    const {videoDetails,categoryDetails}=JSON.parse(e.dataTransfer.getData("Details"))
  console.log(videoDetails,categoryDetails);
  let result=categoryDetails.allvideos.filter((item)=>
    item.id!=videoDetails.id
  )

  const reqBody={
    category:categoryDetails.category,
    allvideos:result,
    id:categoryDetails.id
  }

  const response =await updateCategoryApi(categoryDetails.id,reqBody)
  console.log(response);
  if(response.status>=200&&response.status<300){
    setCategoryStatus(result)
  }
  
  
    
  }

  return (
    <>

    <h4 className='mt-4'>All Videos</h4>
{video?.length>0?

   <div className='container-fluid mt-5' droppable  onDragOver={(e)=>videoOver(e)} onDrop={(e)=>videoDrop(e)}  >
      <div className="row">
       {video?.map((item)=>( <div className="col-md-3 p-3">
          <Videocard videoDetails={item} setRemoveStatus={setRemoveStatus} />
        </div>))}
      </div>
   </div>
:

    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 d-flex justify-content-center flex-column">
          <img src='src/istockphoto-861576608-612x612-removebg-preview.png'></img>
          <h5 className='text-center text-danger'>No Videos Added Yet</h5>
        </div>
        <div className="col-md-4"></div>

      </div>
    </div>
} 
    </>
  )
}

export default Allvideos