import React, { Component } from 'react';
import {BrowserRouter , Link, Redirect} from 'react-router-dom' ;
import SignUp  from '../SingUp/SingUpPage';
import AuthenticateLogin from './AuthenticateLogin' ;

class loginForm extends Component {

    state = {
        email  : '' ,
        password : '' ,
        showComponent : null ,
    }


    ClickSingnUpFun = () => {
       
        this.setState({showComponent : <SignUp />})
    }

    clickLogin = () => {
        this.setState({showComponent : <AuthenticateLogin email={this.state.email} password ={this.state.password} />})
    }

     
    render() { if (this.state.showComponent !== null)
        return <>
         {this.state.showComponent}
        </>
      else {
        return (
        <div >
            <BrowserRouter>
            <Redirect from = "/home" to = "/" />
            <nav className="navbar navbar-dark bg-dark">
               <div className="container-fluid">
                 <a className="navbar-brand">Login </a>
                 <li>
                   <Link to="/signUp" onClick={this.ClickSingnUpFun}>signUp</Link>
                </li>
                </div>
                
            </nav>

            <br />

            <form>
                
                <input className="form-control" type="text" id ="email" name ="email" placeholder = 'email or user name'   onChange ={e => this.setState({email : e.target.value})}/>
                <br />
                <input className="form-control" type = "password" id ="password" name = "password" placeholder = "Password"  onChange = {e => this.setState({password : e.target.value})}/>
                <br />
                
                <BrowserRouter>
                <Link to = "/home">
                <button  className = "btn btn-primary" onClick= {this.clickLogin}> submit </button>
                </Link>
                </BrowserRouter>
                </form>
                </BrowserRouter>
        </div> 
        );
       }
    }
}


 
export default loginForm;