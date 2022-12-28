import React,{useState,useEffect} from "react";
import Course from "./Course"
import base_url from "./../api/bootapi";
import axios from "axios";
import { Toast,ToastBody,ToastHeader } from "reactstrap";

const Allcourse=()=>{
   
    useEffect(()=>{
        document.title="view courses";
       getallcoursesfromserver();
        
     },[]);

     const updateCourses=(id)=>{
        setCourses(courses.filter((c)=>c.id!=id));
     }

     const getallcoursesfromserver=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
               // console.log(response);
               console.log(response.data);
               <div className="p-3 bg-warning my-2 rounded">
               <Toast>
               <ToastHeader>
                courses has been loaded
               </ToastHeader>
               <ToastBody>
                 Welcome you can see information about course here!
               </ToastBody>
             </Toast>
             </div>
             setCourses(response.data)
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
     };
    const[courses,setCourses]=useState([
        {title:"Java Course",description:"This is demo course"},
        {title:"django Course",description:"This is demo course"},
        {title:"OOP Course",description:"This is demo course"},
        {title:"Angular Course",description:"This is demo course"}
    ])

    return(
        <div className="add4">
            <h1 className="text-center margin1">All course</h1>
            <h2 className="text-center margin1">List of courses are as follows</h2>
           
    
            {courses.length>0
              ?courses.map((item)=><Course key={item.id} course={item}  update={updateCourses}/>)
              :"No courses" }

        </div>
    );
}
export default Allcourse;