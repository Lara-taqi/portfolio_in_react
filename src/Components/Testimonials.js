import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

function Testimonials() {
  return (
    <>
    <section className='test' id='Testimonials'>
        <h1>Testimonials</h1></section>
        <div className='test'>
    <Card style={{ width: '25rem' }} className='card'>
      <Card.Img variant="top" src="/test1.jpg" alt='testimonials:Sami' />
      <Card.Body>
        <Card.Title className='title'>— Sami Ahmed, Project Manager</Card.Title>
        <Card.Text>
            <FaStar style={{color:'yellow', textAlign:'center',justifyContent:'center',alignContent:'center'}}/> <FaStar style={{color:'yellow'}}/> <FaStar style={{color:'yellow'}} /> <FaStar  style={{color:'yellow'}}/> <FaStar style={{color:'black'}} /><br/>
            <sup style={{color:'black'}}><RiDoubleQuotesL /></sup><p style={{color:'black'}}>I worked with Lara on a website development project. They were very professional and provided creative solutions that significantly improved the site's performance and user experience.</p> <sup style={{color:'black'}}><RiDoubleQuotesR /></sup>
        </Card.Text>

      </Card.Body>
    </Card>
        <Card style={{ width: '25rem' }}className='card'>
      <Card.Img variant="top" src="/test2.jpg"  alt='testimonials:Xiao'/>
      <Card.Body>
        <Card.Title className='title'>— xiao mi, Entrepreneur</Card.Title>
        <Card.Text>
        <FaStar style={{color:'yellow'}}/> <FaStar style={{color:'yellow'}}/> <FaStar style={{color:'yellow'}} /> <FaStar  style={{color:'yellow'}}/> <FaStar style={{color:'black'}}/><br/>
       <sup style={{color:'black'}}><RiDoubleQuotesL /></sup><p style={{color:'black'}}>Thanks to Lara's technical skills, we successfully launched a fast and efficient web application with a responsive design and excellent user experience. Always punctual and professional. </p><sup style={{color:'black'}}><RiDoubleQuotesR /></sup>
        
        </Card.Text>

      </Card.Body>
    </Card>
        <Card style={{ width: '25rem' }}className='card'>
      <Card.Img variant="top" src="/test3.jpg"  alt='testimonials:Mariam' />
      <Card.Body>
        <Card.Title className='title'>— Mariam Khaled, Cybersecurity Officer</Card.Title>
        <Card.Text>
        <FaStar style={{color:'yellow'}}/> <FaStar style={{color:'yellow'}}/> <FaStar style={{color:'yellow'}} /> <FaStar  style={{color:'yellow'}}/> <FaStar style={{color:'black'}}/><br/>
        <sup style={{color:'black'}}><RiDoubleQuotesL /></sup><p style={{color:'black'}}>Lara's expertise in penetration testing was evident from the start. They identified critical vulnerabilities and helped us secure our system effectively. Excellent communication and outstanding results. </p><sup style={{color:'black'}}><RiDoubleQuotesR /></sup>
       
        </Card.Text>

      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default Testimonials;