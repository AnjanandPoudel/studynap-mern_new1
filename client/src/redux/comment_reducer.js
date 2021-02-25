import { COMMENTS } from "../shared/comments";
import * as ActionType from './ActionTypes';


/* 
You can also write state={red_comments:COMMENTS} but you will have to write only this in createStore ;
    combineReducers{ 
        Courses // exported from the Reducers
    }
 */


 ///Here i will receive an action and act on it (from i guess action creator) with the help of action types

export const Comments=(state=COMMENTS , action)=>{
    switch(action.type){
        case ActionType.ADD_COMMENT:
            var comment=action.payload;
            comment.id=state.length;
            comment.date=new Date().toISOString()
            return state.concat(comment); // since i can't mutate the state directly so here i am using concat to create a new obj and return it
        default:
            return state
    }
}

