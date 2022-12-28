import React,{Fragment,useEffect,useState} from "react"
import { Button, Container, Form,FormGroup,Label,Input,Card } from "reactstrap"
import axios from 'axios';
import base_url from "./../api/bootapi";
import { Toast,ToastBody,ToastHeader } from "reactstrap";

const AddCourse=()=>{
  useEffect(()=>{
    document.title="Add courses";
 },[]);

 const[course,setCourse]=useState({});

 const handleForm=(e)=>{
     console.log(course);
     e.preventDefault();
     postDataToServer(course);
 }

   const postDataToServer=(data)=>{
       axios.post(`${base_url}/courses`,data).then(
        (response)=>{
           // console.log(response);
           console.log(response.data);
           <div className="p-3 bg-warning my-2 rounded">
           <Toast>
           <ToastHeader>
            courses has been loaded
           </ToastHeader>
           <ToastBody>
             course added succesfully!
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
                    Something Went Wrong 
               </ToastBody>
           </Toast>
            </div>
           // toast.error("something went wrong");
        }
    );
   }

    return(
        <div>
      <Fragment>
        <Card className="add">
        <h2 className="text-center my-3">Fill Course Detail</h2>
      <Form onSubmit={handleForm} className="margin2">
        <FormGroup>
      <Label for="userId">Course Id</Label>
        <Input type="text" 
          name="userId" 
          id="userId"
          onChange={(e)=>{
            setCourse({...course,id:e.target.value});
           }}/>
    </FormGroup>

    <FormGroup>
      <Label for="title">Course Title</Label>
      <Input type="text"
       name="title" 
       id="title"
       className="text"
       onChange={(e)=>{
        setCourse({...course,title:e.target.value});
       }} />
    </FormGroup>

    <FormGroup>
      <Label for="description">Course Description</Label>
      <Input type="textarea"
         id="description" 
         style={{height:150,width:500}} 
         onChange={(e)=>{
          setCourse({...course,description:e.target.value});
         }}/>
    </FormGroup>
    <Container className="text-center ">
        <Button className="margin1" type="submit" color="warning">Add Course</Button>
        {''} 
         <Button className="margin2" type="reset" color="warning">clear</Button>
    </Container>
      </Form>
      </Card>
      </Fragment>
        </div>

    )
}
export default AddCourse;