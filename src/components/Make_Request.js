import React,{Component} from 'react'

class Make_Request extends Component{
state = {
  id:null,
  make : null
}

  componentDidMount(){
    console.log(this.props);
    let id = this.props.match.params.vehicle_id;
    let make = null;
    this.setState(
      {
        id : id,
        make :  Math.floor(Math.random() * 101)
      }
    )
  }

render(){
  return(
    <div>
    <h2>{this.state.id}</h2>
    <p>{this.state.make}</p>
    </div>
  )
}

}
export default Make_Request
