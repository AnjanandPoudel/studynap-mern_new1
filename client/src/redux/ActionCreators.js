import * as ActionType from './ActionTypes';
import { COURSES } from "../shared/courses";

export const add_comment=( c,r,comment,author )=>({
    type:ActionType.ADD_COMMENT,
    payload:{
        courseId:c,
        rating:r,
        comment:comment,
        author:author
    }
    // now send it to store
})

export const add_course=(name,email,subject,descp)=>({
    type:ActionType.ADD_COURSES,
    payload:{
        name:name,
        email:email,
        subject:subject,
        description:descp,
    }
})

export const fetchCourses=()=>(dispatch)=>{
    dispatch(loading_courses());
    
    setTimeout(()=>{
        dispatch(show_courses(COURSES));
    },1000);
}

export const loading_courses=(courses)=>({
    type:ActionType.LOADING_COURSES,
    payload:courses
})
export const failed_courses=(courses)=>({
    type:ActionType.FAILED_COURSES,
    payload:courses
})
export const show_courses=(courses)=>({
    type:ActionType.SHOW_COURSES,
    payload:courses
})










