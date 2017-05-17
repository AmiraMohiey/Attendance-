import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK} from 'admin-on-rest';



export default (type, params) => {
    if (type === AUTH_LOGIN) {

         const _username = params.username;
         const _password = params.password;
         const request = new Request('http://localhost:8000/api/login_check', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({ _username, _password }),
        })
         return fetch(request)
            .then(response => {          
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
               
                return response.json();
            })
            .then(({ token }) => {
           
               
           
                localStorage.setItem('token', token); 
                var tok=token.split('.')[1].replace('-', '+').replace('_', '/')
                var role= JSON.parse(atob(tok))
                console.log("rpole",role)
                if(role==='ROLE_USE'){
                localStorage.setItem('user', _username);
                window.location = "/app";
                  
                                      }
                  
                  localStorage.setItem('admin', _username);    
            });
                
        return Promise.resolve()

   }
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('token');
        localStorage.removeItem('admin');
        return Promise.resolve();
    }
    // called when the API returns an error
    if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
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


