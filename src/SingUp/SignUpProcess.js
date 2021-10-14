import React, { Component } from 'react';
import mapStateToProps from '../MapStatesRedux/mapUsersData';
import mapDispatchToProps from '../MapDispatchRedux/mapUsersData';
import { BrowserRouter, Redirect , Link ,Route} from 'react-router-dom';
import LoginForm from '../LoginPages/login'
import { connect } from 'react-redux';
import signUpPage from './SingUpPage' ;

class SignUpProcess extends React.Component {

    state={
        showComponent : null ,
    }

    componentDidMount(){
        this.SignUp()
    }

    SignUp = () => {
        if (this.props.userName !== '' && this.props.password !== '' && this.props.password === this.props.repeatPassword){
            localStorage.setItem('signUpUserName' , this.props.userName) ;
            localStorage.setItem('signUpPassword' , this.props.password) ;
            this.props.signUp();
            this.setState({showComponent : 
                <BrowserRouter>
                <Redirect from = "/signUp" to ="/" />
                <LoginForm />
                </BrowserRouter>  })
        }
        else {
        alert("please sure that you entre the user name and password and the password equal repeated password") ;
        this.setState({ showComponent : 
                <BrowserRouter>
                <Route to ="/signUp" exact component ={signUpPage} />
               </BrowserRouter>   })
            }
    }   

    render() { 
        return <div>
            {this.state.showComponent}
        </div>;
    }
}
 
export default  connect (mapStateToProps , mapDispatchToProps)(SignUpProcess);





       