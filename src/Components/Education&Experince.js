import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsCircleFill } from "react-icons/bs";

function Education() {
  return (
    <>
    
    <section className='edu_effect'>
    <Container className='Edu_Exp_sec' id='Education'>
        <h1>Education & Experince</h1>
      <Row>
        <Col xs={12} md={6}><h1>Education</h1>
        <div className='edu'>
           <p><BsCircleFill className='circle' /><b> 2021</b></p>
           <p className='edu_info'>secondary school "tawjihi"</p>
            <p><BsCircleFill  className='circle'/><b> 2021-2025</b></p>
             <p className='edu_info'>AABU university major in cybersecurity</p>
        </div>

         
        
        </Col>
        <Col  xs={12} md={6}><h1>Experince</h1>
        <div className='edu'>
           <p><BsCircleFill className='circle' /><b> 8/2023-12/2023</b></p>
           <p className='edu_info'>QA Software Testing| Participant</p>
            <p><BsCircleFill  className='circle'/><b> 3/2024-6/2024</b></p>
             <p className='edu_info'> National Crisis Management Center| Intern</p>
            <p><BsCircleFill  className='circle'/><b> 7/2025-Until Now </b></p>
             <p className='edu_info'>SHAI for AI| Internship</p>      
        </div>
        
        
        
        </Col>
      </Row>
    </Container>
    </section>
    </>
  );
}

export default Education;