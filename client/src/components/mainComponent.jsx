import React,{Component} from 'react'
import Header from './headerComponent'
import Home from './homeComponent';
import Courses from './courseComponents';
import Footer from './footerComponent'
import {Redirect,Route, Switch} from 'react-router-dom'
import AddCourse from './addCourseComponent';
import Contact from './contactComponent';




import {COURSES} from '../shared/courses'
import {COMMENTS} from '../shared/comments'
import CourseDetail from './courseDetailComponent';



class Main extends Component{
    constructor(props) {
        super(props);
        this.state={
          courses:COURSES,
          selectedCourseId:null,
          comments:COMMENTS
        }
      
      }

      
    onCourseClick(itemId){
      this.setState({selectedCourseId:itemId})
  }

    
      render() {
        console.log(this.state.courses)

        const HomePage=()=>{
          return(
            <Home  courses={this.state.courses} />
          )
        }

        const ContactComp=()=>{
          return(
            <Contact />

          )
        }
        const AddCourseComp=()=>{
          return(
            <AddCourse />

          )
        }
        const courseDetailComp=({match})=>{
          return(
            <CourseDetail course={this.state.courses.filter(item => item.id=== parseInt(match.params.courseId,10) )[0] }
            comments={this.state.comments.filter(item=> item.courseId === parseInt(match.params.courseId,10) )}
          />
          )
        }

        const courseComp=()=>{
          return(
            <div className="">
              <CourseDetail course={this.state.courses.filter(item => item.id=== this.state.selectedCourseId )[0] }
                comments={this.state.comments.filter(item=> item.id === this.state.selectedCourseId )[0]}
              />
              <Courses courses={this.state.courses} onClick={(courseId)=>this.onCourseClick(courseId)} />

            </div>

          )
        }



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
          
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path="/courses" component={courseComp} />
              <Route path="/courses/:courseId" component={courseDetailComp} />
              <Route path="/contact" component={ContactComp} />
              <Route path="/addCourse" component={AddCourseComp} />
              <Redirect to="/home" />
            </Switch>

            <Footer />
          </div>
    
        );
      }
}

export default Main