import React, { useState } from 'react'
import Add from '../components/Add'
import Allvideos from '../components/Allvideos'
import Category from '../components/Category'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClockRotateLeft} from '@fortawesome/free-solid-svg-icons'

function Home() {

  const[addStatus,setAddStatus]=useState({})
  const [categoryStatus,setCategoryStatus]=useState({})
  
  return (
    <>

    <div className='container d-flex justify-content-between mt-5'>
      <Add setAddStatus={setAddStatus}/>
      <Link to={'/watchhistory'} style={{textDecoration:'none'}}><h5><span className='d-md-inline d-none' style={{fontWeight:600}}>Watch History</span> <FontAwesomeIcon icon={faClockRotateLeft} size="lg" className='' /></h5></Link>
    </div>
    <div className='container-fluid p-4'>
      <div className="row">
        <div className="col-md-9">
          <Allvideos addStatus={addStatus} setCategoryStatus={setCategoryStatus}/>
        </div>
        <div className="col-md-3">
          <Category categoryStatus={categoryStatus}/>
        </div>
      </div>
    </div>


    
    
    
    </>
  )
}

export default Home