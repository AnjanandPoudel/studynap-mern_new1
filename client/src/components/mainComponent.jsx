import React,{Component} from 'react'
import axios from "axios";
import Header from './headerComponent'
import Home from './homeComponent';
import Courses from './courseComponents';
import Index from '.';
import Footer from './footerComponent'
import {BrowserRouter as Router,Redirect,Route, Switch} from 'react-router-dom'
import AddCourse from './addCourseComponent';
import Contact from './contactComponent';




import {COURSES} from '../shared/courses'
import CourseDetail from './courseDetailComponent';



class Main extends Component{
    constructor(props) {
        super(props);
        this.state={
          courses:COURSES
        }
      
      }
    
      render() {
        console.log(this.state.courses)
        return (
         /*  <form onSubmit={this.handleSubmit}>
            <label>
              Name of the king:
              <input type="text" placeholder="type in small letters" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form> */
          <div className="">
           <Header />
          
            <Router>
            <Switch>
              <Route path="/home">
                <Home  courses={this.state.courses} />
              </Route>

              <Route path="/courses">
                <Courses courses={this.state.courses} />
              </Route>

              <Route path="/coursedetail">
                <CourseDetail />
              </Route>

              <Route path="/contact">
                <Contact />
              </Route>


              <Route path="/addCourse">
                 <AddCourse />
              </Route>
              <Redirect to="/home" />
            </Switch>
            </Router>
            <Footer />
          </div>
    
        );
      }
}

export default Main