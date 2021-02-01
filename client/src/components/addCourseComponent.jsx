import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import Header from './headerComponent';

class AddCourse extends Component{

 constructor(){
    super()
    this.state={
      selected:null
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }


  handleChange(event){
    this.setState({
      selected:event.target.files[0]
    })
    console.log(this.state.selected);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.selected);
    console.log(this.state)

    const formdata=new FormData();
    formdata.append('inputfield',this.state)

  //   fetch('http://localhost:3001/courses',{
   // method:'POST',
  //  body:formdata
  //})
  
 

    axios.post("api/uploadfile", formdata); 

    console.log(formdata)

    

  }
/* 
  id: 1,
  name:'Science Course',
  image: '/assets/images.jpeg',
  subject:'Science',
  grade:'10',
  category: 'Science',
  label:'Hot',
  price:'4.99',
  featured: true,
  description:'This is course hosted by mr. Anjan Poudel. He is teaching maths in this course'  ,
  likes:34,
  rating:5 
 */
  
  render(){
 

    return (
      <div className="App container mt-5">
        <form className="form" action="/courses" encType="multipart/form-data" onSubmit={this.handleSubmit} >
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="name">Name:</label>
              <div className="col-sm-10 col-md-5">
                <input type="text" className="form-control" placeholder="name of course" name="name" id="name"  />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="name">Email:</label>
              <div className="col-sm-10 col-md-5">
                <input type="email" className="form-control" placeholder="example@email.com" name="email" id="email"  />
              </div>
            </div>
            <div className="form-group sub">
              <label className="control-label col-sm-2" htmlFor="name">Subject:</label>
              <div className="col-sm-10  col-md-5">
                <input type="text" className="form-control" placeholder="name of course" name="name" id="name"  />
              </div>
  
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="description">Description:</label>
              <div className="col-sm-10 ">
                <textarea rows="4" className="form-control" placeholder="description" name="description" id="description"  />
              </div>
            </div>
          

{/* 
            <form class="form-inline m-2">
              <div class="form-group m-2">
                <label for="subject">Subject:</label>
                <input type="text" class="form-control" id="subject" placeholder="Enter subject" name="subject"/>
              </div>
              <div class="form-group m-2">
                <label for="grade">Grade:</label>
                <input type="number" class="form-control" id="grade" placeholder="Enter grade" name="grade" />
              </div>
            </form> */}

            <div className="form-group card m-3 p-2">
              <label className="control-label col-sm-2" htmlFor="name">Choose a file</label>
              <div className="col-sm-10">
              <input type="file" name="videoname" className="btn btn-warning" onChange={this.handleChange} />
              </div>
            </div>
      
          <button  type="submit" className=" btn btn-success " >Submit</button>
        </form>
        
      </div>
    );
  }
}

/* 

  <div className="container-fluid pt-5 bg-course">
        <div className="m-3 moto">
            <h4>Lorem, ipsum dolor.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto minus accusantia mollitia maxime quasi reprehenderit obcaecati eum.</p>
        </div>
        <div className="row">
            <div className="bg-course col-9 ">
                <div className="m-3 cards  d-flex flex-wrap">
                <% courses.forEach( courses=>{ %> 
                    <a href=/courses/<%= courses._id%> className="card m-1 cardCourse">
                        <video controls controlsList="nodownload" width="280px" height="280px" id="videoPlayer" src=videos/<%=courses.videoname%>> </video>
                        <div className="cardContents">
                            <i className="fa fa-like"></i>
                            <% for(let i=0; i < courses.stars; i++){%>
                                <i className="fa fa-star yellow"></i>
                            <% } %>
                        </div>
                        <div className="p-2">
                            <h6 className="m-0"><%= courses.videotitle %></h6>
                        <p className="smalltext"> <%= courses.descp %> </p>
                        </div>
                    </a>
                    <% }) %>
    
                </div>
            
            </div>
            <div className="sidebar p-3 col-3 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fugiat libero necessitatibus esse, optio porro velit dicta voluptas sed dolores!
            </div>
        </div>
    </div>
}*/

export default AddCourse