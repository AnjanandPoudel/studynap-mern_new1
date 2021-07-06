/* 

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

  
  render(){


    return (
      <div className="App">
        <Header />
        <form action="/courses" encType="multipart/form-data" onSubmit={this.handleSubmit} >

        <input type="file" name="videoname" onChange={this.handleChange} />
        <button  type="submit" >Submit</button>
        </form>
        
      </div>
    );
  } */

import { baseurl } from "../redux/baseURL"
import { Loading } from "./Loading"


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
    </div> */


function Videocard(props){
  console.log(props.item)
  return(
  

         <div  className="card m-1 cardCourse">
                <div className="homeimagediv">
                    <img  controlsList="nodownload" className="homeimage"  src={baseurl+props.item.image} alt="pic"/>
                </div>
                <div className="cardContents d-flex justify-content-between">
                 <span className="smalltext">{props.item.Likes} <i className="fa fa-thumbs-up  "></i> </span>
                   <span className="stars smalltext">{props.item.Rate} <i className="fa fa-star yellow"></i> </span>
                   <span className="stars smalltext">Grade: {props.item.grade}  </span>

                    
                </div>
                <div className="p-2 cardContents ">
                   <div className="">
                   <p className="m-0 bold">{props.item.name}</p>
                   <p className="m-0 smalltext ">Author: {props.item.author.username}</p>
                   <p className="m-0 smalltext">Subject: {props.item.subject}</p>

                   </div>
                  
                </div>
            </div>

  
  )
}

function Home(props){
  return(
    <div className="">

<div className="container-fluid pt-5 bg-course">
    <div className="m-3 moto">
        <h4 className="abel">A small step to achieve a great feat.</h4>
        <p className="">  My day started little late today about half past 6. It was raining when I woke up, I washed 
my face and came to my room.   </p>
             </div>
    <div className="row">
        <div className="bg-course col-9 ">
          <h5 className="bold mt-5 m-2">Course Packages:</h5>
          <hr className="light"/>
            <RenderHomeCourse Loading_courses={props.Loading_courses} errmsg={props.errmsg} courses={props.courses} />
        </div>
        <div className="sidebar p-3 col-3 ">
       Then after mom came to the shop I started doing little exercises , did pushups then plank , increasing it by 10 secs.
Then I made my room . 
<br />   
<br />
<span>Then I played the cats game in my mobile for some time. Then after that I went to the shop for looking after and selling 
things as Dad went to the office .</span> 

  </div>
<p></p>
    </div>
</div> 
    </div>
)}

function RenderHomeCourse(props){
  console.log(props)
  if(props.Loading_courses){
    return(
      <div className="">
        <Loading />
      </div>
    )
  }
  else if(props.errmsg){
    return(
      <div className="text-center">
        <h2>{props.errmsg} </h2>
          <div className=" d-flex flex-wrap">
                  <div className="card col -3 failed_to_fetch" width="40">
                      failed to fetch 
                      <p>The error is ::  {props.errmsg}</p>
                  </div>
                  <div className="card card col -3 failed_to_fetch">
                      failed to fetch
                  </div>
              </div> 
      </div>
    )
  }
  else if(props.courses){
    console.log(props.courses)
    let course=props.courses.map(item=>{
      return(
        <div key={item._id} className="cardbox" >
          <Videocard item={item} />
        </div>
      )
    })
  return(
    <div className="cards d-flex flex-wrap">
      {course}
    </div>
    ) 
  }

  else{
    return(
      <div className="">home error</div>
    )
  }
}
export default Home