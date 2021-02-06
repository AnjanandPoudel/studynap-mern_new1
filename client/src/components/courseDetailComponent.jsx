import {Form} from 'reactstrap'
import React, { Component } from 'react';
import { render } from '@testing-library/react';




class CourseDetail extends Component{

    constructor(props){
        super()
        this.state={
            course:props.course, // this should be changed just an eg;
            likes:false
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        if(this.props.course){
           console.log('yes')
            this.setState({
                likes:!this.state.likes
            })
            console.log(this.state.likes)
        }
        else{
            console.log('no')
        }
    }

    render(){
        console.log(this.props.comments)

        if(this.props.course){
            if(this.state.likes){
                this.props.course.grade =this.props.course.grade+0.5
            }
            else{
                this.props.course.grade= this.props.course.grade-0.5
            }
        }
        console.log(this.props.course)
        return(
            <div className="d-flex flex-wrap m-1">
                <CoursekoDetail course={this.props.course} onClick={this.handleClick}  />
                <Comment className="" comments={this.props.comments} />
            </div>
        )
    }
}


function CoursekoDetail(props){
    
    if(props.course){
        return(
            <div  className="card m-1 cardCourse col-sm-12 col-md-6 col-lg-4">
                <div className="homeimagediv">
                    <img controls controlsList="nodownload" className="homeimage" id="videoPlayer" src={props.course.image} alt="pic"/>
                </div>
                <div className="cardContents d-flex justify-content-between">
                <span className="smalltext">{props.course.grade+1} <i onClick={()=>props.onClick()}  className="fa fa-thumbs-up blue boxy" id="likeCourse"></i> </span>
                    <span className="stars boxy">{props.course.price}   <i className="fa fa-star yellow starCourse"></i> </span>
                    
                </div>
                <div className="p-2">
                    <p className="m-0 bold">{props.course.name}</p>
                    <p className="smalltext"> {props.course.description} </p>
                </div>
            </div>
        )
    }
    else if (!props.course){
        return(
            <div className="">no course detail</div>
        )
    }

   
}


function Comment(props){
    console.log(props.comments)
    if(props.comments){
        let commentarr=props.comments.map(item=>{
            return(
                <div className="" key={item.id}>
                    <div className="p-1 card">
                   <div className="d-flex justify-content-between flex-wrap m-2">
                        <span className="smalltext bold" > {item.author}</span> 
                        <span className="smalltext"> {item.rating} <i className="fa fa-star yellow"></i> </span> <br/>
                        <span className="smalltext m-0 ">{item.date}</span> 

                   </div>
                   <div className="">
                       <br/>
                        <span className="medtext p-3 "> - {item.comment} </span> <br/>

                   </div>
                    
                </div>
                </div>
            )
        })
        return(
            <div  className=" col-sm-12 col-md-4 col-lg-4">
                <h4>Comments </h4>
                {commentarr}
            </div>
        )
    }
    else{
        return(
            <div className=""></div>
        )
    }
}
  
export default CourseDetail;