import React from 'react';
import AdminHome from '../HomePages/AdminHomePage' ;
import LoginForm from './login'
import { BrowserRouter , Route , Redirect} from 'react-router-dom';
import AuthenticateContext from '../dataStore/AuthContext' ;

class AuthenticateLoginAdmin extends React.Component {

    render() { 
        return <div>
            {this.props.token ?
            <AuthenticateContext.Provider value={{
                'token' : this.props.token ,
                'email' : this.props.email ,
            }}> 
            <Route  path='/home' exact component={AdminHome} />
            </BrowserRouter>
            </AuthenticateContext.Provider>
            : <BrowserRouter>
             <Redirect from="/home" to="/" />
            <LoginForm />
           
             }
            </div>
    }
}
 



  
export default AuthenticateLoginAdmin ;
