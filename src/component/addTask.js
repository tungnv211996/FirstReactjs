import React, {Component} from 'react';
class AddTask extends Component{

    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);

    }
    onClick(a){
        console.log(a);
    }
    render(){
        
        return(
            <div>
                
            <button type="button" className="btn btn-primary " onClick={() => {this.onClick('afaf')}}>Add task</button>
            </div>
        );
    }
}
export default AddTask;