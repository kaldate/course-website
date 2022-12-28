import React from "react";
import { Button, Container,Row,Col } from 'reactstrap';

const Footer=()=>{
    const year = new Date().getFullYear();
    return(
        <div>
            <footer>
           <Container>
            <Row>
                <Col >
               <strong><p> Top Tutorials </p></strong>
              <h6>HTML Tutorial</h6>
              <h6>CSS Tutorial</h6>
             <h6>JavaScript Tutorial</h6>
              <h6> How To Tutorial</h6>
             <h6> Python Tutorial</h6>
             <h6>W3.CSS Tutorial</h6>
             <h6>Bootstrap Tutorial</h6>
             <h6>PHP Tutorial</h6>
             <h6>Java Tutorial</h6>
              </Col>
            
                <Col>
            <strong><p> Top References </p></strong>
              <h6>HTML Reference</h6>
              <h6>CSS Reference</h6>
             <h6>JavaScript Reference</h6>
              <h6> SQL Reference</h6>
             <h6> Python Reference</h6>          
             <h6>W3.CSS Reference</h6>
             <h6>Bootstrap Reference</h6>
             <h6>PHP Reference</h6>
             <h6>Java Reference</h6>
              </Col>

                <Col>
                <strong><p> Top Examples </p></strong>
              <h6>HTML Examples</h6>
              <h6>CSS Examples </h6>
             <h6>JavaScript Examples</h6>
              <h6> SQL Examples</h6>
             <h6> Python Examples</h6>          
             <h6>W3.CSS Examples</h6>
             <h6>Bootstrap Examples</h6>
             <h6>PHP Examples</h6>
             <h6>Java Examples</h6>
          </Col>
                <Col>
                <strong><p>  Get Certified </p></strong>
              <h6>HTML Certified</h6>
              <h6>CSS Certified </h6>
             <h6>JavaScript Certified</h6>
              <h6> SQL Certified</h6>
             <h6> Python Certified</h6>          
             <h6>W3.CSS Certified</h6>
             <h6>Bootstrap Certified</h6>
             <h6>PHP Certified</h6>
             <h6>Java Certified</h6>
                </Col>
            </Row>
            <p className="margin1">Copyright ⓒ {year}</p>
           </Container>
            </footer>
        </div>
    )
}
export default Footer;