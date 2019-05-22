import React, { Component } from 'react';
import Row from './row';
import { connect } from 'react-redux';
import *as actions from '../../actions/index';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: undefined
        }
    }
    listAll = () =>{
        this.props.listAll()
    }
render() {
    this.listAll();
    const { tasks, status } = this.props
    let rows = tasks
    .filter(i => { return (undefined !== status) ? (i.status == status ? true : false) : true })
    .map((task, index) => {
        return (
            <Row
                editTask={this.props.editTask}
                deleteTask={this.props.deleteTask}
                task={task}
                key={task.id}
            />
        )
    });
    return (
        /* <div className="col-md-4 m-t-100">
             <div className=" img-fluid img-thumbnail w-400">
                 <img className="h-400" alt={this.props.children} src={this.props.img}/>
                 <div className="caption">
                     <h3>
                             {this.props.name}
                     </h3>
                     <p>
                             {this.props.cost}
                     </p>
                 </div>
             </div>
     <button type="button" className="btn btn-primary " onClick={() => {this.onClick('Mua Thành Công')}}>Add task</button>

        </div> */

        <table className="table ">
            <thead className="thead-inverse min-w">
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}
}
const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
};
const mapDispatchToProps = (dispatch,props) =>{
    return{
        listAll: () =>{
            dispatch(actions.listAll())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Table);