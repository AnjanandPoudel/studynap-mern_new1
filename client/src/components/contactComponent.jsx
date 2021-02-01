import { Link, Router } from "react-router-dom"
import {Form} from 'reactstrap'


function Forms(){
    return(
       <div className="">
           <Form action="uploadfeedback">
               <div className="form-group">
                   <label htmlFor="">Name:</label>
                    <input type="text" className="form-control"/>
                    <button>Submit</button>
               </div>
           </Form>
       </div>
    )
}
    



function Contact(){    
    return(
        <div className="">
            <div className="container-fluid pt-5 bg-course">
                <div className="row">
                    <div className="bg-course col-12 ">
                        <div className="m-3 cards  d-flex flex-wrap">
                        <Forms />
    
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Contact;