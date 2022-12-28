import React,{useEffect} from "react";
import { Button,Container,Row,Col} from  'reactstrap';
import { useNavigate } from "react-router-dom";
import images from "./Images";
import { motion } from "framer-motion";

const About=()=>{
  useEffect(()=>{
    document.title="About";
 },[]);
    
 const navigate = useNavigate();

 const navigateToService= () => {
   navigate('/Service');
 };
   return  <div>

     <Row>
       <Col md={6}  >
       <h1 style={{ marginTop: `140px` }}>
       <strong className="my-8" > Know more about us </strong>
     </h1>
     <h5 >
     Start, switch, or advance your career with more 
     than 5,000 courses, Professional Certificates, and
     degrees from world-class universities and companies.
     </h5>
   <div className="mt-3">

 <Button
 className="margin3"
 size="lg" color="primary"
 href="https://in.coursera.org/?authMode=signup"
 tag="a">
   Know More
 </Button>
 </div>
       </Col>
       <Col md={4}>
       <div className="App">
            <motion.div className="carousel1">
                <motion.div
                    animate={{
                        scale: [1, 1, 1, 1, 1],
                        rotate: [0, 30, 60, 240, 360],
                    }}
                >
                    {images.map((image) => {
                        return (
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 2 }}
                                className="item"
                                transition={{ duration: 5 }}
                                key={image}
                                drag="x" 
                                dragConstraints={{right: 0, left:-1100}} 
                                dragTransition={{ bounceStiffness: 600, bounceDamping: 8 }} 
                            >
                                <img src="https://img.freepik.com/free-vector/girl-writing-journal-diary_74855-7408.jpg?w=2000" alt="image" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </div>
      
       
     

        </Col>
     </Row>
  
</div>
};
export default About;