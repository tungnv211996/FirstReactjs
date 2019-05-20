import React, {Component} from 'react';
class AddTask extends Component{

    
    onClick(a){
        console.log(a)
    }
    render(){
        
        return(
            <div>
            <button type="button" className="btn btn-primary" onClick={this.onClick('asd')}>Add task</button>
            </div>
        );
    }
}
export default AddTask;