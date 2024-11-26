import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
function LandingPage() {
  return (
    <>

      <Container className='mt-5 px-5'>
        <Row className='px-lg-5'>
          <Col sm={12} md={6} className='pe-lg-4 my-lg-5'>
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{ textAlign: 'justify' }} className='mt-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laboriosam ea impedit ipsa delectus debitis quidem tempore, est nihil corrupti, accusamus vitae id provident consequuntur cum illum veritatis quod non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque enim eligendi error omnis odit quo veniam soluta deserunt illo! Veritatis ea architecto adipisci! Quas in porro velit repudiandae magni aliquid?
            </p>
            <button className='btn bg-warning text-light mt-4 mt-lg-3'>Get Started</button>
          </Col>

          <Col sm={12} md={6} className='mt-5 mt-md-0 my-lg-5 ps-lg-4'>
            <img src='https://i.pinimg.com/originals/5c/4a/1c/5c4a1cef8a1ebd3584fac99c817b173c.gif' alt='noimage' style={{ width: '100%', height: '20rem' }} />

          </Col>


        </Row>



      </Container>

      <Container className='mt-5 '>
        <h2 className='text-center'>FEATURES</h2>
        <Row className='my-5 px-lg-5'>
          <Col md={4} className='px-5'>
            <img src='https://i.pinimg.com/originals/88/4a/40/884a408310b28171aa1018f77dee2602.gif' alt='noimage' style={{ width: '100%', height: '16rem' }}>
            </img>
            <h4 className='mt-5 mt-lg-4'>Card Title</h4>
            <p style={{ textAlign: 'justify' }} className='mt-4 mt-lg-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid explicabo commodi molestias inventore eligendi veritatis minima ipsam blanditiis sunt provident dolorum, beatae ducimus laboriosam iure labore laborum debitis. Eum, architecto.</p>
          </Col>
          <Col md={4} className='px-5 mt-5 mt-lg-0'>
            <img src='https://i.pinimg.com/originals/43/b7/e9/43b7e94dac162ec1543b0a861d012564.gif' alt='noimage' style={{ width: '100%', height: '16rem' }}>
            </img>
            <h4 className='mt-5 mt-lg-4'>Card Title</h4>
            <p style={{ textAlign: 'justify' }} className='mt-4 mt-lg-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid explicabo commodi molestias inventore eligendi veritatis minima ipsam blanditiis sunt provident dolorum, beatae ducimus laboriosam iure labore laborum debitis. Eum, architecto.</p>
          </Col>
          <Col md={4} className='px-5 mt-5 mt-lg-0'>
            <img src='https://i.pinimg.com/originals/05/4a/a3/054aa3421c22e0c9e04ada3082066a8d.gif' alt='noimage' style={{ width: '100%', height: '16rem' }}>
            </img>
            <h4 className='mt-5 mt-lg-4 '>Card Title</h4>
            <p style={{ textAlign: 'justify' }} className='mt-4 mt-lg-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid explicabo commodi molestias inventore eligendi veritatis minima ipsam blanditiis sunt provident dolorum, beatae ducimus laboriosam iure labore laborum debitis. Eum, architecto.</p>
          </Col>
        </Row>
      </Container>
      <div className='row px-lg-4'>
        <div className="col-md-1"></div>
        <div className="col-md-10 px-5">
          <Container className='border border-dark border-4 rounded my-lg-5'>
            <Row className='p-lg-5 py-5 px-3'>
              <Col md={6} className='pe-lg-4'>
                <h1 className='text-warning'>Simple, Fast and Powerful</h1>
                <h4 className='mt-5' style={{ textAlign: 'justify' }}>Play Everthing : <span style={{ fontSize: '14px', textTransform: 'lowercase', }}>Pariatur facere nihil, esse molestias dignissimos voluptatum maiores blanditiis amet voluptatibus, ipsa tempora amet incidunt eveniet? Quisquam vitae illum deserunt.</span></h4>
                <h4 className='my-4' style={{ textAlign: 'justify' }}>Play Everthing : <span style={{ fontSize: '14px', textTransform: 'lowercase', }}>Pariatur facere nihil, esse molestias dignissimos voluptatum maiores blanditiis amet voluptatibus, ipsa tempora amet incidunt eveniet? Quisquam vitae illum deserunt.</span></h4>
                <h4 style={{ textAlign: 'justify' }}>Play Everthing : <span style={{ fontSize: '14px', textTransform: 'lowercase', }}>Pariatur facere nihil, esse molestias dignissimos voluptatum maiores blanditiis amet voluptatibus, ipsa tempora amet incidunt eveniet? Quisquam vitae illum deserunt.</span></h4>
              </Col>
              <Col md={6} className='mt-5 mt-lg-0 ps-lg-4'>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/gk6Jri1kGTs" title="Adangaatha Asuran - Video Song | RAAYAN | Dhanush | Sun Pictures | A.R. Rahman | Prabhu Deva" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="col-md-1"></div>
      </div>




    </>
  )
}

export default LandingPage