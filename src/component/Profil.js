import React from "react"

class Profil extends React.Component{
    constructor(props){
        super()
        this.state={
            count : 0
        }
        console.log(this)
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({...this.state,count : this.state.count+1})
        }, 1000);
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                 <h2>{ this.props.person.FullName}</h2>
                <h2>{this.props.person.bio}</h2>
                <img src={this.props.person.imgSrc}/>
                <h2>{this.props.person.profession}</h2> 

            </div>
        )
    }
}

export default Profil

