import React,{useEffect} from "react";
import { Button,Container,Card,CardTitle,CardSubtitle,CardText,CardBody,Col,Row,CardGroup} from  'reactstrap';


const Cards=(Props)=>{
  useEffect(()=>{
    document.title="Card";
 },[]);
    return  <div>
       
        <CardGroup>
        <Card className="add1"
>
  <img
    style={{heigth:`30px` ,width:`300px`,marginLeft:`60px`,marginTop:`50px`}}
    alt="Sample"
    src={Props.imgsrc}
  />
  <CardBody className="margin2">
    <CardTitle tag="h5">
      {Props.title}
    </CardTitle>
    <CardText>
    {Props.dis}
    </CardText>
  
    </CardBody>
</Card>
</CardGroup>

      </div>
};
export default Cards;