import {Button, Form, Input,Row,Col,Label} from 'reactstrap'
import React, { Component } from 'react';
import { Loading } from './Loading';
import { baseurl } from '../redux/baseURL';
import { Control, LocalForm } from 'react-redux-form';






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
                <Comment course={this.props.course} comments={this.props.comments} add_comments={this.props.add_comments}  failed_comments={this.props.failed_comments} Loading_comments={this.props.Loading_courses} />
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
            <div  className="card m-1 cardVideo col-sm-12 col-md-6 col-lg-5">
                <div className="homevideodiv">
                    <video controls controlsList="nodownload" className="homevideo" id="videoPlayer" src={baseurl+props.course.video} alt="pic"/>
                </div>
                <div className="cardContents mt-1 d-flex justify-content-between">
                <span className="smalltext">{props.course.Likes} <i onClick={()=>props.onClick()}  className="fa fa-thumbs-up blue " id="likeCourse"></i> </span>
                    <span className="stars">Rating: {props.course.Rate}<i className="fa fa-star yellow starCourse"></i> </span>
                    <p className="smalltext bold">Grade : {props.course.grade?props.course.grade:'grade'} </p>

                    
                </div>
                <div className="p-1">
                    <p className="m-0 bold">{props.course.videotitle}</p>
                    <p className="m-0 bold">Author: {props.course.author.username}</p>
                    <p className="smalltext"> {/* <h6>Description</h6> */}{props.course.description} </p>
                    
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
            item.createdAt=item.updatedAt.toString()
            

            function formatDate(string){
                var options = { year: 'numeric', month: 'long', day: 'numeric' };
                return new Date(string).toLocaleDateString([],options);
            }
             
            item.createdAt= formatDate(item.createdAt);
            let presentDate
            

            return(
                <div className="" key={item._id}>
                    <div className="p-0 mycard "> 
                        <div className="d-flex justify-content-between flex-wrap m-1">
                            <span className="smalltext bold" > {item.author.username}</span> 
                            <span className="smalltext"> {item.rating} <i className="fa fa-star yellow"></i> </span> <br/>
                            <span className="smalltext m-0 ">{item.createdAt}</span> 

                        </div>
                        <div className="">
                            <span className="  pl-5 m-1 smalltext ">  {item.comment} </span> <br/>
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
                <p className="smalltext">Don't write comment while watching video. We will fix this problem soon .</p>
                <h4>Comments : </h4>
                {commentarr}
                
                <CommentForm  author={props.author} add_comments={props.add_comments} course={props.course._id} />
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
            author:props.author,
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
        this.props.add_comments(this.props.course,this.state.rate,this.state.comment,this.state.author);
    }
    render(){
        return(
            <div className="comment-form">
                <LocalForm  onSubmit={(values)=> {this.handleClick(values) }} className="form m-1">
                    <div className="form-group">
                    <Control.Textarea className="form-control" type="textarea" row={4} placeholder="Add Comments here" model=".comment"  name="comment" value={this.state.comment} onChange={this.handleChange} required/>
                    <Control.Input type="number" name="rate" id="rate" onChange={this.handleChange} max="10"  model=".rate" placeholder="Rate from 1 to 5 stars"  value={this.state.rate} required/>

                    <Button type="submit" className="btn btn-secondary">  Submit</Button>
                    </div>

                </LocalForm>
{/* 
                <LocalForm onSubmit={(values) => this.handleClick(values)}>
                    <Row className="form-group">
                        <Col>
                        <Label htmlFor="rating">Rating</Label>
                        <Control.select model=".Rate" name="Rate" id="rating" className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Control.select>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col>
                        <Label htmlFor="comment">Comment</Label>
                        <Control.textarea model=".comment" id="comment" name="comment"
                                    rows="6" className="form-control" />
                        </Col>
                    </Row>
                    <Button type="submit" className="bg-primary">
                        Submit
                    </Button>
                </LocalForm> */}

            </div>
        )
    }
} 
export default CourseDetail;