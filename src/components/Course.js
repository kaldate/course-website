import React from 'react';
import { Card,CardBody,CardTitle,CardSubtitle,CardText,Button, Container} from "reactstrap";
import axios from "axios";
import base_url from "./../api/bootapi";
import { Toast,ToastBody,ToastHeader } from "reactstrap";

const Course=({course,update})=>{
  const  deleteCourse=(id)=>{
    axios.delete(`${base_url}/courses/${id}`).then(
        (response)=>{
           // console.log(response);
           console.log(response.data);
           <div className="p-3 bg-warning my-2 rounded">
           <Toast>
       <ToastBody>
            Course has been deleted!
           </ToastBody>
         </Toast>
         </div>
        
          // toast.success("courses has been loaded");
        },
        (error)=>{
            console.log(error);
            
             <div className="p-3 bg-danger my-2 rounded">
                <Toast>
                   <ToastHeader>
                     opssssss!
                   </ToastHeader>
                <ToastBody>
                   Course not deleted server problem 
               </ToastBody>
           </Toast>
            </div>
           // toast.error("something went wrong");
        }
    );
}

  
    return(
    <Card className='add3'> 
<CardBody>
<Container className='text-center'>
    <CardTitle tag="h5"   className='margin2'>Course</CardTitle>
    <CardSubtitle className="mb-2 margin2" tag="h6" >{course.title}</CardSubtitle>
    <CardText>{course.description}</CardText>
  
  <Button 
color="primary"
  className='margin2'
  onClick={()=>{
     deleteCourse(course.id);
  }}>Delete</Button>
 <Button color="primary" className='margin2'>Update</Button>
  </Container>
    
  </CardBody>
  </Card>
    );
};
export default Course;