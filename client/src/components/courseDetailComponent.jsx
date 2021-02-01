import {Form} from 'reactstrap'
import React from 'react';


function ShowCourse(){
    return(
       <div className="">
           
       </div>
    )

}




function CourseDetail(props){    
    return(
        <div className="">
            <div className="container-fluid pt-5 bg-course">
                <div className="row">
                    <div className="bg-course col-12 ">
                        <div className="m-3 cards  d-flex flex-wrap">
                        <ShowCourse name={props.name} description={props.description} image={props.image} />
                        

                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default CourseDetail;