import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoMdMail } from "react-icons/io";
import Button from 'react-bootstrap/Button';
function Contact(){
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[message,setMessage]=useState('')
    const handleSubmit =(e)=> {
        e.preventDefault();
    }
return(
    <>
<section><h1 style={{textAlign:'center', fontSize:'50px', color:'green'}} id="Contact"><IoMdMail />Contact ME </h1></section>
        <form className="form">
            <Container >
                <Row>
                <Col  xs={12} md={6}className="contact_form">
            
            <label>Full Name : </label>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)}
            />
            <label>Email : </label>
            <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}
            />
            <label>Your Message : </label>
            <textarea type="text" value={message} onChange={(e)=> setMessage(e.target.value)}
            /> <Button variant="outline-secondary btn" type="submit">Submit</Button>
                 </Col>
                <Col  xs={12} md={6} className="intouch">
            <h1>Get In Touch</h1>
            <p>Great ideas deserve great execution.
               Whether you want to collaborate,
               chat, or just say hi — I’m just  
               a message away! </p> 
              
               </Col>
               </Row>
               </Container>
               </form>
              
                     
        
  

    </>
)
}export default Contact;