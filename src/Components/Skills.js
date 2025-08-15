import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Skills() {
  return (
    <>
   <section className='skill_sec' id='Skills'>
    <h1>Skills </h1>
    <Container className='Skills'>
      <Row >
        <Col><h1>techincal skills </h1>
        <ul>
            <li>HTML / CSS / JavaScript</li>
            <li>React</li>
            <li>Kali Linux</li>
            <li>Python</li>
        </ul>
        </Col>
        <Col><h1>Soft skills </h1>
        <ul>
            <li>Self-Motivation & Initiative</li>
            <li>Communication Skills</li>
            <li>Attention to Detail</li>
            <li>Critical Thinking</li>
        </ul>
        </Col>
      </Row>

    </Container>
    </section>
     </>
  );
}

export default Skills;