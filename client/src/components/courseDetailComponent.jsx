import {Button, Form, Input} from 'reactstrap'
import React, { Component } from 'react';
import { add_comments } from '../redux/ActionCreators';
import { Loading } from './Loading';
import { baseurl } from '../redux/baseURL';





class CourseDetail extends Component{

    constructor(props){
        super(props)
        this.state={
            onecourse:props.course, // this should be changed just an eg;
            likes:false,
            likeIncreased:'',
           

        }
        this.likehandleClick=this.likehandleClick.bind(this)
    }

    likehandleClick(){
        if(this.state.onecourse){
            this.setState({
                likes:!this.state.likes
            })
            if(!this.state.likes){
                this.setState( (prevState)=>( {
                    onecourse:{...prevState.onecourse , id:this.props.course.id , grade:parseInt(this.state.onecourse.grade,10)+1  }
                }))
            }
            else{
                this.setState( (prevState)=>( {
                    onecourse:{...prevState.onecourse , id:this.props.course.id , grade:parseInt(this.state.onecourse.grade,10)-1  }
                }))
            }
            console.log(this.state.onecourse)
        }
        else{
            console.log('no')
        }
    }
   
    render(){
        console.log(this.props)

        if(true){
            return(
            <div className="d-flex flex-wrap m-1">
                {/* props is supplied from main */}
                <CoursekoDetail course={this.state.onecourse} onClick={this.likehandleClick} errmsg={this.props.errmsg} Loading_courses={this.props.Loading_courses}  />
                <Comment course={this.props.course} comments={this.props.comments} add_comments={this.props.add_comments} author="anjan" failed_comments={this.props.failed_comments} Loading_comments={this.props.Loading_courses} />
            </div>
            )
        }

        
        
    }
}


function CoursekoDetail(props){
    if(props.Loading_courses){
        return(
            <div className="m-5 col-5 p-5">
                <Loading />
            </div>
        )
    }
    else if(props.errmsg){
        return(
            <div className=" container m-5">
                {props.errmsg}
                <div className=" d-flex flex-wrap">
                        <div className="card col -3 failed_to_fetch" width="40">
                            failed to fetch
                        </div>
                        <div className="card card col -3 failed_to_fetch">
                            failed to fetch
                        </div>
                    </div> 
            </div>
        )
    }

    
/* 
    Likes: 78
Rate: 3
author: "Author"
description: "This section contains description "
email: "Author@gmail.com"
image: "images/p.png"
videotitle: "Anjan"
*/
    
    else if(props.course){
        console.log(props.course)

        return(
            <div  className="card m-1 cardCourse col-sm-12 col-md-6 col-lg-4">
                <div className="homeimagediv">
                    <img controls controlsList="nodownload" className="homeimage" id="videoPlayer" src={baseurl+ props.course.image} alt="pic"/>
                </div>
                <div className="cardContents d-flex justify-content-between">
                <span className="smalltext">{props.course.Likes} <i onClick={()=>props.onClick()}  className="fa fa-thumbs-up blue boxy" id="likeCourse"></i> </span>
                    <span className="stars boxy">{props.course.Rate}   <i className="fa fa-star yellow starCourse"></i> </span>
                    
                </div>
                <div className="p-2">
                    <p className="m-0 bold">{props.course.videotitle}</p>
                    <p className="m-0 ">Author: {props.course.author}</p>

                    <p className="smalltext"> {props.course.description} </p>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className=" container m-5">
            <div className=" d-flex flex-wrap">
                    <div className="card col -3 failed_to_fetch" width="40">
                        Sorry 
                        <h2>This is anjan poudel from headquater, i can't find the error/Course</h2>
                    </div>
                    <div className="card card col -3 failed_to_fetch">
                        Sorry
                        <h2>This is anjan poudel from headquater, i can't find the error/Course</h2>
                    </div>
                </div> 
        </div>
        )
    }
}


function Comment(props){
    console.log(props)

    if(props.Loading_comments){
        return(
            <div className="text center p-5 col-5 m-5">
                <Loading />
            </div>
        )
    }
    else if(props.failed_comments){
        return(
            <div className="text-center">
                <h2>{props.failed_comments}</h2>
            </div>
        )
    }


    else if(props.comments){
        let commentarr=props.comments.map(item=>{
            return(
                <div className="" key={item.id}>
                    <div className="p-1 card">
                        <div className="d-flex justify-content-between flex-wrap m-2">
                            <span className="smalltext bold" > {item.author}</span> 
                            <span className="smalltext"> {item.rate} <i className="fa fa-star yellow"></i> </span> <br/>
                            <span className="smalltext m-0 ">{item.date.split("T")[0]}</span> 
                        </div>
                        <div className="">
                            <br/>
                            <span className="medtext p-3 "> - {item.comment} </span> <br/>
                        </div>
                        </div>
                </div>
            )
        })
        if(!props.course){
            return(
                <div className="">
                    NO course id
                </div>
            )
        }
        return(
            <div  className=" col-sm-12 col-md-6 col-lg-6">
                <h4>Comments : </h4>
                {commentarr}
                
                <CommentForm  author={props.author} add_comments={props.add_comments} courseId={props.course.id} />
            </div>
        )
    }
    else{
        return(
            <div className="">khali comment</div>
        )
    }
}

class CommentForm extends Component{
    constructor(props){
        super()
        this.state={
            comment:'',
            author:props.author,
            rate:''
        }
    }
    handleChange=(event)=>{
        const target=event.target;
        const name=target.name;
        const value=target.type === "checkbox" ? target.checkbox : target.value;
        this.setState({
            [name]:value
        })
    }
    handleClick=(event)=>{
        event.preventDefault();
        this.props.add_comments(this.props.courseId,this.state.rate,this.state.comment,this.state.author);
    }
    render(){
        return(
            <div className="comment-form">
                <Form action="" onSubmit={(values)=> {this.handleClick(values) }} className="form m-1">
                    <div className="form-group">
                    <Input className="form-control" type="textarea" row={4} placeholder="Add Comments here"  name="comment" value={this.state.comment} onChange={this.handleChange}  />
                    <Input type="number" name="rate" id="rate" onChange={this.handleChange} max="10"  placeholder="Rate from 1 to 10 stars"  value={this.state.rate}   />

                    <Button type="submit" className="btn btn-secondary">  Submit</Button>
                    </div>
                </Form>
            </div>
        )
    }
} 
export default CourseDetail;