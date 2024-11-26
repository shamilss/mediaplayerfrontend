import { faCloudArrowUp,faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setAddStatus}) {
  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);

  const [videoDetails,setVideoDetails]=useState({
    caption:"",
    videoimg:"",
    videolink:""
  })
  console.log(videoDetails);
  
const handleCancel=()=>{
  setVideoDetails({
    caption:"",
    videoimg:"",
    videolink:""
  })

}

const handleAdd=async()=>{
  const{caption,videoimg,videolink}=videoDetails
  if(!caption || !videoimg || !videolink){
    toast.info('Please fill the form completely')
  }
  else{
    if(videolink.startsWith('https://youtu.be/')){
      let link=`https://www.youtube.com/embed/${videolink.slice(17,28)}`
      console.log(link);
      const result=await addVideoApi({caption,videoimg,videolink:link})
     console.log(result);
     if(result.status>200 && result.status<300){
      toast.success('Video Added Successfully')
      setAddStatus(result)
      handleClose()
     }
     else{
      toast.error('Something Went Wrong')
      handleCancel()
     }
      
    }
    else{
      let link=`https://www.youtube.com/embed/${videolink.slice(-11)}`
      console.log(link);
      const result=await addVideoApi({caption,videoimg,videolink:link})
      console.log(result);
      if(result.status>200 && result.status<300){
        toast.success('Video Added Successfully')
        handleClose()
        setAddStatus(result)
       }
       else{
        toast.error('Something Went Wrong')
        handleCancel()
       }
      
    }  
  }
}


 

  return (
    <>
    <h5><span className='d-md-inline d-none' style={{fontWeight:600}}>Upload New Video</span><FontAwesomeIcon  onClick={handleShow} icon={faCloudArrowUp} style={{cursor:'pointer'}} size="lg" className='ms-2' /></h5>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon icon={faFilm} size="lg" className='me-2' />Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='mt-2 mb-4'>Please fill the following details : </p>
          <div className='border border-secondary border-2 p-4 m-3 rounded'>
            <input type='text' placeholder='Video Caption' value={videoDetails.caption} className='form-control rounded  border border-secondary' onChange={(e)=>setVideoDetails({...videoDetails,caption:e.target.value})}></input>
            <input type='text' placeholder='Video Image' value={videoDetails.videoimg} className='form-control rounded  border border-secondary my-4' onChange={(e)=>setVideoDetails({...videoDetails,videoimg:e.target.value})}></input>
            <input type='text' placeholder='Video URL' value={videoDetails.videolink} className='form-control rounded  border border-secondary' onChange={(e)=>setVideoDetails({...videoDetails,videolink:e.target.value})}></input>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} hideProgressBar={false}  />
    
    </>
  )
}

export default Add