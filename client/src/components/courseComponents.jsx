import { Component } from "react"
import { Link, } from "react-router-dom"
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { Loading } from "./Loading"

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
    constructor(props){
        super(props)
        this.state={
        }
    }
    
    render(){
        console.log(this.props.Loading_courses)
        if(this.props.Loading_courses){
           return(
               <div className="">
                    <Loading />
               </div>
           )
        }
        else if(this.props.errmsg){
            return(
                <div className="text-center">
                     <h2> {this.props.errmsg} </h2>
                </div>
            )
        }
        else if(this.props.courses!=null){
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
        
                        <div className="col-10 col-sm-6 col-md-4 col-lg-3 addcard">
                            <AddCourse add_courses={this.props.add_courses} />
                        </div>
        
                </div>
                )
        }
        else{
            return(
                <div className="">null </div>
            )
        }
       
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



class AddCourse extends Component{

    constructor(props){
       super()
       this.state={
         selectedfile:null,
         name:'',
         email:'',
         subject:'',
         description:'',
         modelopen:false
   
       }
       this.handleChange=this.handleChange.bind(this);
       this.handleChangeinput=this.handleChangeinput.bind(this);
     }
   
     handleChange(event){
       this.setState({
         selectedfile:event.target.files[0]
       })
       console.log(this.state.selectedfile);
     }
   
     handleChangeinput(event){
       let target=event.target;
       let name=target.name;
       let value=target.type ==="checkbox" ? target.checked :target.value  ;
   
       this.setState({
         [name]:value
       })
   /*     const formdata=new FormData();
       formdata.append('inputfield',this.state)
   
     //   fetch('http://localhost:3001/courses',{
      // method:'POST',
     //  body:formdata
     //})
       axios.post("api/uploadfile", formdata); 
       console.log(formdata) */
     }

     handletoggle=()=>{
        this.setState({
            modelopen:!this.state.modelopen
        })
    }
   
     handleSubmit=(event)=>{
        event.preventDefault();
        this.handletoggle();
        this.props.add_courses(this.state.name,this.state.email,this.state.subject,this.state.description);
       
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
         <div className=" mt-5">
             <button onClick={this.handletoggle} className="btn col-12" > 
                <div className="">
                <h3> Add Course</h3>
                    <p>+</p>
                </div>
            </button>
            <Modal isOpen={this.state.modelopen} toggle={ this.handletoggle}>
                <ModalHeader toggle={this.handletoggle}>
                    Enter infos
                </ModalHeader>
                <ModalBody>
                    <form className="form" action="/courses" encType="multipart/form-data" onSubmit={(values)=>this.handleSubmit(values)} >
                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="name">Name:</label>
                            <div className="col-sm-10 col-md-6">
                            <input type="text" className="form-control" placeholder="name of course" name="name" id="name" value={this.state.name} onChange={this.handleChangeinput}  />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="name">Email:</label>
                            <div className="col-sm-10 col-md-8">
                            <input type="email" className="form-control" placeholder="example@email.com" name="email" id="email" value={this.state.email}  onChange={this.handleChangeinput} />
                            </div>
                        </div>
                        <div className="form-group sub">
                            <label className="control-label col-sm-2" htmlFor="name">Subject:</label>
                            <div className="col-sm-10  col-md-6">
                            <input type="text" className="form-control" placeholder="name of course" name="subject" id="subject" value={this.state.subject} onChange={this.handleChangeinput}   />
                            </div>
                
                        </div>
                        <div className="form-group">
                            <label className="control-label col-12" htmlFor="description">Description:</label>
                            <div className="col-sm-10 ">
                            <textarea rows="4" className="form-control" placeholder="description" name="description" id="description"  value={this.state.description} onChange={this.handleChangeinput}   />
                            </div>
                        </div>
            
                        <div className="form-group card m-3 p-2">
                            <label className="control-label col-sm-12" htmlFor="name">Choose a file</label>
                            <div className="col-sm-10">
                            <input type="file" name="videoname" className="col-12 btn btn-warning" onChange={this.handleChange} />
                            </div>
                        </div>
                    
                        <button  type="submit" className=" btn btn-success ">Submit</button>
                        </form>
                </ModalBody>
            </Modal>
         </div>
       );
    }
}

  

export default Courses;