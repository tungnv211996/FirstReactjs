import React, { Component } from 'react';
import {connect} from 'react-redux';
import *as actions from '../../actions/index';
class Form extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: '',
            status: false,
        }
    }
    handleChange (event) {
        this.setState( {[event.target.name]: event.target.value} )
      }
    addTask = (e) => {
        e.preventDefault()
        this.props.addTask(this.state)

    }
    render() {
        return (

            <form className="form-inline m-t-20">
                <div className="form-group">
                    <label >Name</label>
                    <input type="text"
                        className="form-control" name="name" 
                         onChange={event => this.handleChange(event)}></input>
                </div>
                <label>Status:</label>
                <div className="form-group">
                    <input type="radio"
                        className="form-control" name="status" onChange={()=>this.setState({status:true})}></input>
                    <label style={{margin:5}} >Done</label>
                    <input type="radio"
                        className="form-control" name="status" onChange={()=>this.setState({status:false})} checked></input>
                    <label style={{margin:5}}>In process</label>
                </div>
               
                <button onClick={this.addTask} className="btn btn-primary">Submit</button>

            </form>
        )
    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return {
        addTask: (task)=>{
            dispatch(actions.addTask(task));
        }
    }
}
export default connect(null,mapDispatchToProps)(Form);