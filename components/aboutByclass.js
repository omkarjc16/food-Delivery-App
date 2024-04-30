import { Component } from "react";

class AboutbyClass extends Component{
constructor(props){
    super(props)
    this.state ={
        count:0,
        count2:0,
    }
}
render(){
    const {name,location} =this.props
    const {count,count2} =this.state;
    return (
    <div className="profilecontainer">
         <h1>count: {count}</h1>
         <button onClick={()=>{
            this.setState({
                count:this.state.count+1,
            })
         }}>increaseCount</button>
         <h4>Name:{name}</h4>
         <h4>Location:{location}</h4>
         </div>
        )
}

}
export default AboutbyClass;