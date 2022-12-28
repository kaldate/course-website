
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import { Button, Container,Row,Col } from 'reactstrap';
import Home from './components/Home';
import Course from './components/Course';
import Allcourse from "./components/Allcourses"
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import Footer from './components/Footer';
import Menus from './components/Menus';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import {BrowserRouter,Route,Routes,Navigate} from "react-router-dom";

function App() {
  return (
    <div>
      
     
       <BrowserRouter>
      <ToastContainer/>
    <Container>
      <Header/>
      <Menus/>
      
        <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/add-course' element={<AddCourse/>}/>
    <Route exact path='/view-courses' element={<Allcourse/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
    <Route exact path='/service' element={<Service/>}/>
  
    </Routes>
       
    </Container>
     </BrowserRouter>
     <Footer/>
     </div>
    
  );
}

export default App;
