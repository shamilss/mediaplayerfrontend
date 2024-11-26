import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function Header() {
  return (
    <div>

<Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
    
              <h2><FontAwesomeIcon className='me-3' icon={faVideo} size="lg"/>Media Player</h2>
            
          </Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header