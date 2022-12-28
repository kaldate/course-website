import React,{useEffect} from "react";
import { Button,Container,Card,CardTitle,CardSubtitle,CardText,CardBody,Col,Row} from  'reactstrap';
import Cards from "./Cards"
import Sdata from './Sdata'
const Service=()=>{
  useEffect(()=>{
    document.title="Service";
 },[]);
    return  <div>
    <strong> <h1 className="text-center margin1">Our Services</h1></strong>

     <Row>
        <Col md={4}>
            
        {
            Sdata.map((val,ind)=>{
                return <Cards imgsrc={val.imgsrc} title={val.title} dis={val.dis}/>
            })
        }
  </Col>
  <Col md={4}>
            
        {
            Sdata.map((val,ind)=>{
                return <Cards imgsrc={val.imgsrc} title={val.title} dis={val.dis}/>
            })
        }
  </Col>
  <Col md={4}>
            
            {
                Sdata.map((val,ind)=>{
                    return <Cards imgsrc={val.imgsrc} title={val.title} dis={val.dis}/>
                })
            }
      </Col>
  </Row>
      </div>
};
export default Service;