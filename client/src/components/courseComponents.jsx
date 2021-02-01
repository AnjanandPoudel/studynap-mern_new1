import { Component } from "react"
import { Link, Router } from "react-router-dom"





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
            selectedCourse:null
        }
        this.onCourseClick=this.onCourseClick.bind(this);
        this.renderOne=this.renderOne.bind(this);

        
    }
    

    onCourseClick(item){
        this.setState({selectedCourse:item})
    }

    renderOne(item){
        if (item!=null){
            return(
                <div className="m-3 cards  d-flex flex-wrap">
                <div className="cardsInCourse">
                    <RenderCourse course={item} />
                </div>
               </div>
            )
        }
        else{
            return(
                <div className=""></div>
            )
        }
    }
    
    
    render(){
        console.log(this.props.courses)
       let  menu=this.props.courses.map(course=>{
        return(
          <div onClick={()=>this.onCourseClick(course)} className=" cardsInCourse" key={course.id}>
              <RenderCourse course={course} />
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
                            <div className="">
                                {this.renderOne(this.state.selectedCourse)}
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
    return(
        <div  className="card m-1 cardCourse">
            <div className="homeimagediv">
                <img controls controlsList="nodownload" className="homeimage" id="videoPlayer" src={props.course.image} alt="pic"/>
            </div>
            <div className="cardContents d-flex justify-content-between">
                <i className="fa fa-like"><span className="smalltext">33 </span> <span className="smalltext">Likes</span> $ </i> 
                <i className="fa fa-star yellow">*****</i>
                
            </div>
            <div className="p-2">
                <bold className="m-0 bold">{props.course.name}</bold>
                <p className="smalltext"> {props.course.description} </p>
            </div>
        </div>
    )
}
    

export default Courses;