
import {COURSES} from '../shared/courses'
import {COMMENTS} from '../shared/comments'


export const initialState={
    red_courses:COURSES,
    red_comments:COMMENTS
}

export const Reducer=(state=initialState,action)=>{
    return state;
}