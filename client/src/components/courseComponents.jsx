import { Component } from "react"
import { Link, } from "react-router-dom"
import { Modal, ModalBody, ModalHeader,UncontrolledDropdown,DropdownMenu,DropdownItem,DropdownToggle } from 'reactstrap'
import { baseurl, dataurl } from "../redux/baseURL"
import { Loading } from "./Loading"
import axios from 'axios'

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
            editToogle:false
        }
    }


  

    
   
    
    render(){
     

        
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
                    <div className=" d-flex flex-wrap">
                    <div className="card col -3 failed_to_fetch">
                            failed to fetch
                        </div>
                        <div className="card card col -3 failed_to_fetch">
                            failed to fetch
                        </div>
                        <div className="card card col -3 failed_to_fetch">
                            failed to fetch
                        </div>
                    </div> 
                    <div className="col-10 col-sm-6 col-md-4 col-lg-3 addcard">
                            <AddCourse add_courses={this.props.add_courses} />
                        </div>
                </div>
            )
        }
        else if(this.props.courses){
            let  menu=this.props.courses.map(course=>{
                return(
                  <div    /*  onClick={()=>this.props.onClick(course.id)} */   className="cardsInCourse" key={course._id}>
                        <RenderCourse course={course}/>
                  </div>
                )
             })
                return(
                    <div className="">
                        <div className="container-fluid bg-course">
                            <div className="row">
                                <div className="bg-course col-12 ">
                                    <div className="">
                                        <SearchComponent />
                                    </div>
                                    <div className="d-flex flex-wrap">
                                        <div className="cards d-flex flex-wrap col-9">
                                            {menu}
                                        </div>
                                        <div className="popular-posts col-md-3">
                                            <h5>POPULAR POSTS:</h5>
                                            <div className="">
                                                <img src="images/q.jpg" alt=""/>
                                                <div className="popularimagebelow">
                                                    <span className="d-flex">
                                                        <i className="fa fa-like"></i>
                                                        <i className="fa fa-like"></i>



                                                    </span>
                                                </div>
                                            </div>
                                            <p className="abel">
                                                This is something that i dearmed of :
                                                <br/>
                                                <span className="smalltext">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, porro?
                                                </span>
                                            </p>
                                        </div>
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

class SearchComponent extends Component {
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(
            <div className="search-box">
                <input type="text"  placeholder="Search by id/name" name="Search" />
                <button className="btn button" type="submit">Search</button>
            </div>
        )
    }
}


class RenderCourse extends Component {
    render(){
        if(this.props.course){
            console.log(this.props.course);
            return(
                <div  className=" m-1 cardCourse">
                    <div className="homeimagediv">
                        <div className="d-flex justify-content-between">
                            <div className="">
                                
                            </div>  
                        </div>
                        <Link to={`/courses/${this.props.course._id}`} >
                            <img  controlsList="nodownload" className="homeimage"  src={baseurl+this.props.course.image} alt="pic"/>
                        </Link>
                       
                    </div>
    
                    
                    <div className="cardContents d-flex justify-content-between">
                    <p className="ml-1 bold">{this.props.course.name?this.props.course.name:'lore kjndfkja kj afkj afkj akjf  Ap'}</p>      
                    <br/>
                     <span className="smalltext abel">{this.props.course.Likes} <i className="fa fa-eye  "></i> </span>
                       <span className="stars smalltext">{this.props.course.Rate} <i className="fa fa-star yellow"></i> </span>
                       <span className=" smalltext">Grade: {this.props.course.grade}  </span>
    
                        
                    </div>
                    <div className="p-2 cardContents d-flex justify-content-between">
                       <div className="">
                        <p className="smalltext"> {this.props.course.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, nihil. </p>
                        <div className="d-flex justify-content-between">
                            <p className=" smalltext "> Subject:{this.props.course.subject}</p>
                          
                            
                        </div>
                       </div>
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
}



class AddCourse extends Component{

    constructor(props){
       super()
       this.state={
         selectedfile:'',
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
     }
   
     handleChangeinput(event){
       let target=event.target;
       let name=target.name;
       let value=target.type ==="checkbox" ? target.checked :target.value  ;
       this.setState({
         [name]:value
       })
  
     }

     handletoggle=()=>{
        this.setState({
            modelopen:!this.state.modelopen
        })
    }


    handleSubmitRedux = (event) => {
        event.preventDefault();
        console.log(this.state.selectedfile)
        this.handletoggle();
        let filename=this.state.selectedfile.name;
        let createdat=new Date().toISOString();
        filename=createdat+'___'+filename
        console.log(filename)
        this.props.add_courses(this.state.name,this.state.email,this.state.subject,this.state.description,this.state.selectedfile);
        
    }


    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.selectedfile)
        this.handletoggle();
       /*  let filename=this.state.selectedfile.name;
        let createdat=new Date().toISOString();
        filename=createdat+'___'+filename
        console.log(filename)
        this.props.add_courses(this.state.name,this.state.email,this.state.subject,this.state.description,filename); */
        
        let formData =new FormData();
        formData.append('selectedfile',this.state.selectedfile);
        formData.append('name',this.state.name);
        formData.append('email',this.state.email);
        formData.append('subject',this.state.subject);
        formData.append('description',this.state.description);
        this.props.add_courses(formData);

       /*  let bearer='bearer '+localStorage.getItem('token') 

        return axios({
            method: 'post',
            url:baseurl+ 'upload',
            data:formData,
            headers:{
                'Content-Type':'application/json',
                Authorization:bearer
            },
            credentials: 'same-origin'
          })
        .then(res=>{
           return res.data
        })
        .then(
            res=>{
                console.log(res)
                window.location.reload()

            }
        )
        .catch(err=>{
            console.log(err)
        })
         */
    }
  
     
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