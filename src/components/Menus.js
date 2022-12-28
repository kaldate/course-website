import React from "react"
import {ListGroup,ListGroupItem} from "reactstrap"
import {Link } from "react-router-dom";
const Menus=()=>{
    return(
         <div className="list">
        <ListGroup  horizontal className="col" >
        <Link className="list-group-item list-group-item-action bg-dark text-white text-center"  action   to="/" tag="a">Home</Link>
        <Link className="list-group-item list-group-item-action bg-dark text-white text-center"  action   to="/add-course" tag="a">Add Course</Link>
        <Link className="list-group-item list-group-item-action bg-dark text-white text-center"  action   to="/view-courses" tag="a">View Courses</Link>
        <Link className="list-group-item list-group-item-action  bg-dark text-white text-center"  action   to="/about" tag="a">About</Link>
        <Link className="list-group-item list-group-item-action bg-dark text-white text-center"  action   to="/service" tag="a">Sevices</Link>
        <Link className="list-group-item list-group-item-action bg-dark text-white text-center"  action   to="/contact" tag="a">Contact Us</Link>
        </ListGroup>
        </div>
    )
}

export default Menus;