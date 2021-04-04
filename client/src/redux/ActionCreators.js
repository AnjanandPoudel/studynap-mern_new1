import * as ActionType from './ActionTypes';
import { baseurl } from './baseURL';
import axios from 'axios';

export const add_comment=(comment )=>({
    type:ActionType.ADD_COMMENT,
    payload:comment
    // now send it to store via Comments_reducers
})


export const postComments=( c,r,comment,author )=>(dispatch)=>{
    let ourdata={
        course:c,
        rating:r,
        comment:comment,
        author:author
    }
    console.log(ourdata)
    ourdata.date=new Date().toISOString();

    let bearer='bearer '+localStorage.getItem('token') 
/*     return axios.post(baseurl+'courses',ourdata)
 */
    return axios({
        method: 'post',
        url:baseurl+ 'comments',
        data:ourdata,
        headers:{
            Authorization:bearer,

        }
      })
    .then(res=>res.data )//either you should use small brackets to directly return or if u want to use curly bracket then you must write ''
    .then(res=>{
        console.log(res)
        dispatch(add_comment(res))
        fetchcomments()
    })
    
    .catch(error=>{ console.log('Error  posting comments', error);
        alert('Error posting comments: This may be an error from server ::::::::: '+error);
    })
}



export const postCourses=(name,email,subject,descp,selectedfile)=>(dispatch)=>{
    let ourdata={
        videotitle:name,
        email:email,
        subject:subject,
        description:descp,
        image:selectedfile
    }
    ourdata.date=new Date().toISOString();
/*     return axios.post(baseurl+'courses',ourdata)
 */
    return axios({
        method: 'post',
        url:baseurl+ 'courses',
        data:ourdata,
        headers:{
            'Content-Type':'application/json'
        },
        credentials: 'same-origin'
      })
    .then(res=>res.data )//either you should use small brackets to directly return or if u want to use curly bracket then you must write ''
    .then(res=>dispatch(add_course(res)))
    .catch(error=>{ console.log('Error  posting courses', error);
        alert('Error posting courses: This may be an error from server :::::::::===> '+error);
    })
}
export const add_course=(course)=>({
    type:ActionType.ADD_COURSES,
    payload:course
})




/* 

.then(response => {
    if (response.ok) {
      return response;
    } else {
      var error = new Error('Error ' + response.status + ': ' + response.statusText);
      error.response = response;
      throw error;
    }
  },
  error => {
        throw error;
  })
.then(response => response.json())
.then(response => dispatch(addComment(response)))
.catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};


 */

export const loginUser=(creds)=>(dispatch)=>{
    //dispatching this to kick off the call to api says guru
    dispatch(request_login(creds))

    console.log(creds)
    return axios({
        method:'post',
        url:baseurl+'users/login',
        headers:{
            'Content-Type':'application/json'
        },
        data:JSON.stringify(creds)
    })
    .then(res=>res.data)
    .then(res=>{
        console.log(res)
        if(res.success){
            localStorage.setItem('token',res.token)
            localStorage.setItem('creds',JSON.stringify(creds))
            dispatch(success_login(res))
        }
        else{
            console.log('Error ta xa')
        }
    })
    .catch(err=>console.log(err+" ola ap  This is the error during login in user"))
}

export const request_login=(creds)=>({
    type:ActionType.REQUEST_LOGIN,
    creds
})

export const success_login=(creds)=>({
    type:ActionType.REQUEST_SUCCESS,
    token:creds.token
})

export const failed_login=(creds)=>({
    type:ActionType.FAILED_LOGIN,
    creds
})






export const fetchCourses=()=>(dispatch)=>{
    dispatch(loading_courses(true));
    return axios({
        method: 'get',
        url:baseurl+ 'courses',

      })
    .then(res=>res.data)
    .then(res=>(dispatch(show_courses(res))))
    .catch(err=>{dispatch(failed_courses(err.message))})
}
export const loading_courses=()=>({
    type:ActionType.LOADING_COURSES
})
export const failed_courses=(e)=>({
    type:ActionType.FAILED_COURSES,
    payload:e
})
export const show_courses=(c)=>({
    type:ActionType.SHOW_COURSES,
    payload:c
})


// comments
/* export const fetchcomments=()=>(dispatch)=>{
    dispatch(loading_comments(true));
    
    setTimeout(()=>{
        dispatch(show_comments(COMMENTS));
    },1000)
}
 */
export const fetchcomments=()=>(dispatch)=>{
    dispatch(loading_comments(true));
    return axios.get(baseurl+'comments')
    .then(res=>res.data)
    .then(res=> dispatch(show_comments(res)) )
    .catch(err=>{dispatch(failed_comments(err.message))})
}
export const loading_comments=()=>({
    type:ActionType.LOADING_COMMENTS,
})
export const failed_comments=(err)=>({
    type:ActionType.FAILED_COMMENTS,
    payload:err
})
export const show_comments=(courses)=>({
    type:ActionType.SHOW_COMMENTS,
    payload:courses
})

