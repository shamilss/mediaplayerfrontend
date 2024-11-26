import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addHistoryApi, removeVideoApi } from '../services/allApi'



function Videocard({videoDetails,setRemoveStatus,present}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async() => {setShow(true);
    let caption=videoDetails?.caption
    let url=videoDetails?.videolink
    const time=new Date()
    console.log(time);
    const timeStamp=new Intl.DateTimeFormat('en-GB',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)
    console.log(timeStamp);
    
    const reqBody={caption,url,timeStamp}
    const result=await addHistoryApi(reqBody)
    console.log(result);
    
  }
  const handleDelete = async(id)=>{
    const result=await removeVideoApi(id)
    
    if(result.status>=200 && result.status<300){
      setRemoveStatus(result)
    } 
  }

  const videoDrag=(e,videoDetails)=>{
    console.log(e);
    console.log(videoDetails);
    e.dataTransfer.setData("videoDetails",JSON.stringify(videoDetails))
    
    

  }

  return (
    <>

<Card style={{ width: '100%', height: '100%' }} draggable onDragStart={(e)=>videoDrag(e,videoDetails)}>
  {!present && <Card.Img  onClick={handleShow} variant="top" src={videoDetails?.videoimg} style={{ width: '100%', height: '10rem' }} /> }
  
  <Card.Body className='d-flex flex-column justify-content-between'>
    <Card.Title style={{ width: '100%' }}>{videoDetails?.caption}</Card.Title>
    <div className='d-flex justify-content-center my-2'>
      {!present && <Button onClick={()=>{handleDelete(videoDetails?.id)}} variant="danger">
        <FontAwesomeIcon icon={faTrash} size="lg" />
      </Button> } 
    </div>
  </Card.Body>
</Card>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{videoDetails?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="396" src={`${videoDetails?.videolink}?autoplay=1`} title="Illuminati|Aavesham|Jithu Madhavan|Fahadh Faasil|Sushin Shyam,Dabzee,Vinayak| Nazriya|Anwar Rasheed" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></Modal.Body>
       
      </Modal>
     
    </>
  )
}

export default Videocard