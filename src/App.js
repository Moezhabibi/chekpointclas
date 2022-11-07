
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      person : [
        FullName , bio , imgSrc , profession

      ],
      show : false,
    }
  }

  handleShow=()=> this.setState({...this.state,show : !this.state.show})


      render(){
        return(
          <div>
            
            {
              this.state.person.map(el=> 
              <div>
                <h2>{ el. FullName}</h2>
                <h2>{el. bio}</h2>
                <h2>{el. imgSrc}</h2>
                <h2>{el. profession}</h2>
                <button onClick={this.handleShow}>{this.state.show ? 'Hide' : 'Show'}</button>
                {
                  this.state.show && < handleShow = {this.state.person}> 
                }
              </div>)
            }
            </div>
           
          
        
          
        
      



export default App;
