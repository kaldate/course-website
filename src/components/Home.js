import React,{useEffect} from "react";
import { Button,Container,Row,Col } from  'reactstrap';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Example from "./Caursolex";
const Home=()=>{
  useEffect(()=>{
    document.title="Home";
 },[]);

 



 const navigate = useNavigate();

  const navigateToService= () => {
    navigate('/Service');
  };
    return  <div>
     <Example/>
      <Row>
        <Col md={6}  >
          
        <h1 style={{ marginTop: `150px` }}>
        <strong className="my-8" > Learn Without Limits</strong>
      </h1>
      <h5 >
      Start, switch, or advance your career with more 
      than 5,000 courses, Professional Certificates, and
      degrees from world-class universities and companies.
      </h5>
    <div className="mt-3">
    <Button
     className="margin1"
    color="primary"
    outline
    size="lg"
    onClick={navigateToService}
  >Get Started
  </Button>
 { ' '}
  <Button
   className="margin2"
  size="lg" color="primary"
  href="https://in.coursera.org/?authMode=signup"
  tag="a">
    Join for free
  </Button>
  </div>
        </Col>
        <Col md={6}>
          <div className="ball">
        </div>
          </Col>
      </Row>
   
</div>
};
export default Home;