// this class determine which admin or user 
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../MapStatesRedux/mapUsersData';
import { BrowserRouter , Route , Redirect} from 'react-router-dom';
import LoginForm from './login' ;
import AuthenticateLoginAdmin from './AdminAuthenticate' ;
import UserAuthenticateLogin from './UserAuthenticate' ;
import axios from 'axios' ;

class AuthenticateLogin extends React.Component {

    state = {
        showComponent : null ,
    }

    componentDidMount(){

        this.checkLogin();
    }
    
    checkLogin = () =>{

        const options = {
            headers: {'Accept': 'application/json', 
            'Content-Type': 'application/json', }
          };
         axios.post('https://medtroops-backend.appssquare.com/api/admin/login', {
            email: this.props.email,
            password: this.props.password,
          } , options)
          .then(res => {
                        let token = res.data.token 
                        localStorage.setItem('token' ,  token ) 
                        localStorage.setItem('adminEmail' , this.props.email)
                        this.setState({showComponent :  <AuthenticateLoginAdmin token = {token} email = {this.props.email} />})                                  
                    })
          .catch(err => {
                  this.checkAsUser(err) ;
            }) ;   
    }

    checkAsUser = (err) => {

    localStorage.removeItem('userName') ;
      var found = false ;
           this.props.users.forEach(element => {
            if (element.userName == this.props.email && element.password == this.props.password ){
              localStorage.setItem('userName', this.props.email);
              found = true ; 
              this.setState({showComponent : <UserAuthenticateLogin />})
          }
      });
      if (!found){
        alert("wrong email or password " + err ) ;
        this.setState({showComponent : 
                  <BrowserRouter>
                  <Redirect from = "/home" to = "/" />
                  <LoginForm />
                  </BrowserRouter>
        })
      }

    }

    render() { 
        return <>
        {this.state.showComponent}
        </>
    }
}
 
export default connect (mapStateToProps) (AuthenticateLogin);