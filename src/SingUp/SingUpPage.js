import React from 'react';
import { BrowserRouter, Redirect , Link} from 'react-router-dom';
import SignUpProcess from './SignUpProcess';



class SignUp extends React.Component {

    state = {
        userName : '' ,
        password : '' ,
        repeatPassword : '',
        signUpClicked : null ,
    }

    SignUp = (e) =>{
        e.preventDefault() ;
        this.setState({signUpClicked : <SignUpProcess userName={this.state.userName}
               password = {this.state.password}
               repeatPassword ={this.state.repeatPassword} />})
    }

    render() { 
        return <div>
            {this.state.signUpClicked !== null ?
            <>
            {this.state.signUpClicked}
            </> : <>
            <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand">SignUp </a>
             </div> 
         </nav>
         <br />
        <form>
             
             <input className="form-control" type="text" id ="userName" name ="userName" placeholder = 'user name'   onChange ={e => this.setState({userName : e.target.value})}/>
             <br />
             <input className="form-control" type = "password" id ="password" name = "password" placeholder = "Password"  onChange = {e => this.setState({password : e.target.value})}/>
             <br />

             <input className="form-control" type = "password" id ="repeat password" name = "repeat password" placeholder = "repeat Password"  onChange = {e => this.setState({repeatPassword : e.target.value})}/>
             <br />
             
             <BrowserRouter>
             <Link to = "/">
             <button  className = "btn btn-primary" onClick= {this.SignUp}> SignUp </button>
             </Link>
             </BrowserRouter>
             </form>
             </>
            }
        </div>;
    }
}



 
export default SignUp;