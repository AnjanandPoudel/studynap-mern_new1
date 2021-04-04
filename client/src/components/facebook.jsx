import React from 'react';
import FacebookLogin from 'react-facebook-login'
import axios from 'axios';
import { baseurl } from '../redux/baseURL';


function Oauth(){

    const responseFacebook =(response)=>{
      console.log(response)
      axios({
        method:'get',
        url:baseurl+'facebook/token',
        
        headers:{
          Authorization:'Bearer'+response.accessToken,
          'Content-Type':'application/json'
      },
      credentials: 'same-origin'
      })
      .then(response=>{
        console.log(response+"  This is facebook login response")
      })
      .catch(err=>{
        console.log(err+"Ok error")
      })
    }

    return(
        <div className="oauth">
          <FacebookLogin
            appId="493613475001569"
            autoLoad={false}
            callback={responseFacebook}
          />
        </div>
    )
}


export default Oauth;