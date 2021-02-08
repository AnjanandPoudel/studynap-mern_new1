import React,{Component} from 'react'
import Header from './headerComponent'
import Home from './homeComponent';
import Courses from './courseComponents';
import Footer from './footerComponent'
import {Redirect,Route, Switch,withRouter} from 'react-router-dom'
import AddCourse from './addCourseComponent';
import Contact from './contactComponent';



import CourseDetail from './courseDetailComponent';

import {connect} from 'react-redux'


const mapStatetoProps= state=>{
  return{
    courses:state.red_courses,
    comments:state.red_comments
  }
}


class Main extends Component{
    constructor(props) {
        super(props);
        this.state={
        }
      
      }

/*       
    onCourseClick(itemId){
      this.setState({selectedCourseId:itemId})
  }
 */
    
      render() {
        console.log(this.props.courses)

        const HomePage=()=>{
          return(
            <Home  courses={this.props.courses} />
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
            <CourseDetail course={this.props.courses.filter(item => item.id=== parseInt(match.params.courseId,10) )[0] }
            comments={this.props.comments.filter(item=> item.courseId === parseInt(match.params.courseId,10) )}
          />
          )
        }

        const courseComp=()=>{
          return(
            <div className="">
             {/*  <CourseDetail course={this.props.courses.filter(item => item.id=== this.state.selectedCourseId )[0] }
                comments={this.props.comments.filter(item=> item.id === this.state.selectedCourseId )[0]}
              /> */}
              <Courses courses={this.props.courses} /* onClick={(courseId)=>this.onCourseClick(courseId)} */ />

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

export default withRouter(connect(mapStatetoProps)(Main)) // connecting class Main and mapStatetoProps