import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
const Follow = () => {
  return (
    <div className='follow'>
        <Row>
            <Col xs={2} lg={1}>
                <img src="https://th.bing.com/th/id/R.37cb4d081b4bb7af1ef79326a3f0a6b1?rik=clbeIvLs9UAa1Q&riu=http%3a%2f%2fimg.freepik.com%2ffree-photo%2fmodern-office-person-face-worker_1157-3666.jpg%3fsize%3d338%26ext%3djpg&ehk=HHzpytznCvT1NzG%2b2hPp0Wn%2fC3QZmGKMJukWNaIUVwY%3d&risl=&pid=ImgRaw&r=0" alt="" />
            </Col>
            <Col  xs={10} lg={3}>
                <div>

                    marrcin frackiewicz
                    </div>
                    <div>
                    <i className='fa fa-twitter' ></i> 
                    <span>Follow</span>
                    </div>
                
            </Col>
            <Col lg={8}>if you are looking for satellite communication solutions and advice,please
          
            write to me via linkedin account or mail</Col>

        </Row>
    </div>
  )
}

export default Follow
