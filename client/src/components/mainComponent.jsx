import React,{Component} from 'react'
import Header from './headerComponent'
import Home from './homeComponent';
import Courses from './courseComponents';
import Footer from './footerComponent'
import {Redirect,Route, Switch,withRouter} from 'react-router-dom'
import AddCourse from './addCourseComponent';
import Contact from './contactComponent';
import UserPage from './userpage'

import CourseDetail from './courseDetailComponent';

import {connect} from 'react-redux';
import {postComments,postCourses,fetchCourses,fetchcomments,loginUser,logoutUser,fetchUser } from '../redux/ActionCreators';


const mapStatetoProps= state=>{
  return{
    courses:state.red_courses,
    comments:state.red_comments,
    auth:state.auth,
    users:state.users
  }
}

const mapDispatchtoProps=(dispatchIt)=>({
  props_addComment:(courseId,rating,comment,author)=>{
    dispatchIt(postComments(courseId,rating,comment,author))
  },
  props_addCourses:(formData)=>{
    dispatchIt(postCourses(formData))
  },
  fetchCourses:()=>{dispatchIt(fetchCourses())},
  fetchcomments:()=>{dispatchIt(fetchcomments())},
  fetchUser:()=>{dispatchIt(fetchUser())},
  logoutUser:()=>{dispatchIt(logoutUser())},
  loginUser:(creds)=>{dispatchIt(loginUser(creds))}
})


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
      componentDidMount(){
        this.props.fetchCourses()
        this.props.fetchcomments()
        this.props.fetchUser()
      }
    
      render() {
        console.log(this.props.courses)

        const HomePage=()=>{
          return(
            <Home  courses={this.props.courses.courses}
             Loading_courses={this.props.courses.isLoading}
              errmsg={this.props.courses.errmsg} />
          )
        }

        const ContactComp=()=>{
          return(
            <Contact />

          )
        }
        const AddCourseComp=()=>{
          return(
            <AddCourse  />

          )
        }
        const courseDetailComp=({match})=>{
          console.log(this.props.comments.show_comments)
          console.log("This is where i find most of those things")
          console.log(this.props.comments.show_comments.filter(item=> item.course === match.params.courseId) // comment array 
          )
          return(
            <CourseDetail course={this.props.courses.courses.filter(item=> item._id === match.params.courseId )[0] } // single course
                          comments={this.props.comments.show_comments.filter(item=> item.course === match.params.courseId)} // comment array
                          add_comments={this.props.props_addComment}
                          Loading_courses={this.props.courses.isLoading} 
                          errmsg={this.props.courses.errmsg}
                          loading_comments={this.props.comments.loading_comments} 
                          failed_comments={this.props.comments.failed_comments}
          />
          )
        }

        const courseComp=()=>{
          return(
            <div className="">
             {/*  <CourseDetail course={this.props.courses.filter(item => item.id=== this.state.selectedCourseId )[0] }
                comments={this.props.comments.filter(item=> item.id === this.state.selectedCourseId )[0]}
              /> */}
              <Courses courses={this.props.courses.courses} 
              add_courses={this.props.props_addCourses}
              Loading_courses={this.props.courses.isLoading}
              errmsg={this.props.courses.errmsg}
              /* onClick={(courseId)=>this.onCourseClick(courseId)} */ />
            </div>
          )
        }

        const UserkoPage=()=>{
          console.log(this.props)
          return(
            <div className="">
              
                {this.props.auth.is_auth?
                  <UserPage image="/images/concert.jpg" auth={this.props.auth} likes={'liked videos'} uservideos={''} 
                  userinformation={this.props.users.users.filter(item=>item.username===this.props.auth.userinfo.username)[0]}  />
                  :
                  <UserPage image="/images/q.jpg" auth={this.props.auth} likes={'liked videos'} uservideos={''} userinformation={''}  />
              }
            </div>
          )
        }

        const Users=()=>{
          console.log(this.props)
          return(
            <div className="">
              <UserPage image="/images/q.jpg" auth={this.props.auth} likes={'liked videos'} uservideos={''} userinformation={this.props.users}   />
            </div>
          )
        }

     

        return (
        
          <div className="">
           <Header  loginUser={this.props.loginUser} logoutUser={this.props.logoutUser} auth={this.props.auth} />
          
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path="/courses" component={courseComp} />
              <Route path="/courses/:courseId" component={courseDetailComp} />
              <Route path="/user" component={UserkoPage} />
              <Route path="/users" component={Users} />
              <Route path="/contact" component={ContactComp} />
              <Route path="/addCourse" component={AddCourseComp} />
              <Redirect to="/home" />
            </Switch>

            <Footer />
          </div>
    
        );
      }
}

export default withRouter(connect(mapStatetoProps,mapDispatchtoProps)(Main)) // connecting class Main and mapStatetoProps