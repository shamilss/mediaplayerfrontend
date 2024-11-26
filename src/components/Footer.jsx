import {  faVideo } from '@fortawesome/free-solid-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'

import React from 'react'


function Footer() {
  return (
    <div className='row mt-5 mb-3 px-3 '>

      <div className="col-md-4 px-5">
      <h3><FontAwesomeIcon className='me-3' icon={faVideo} size="lg"/>Media Player</h3>
      <p className='py-2' style={{textAlign:'justify'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, repellendus odio numquam nam saepe tempore facilis quos sed ipsa repudiandae deleniti exercitationem quam qui eos nisi magni ut a culpa.</p>
      </div>
      <div className="col-md-2 px-5 my-3 my-md-0">
        <h3>Links</h3>
        <div className='py-2'>
          <Link to='/' style={{textDecoration:'none'}}><p>Landing Page</p></Link>
          <Link to='/home' style={{textDecoration:'none'}}><p>Home Page</p></Link>
         <Link to='/watchhistory' style={{textDecoration:'none'}}> <p>Watch History</p></Link>
        </div>
      </div>
      <div className="col-md-2 px-5">
        <h3>Guides</h3>
        <div className='py-2'>
          <p>React</p>
          <p>React Bootstrap</p>
          <p>Bootswatch</p>
        </div>
      </div>
      <div className="col-md-4 px-5 mt-3 mt-md-0">
      <h3>Contact Us</h3>
      <div className='d-flex gap-3 py-3'>
        <input className='form-control' type='email' placeholder='Email Id'></input>
        <button className='btn bg-warning text-light'>Subscribe</button>
      </div>
      <div className='d-flex justify-content-between py-3'>
      <FontAwesomeIcon icon={faInstagram} size='2xl' />
      <FontAwesomeIcon icon={faXTwitter} size='2xl' />
      <FontAwesomeIcon icon={faFacebookF} size='2xl' />
      <FontAwesomeIcon icon={faLinkedinIn} size='2xl' />
      <FontAwesomeIcon icon={faWhatsapp} size='2xl' />
      
      </div>
      </div>


    </div>
  )
}

export default Footer