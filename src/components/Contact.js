import React, { useRef,useEffect } from 'react';
import { Button, Container, Form,FormGroup,Label,Input,Row,Col,Card,CardText } from "reactstrap"
import emailjs from '@emailjs/browser';
import CallIcon from '@material-ui/icons/Call';
import PinDropIcon from '@material-ui/icons/PinDrop';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LanguageIcon from '@material-ui/icons/Language';

 const Contact = () => {

  useEffect(()=>{
    document.title="Contact";
 },[]);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_73qlnl9', 
      'template_9dgmq1d', 
      form.current, 
      'lNU3rgGfio8XYuMTr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
    <Row>
        <Col md={6}>
       
          
       <Card className="contact" >
       <h2 className="margin2">Contact Us</h2>
         <h5>we are open to any suggestion or just to have chat</h5>
       <CardText >
      <Label className="margin2">  <PinDropIcon/> Address:100 west street no 208 ,721 near new york </Label>
      <Label className="margin2"  >  <CallIcon/> Phone: +9156738099290</Label>
      <Label className="margin2"> <MailOutlineIcon/> Email:abcd123@gmail.com</Label>
      <Label className="margin2">  <LanguageIcon/> Website: https//:ast.com</Label>
      </CardText>
      </Card>
    

  
      
        </Col>
        <Col md={4}>
        
          <Card className="contact1" >
          <h2 className="margin2">Send Us Message</h2>
        <Form ref={form} onSubmit={sendEmail}>
       
        <FormGroup className="margin2">
      <Label for="name">Name</Label>
        <Input type="text" name="name"/>
    </FormGroup>

    <FormGroup className="margin2" >
      <Label for="email">Email</Label>
      <Input type="text" name="email" />
    </FormGroup>

    <FormGroup className="margin2">
      <Label for="phone">Phone No</Label>
      <Input type="text" name="phone" />
    </FormGroup>

    <FormGroup className="margin2">
      <Label for="message">Message</Label>
      <Input type="textarea" style={{height:150,width:400}} />
    </FormGroup>
  
        <Button className="margin1" type="submit" color="primary">Send</Button>
        </Form>
        </Card>
         </Col>
      </Row>
      
    
      
        </div>
  );
};

export default Contact;