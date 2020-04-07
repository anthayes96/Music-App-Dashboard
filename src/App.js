import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dashboard from "./components/dashboard";

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      login:false
    }
  }
  handlelogin = () =>{this.setState({login:true})}
  render (){
    if (this.state.login) {
      return <Dashboard/>
    }
    else{

  return (
    <div className="App">
     <Navbar/> 
     <TextField label = 'username'/>
     <TextField label = 'password'/>
     <Button onClick={this.handlelogin} color="primary" variant="contained">enter</Button>
    </div>
    
  );}
  }
}

export default App;
