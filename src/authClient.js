import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK,redirectTo } from 'admin-on-rest';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Match,Redirect ,Router,Route} from 'react-router'

export default (type, params) => {

    if (type === AUTH_LOGIN) {
         const { username, password } = params;
        
        //  const request = new Request('https://mydomain.com/authenticate', {
        //     method: 'POST',
        //     body: JSON.stringify({ username, password }),
        //     headers: new Headers({ 'Content-Type': 'application/json' }),
        // })
        // return fetch(request)
        //     .then(response => {
        //         if (response.status < 200 || response.status >= 300) {
        //             throw new Error(response.statusText);
        //         }
        //         return response.json();
        //     })
        //     .then(({ token }) => {
        //         localStorage.setItem('token', token);
        //     });
        if(username==='admin' &&password==='123' )
        {localStorage.setItem('admin', username);}
        
else{      
  
  


         localStorage.setItem('username', username);
    
         window.location = "/app";

          
          
      
}
        return Promise.resolve()
        // return Promise.resolve();
   }
    

    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('username');
        localStorage.removeItem('admin');
        return Promise.resolve();
    }
    // called when the API returns an error
    if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            localStorage.removeItem('admin');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    // called when the user navigates to a new location
    if (type === AUTH_CHECK) {
        return localStorage.getItem('admin') ? Promise.resolve() : Promise.reject();
    }
    return Promise.reject('Unknown method');
};


