
import React from 'react';
import './App.css';
import Profil from './component/Profil';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      person : {
        FullName :"Moez", bio:"Student" , imgSrc:"/logo512.png" , profession:"FullStackJS Developer"

    },
      show : false,
    }
  }

  handleShow=()=> this.setState({...this.state,show : !this.state.show})


      render(){
        return(
          <div>
            
            
       
                <button onClick={this.handleShow}>{this.state.show ? 'Hide' : 'Show'}</button>
                {
                  this.state.show && <Profil person ={this.state.person}/>
                }
        
            
            </div>
        )}}
           
          
        
          
        
      


        
export default App;
