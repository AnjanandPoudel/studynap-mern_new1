import { Component } from "react"
import { Link, NavLink, Router } from "react-router-dom"
import CourseDetail from "./courseDetailComponent";





/* {
    id: 0,
    name:'Math Course',
    image: '/assets/back.jpg',
    subject:'Maths',
    grade:'10',
    category: 'Science',
    label:'Hot',
    price:'4.99',
    featured: true,
    description:'This is course hosted by mr. Anjan Poudel. He is teaching maths in this course'                    
},
 */





class Courses extends Component{  
    
    constructor(){
        super()
        this.state={
        }
       
    }
    

    
    render(){
        console.log(this.props.courses)
       let  menu=this.props.courses.map(course=>{
        return(
          <div    /*  onClick={()=>this.props.onClick(course.id)} */   className=" cardsInCourse" key={course.id}>
              <Link to={`/courses/${course.id}`} >
                <RenderCourse course={course}  />
              </Link>
          </div>
        )
     })

        return(
            <div className="">

                <div className="container-fluid pt-5 bg-course">
                    <div className="row">
                        <div className="bg-course col-12 ">
                            <div className="m-3 cards  d-flex flex-wrap">
                                {menu}
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="col-3 addcard">
                    <a href="/addCourse"> 
                        <div className="">
                        <h3> Add Course</h3>
                            <p>+</p>
                        </div>
                    </a>

                </div>

            </div>
        )
    }
    
}




function RenderCourse(props){
    if(props.course){
        return(
            <div  className="card m-1 cardCourse">
                <div className="homeimagediv">
                    <img controls controlsList="nodownload" className="homeimage" id="videoPlayer" src={props.course.image} alt="pic"/>
                </div>
                <div className="cardContents d-flex justify-content-between">
                 <span className="smalltext">33 <i className="fa fa-thumbs-up  "></i> </span>
                   <span className="stars">5   <i className="fa fa-star yellow"></i> </span>
                    
                </div>
                <div className="p-2">
                    <p className="m-0 bold">{props.course.name}</p>
                    <p className="smalltext"> {props.course.description} </p>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="">no course detail</div>
        )
    }
}



  

export default Courses;