import React, { Component } from 'react';
import Row from './row';
var index = 0;
class Table extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(a) {
        console.log(a);
        alert(a)
    }
    render() {

        const { tasks } = this.props
        let rows = tasks.map((task, index) => {
            return (
                <Row
                    editTask = {this.props.editTask}
                    deleteTask = {this.props.deleteTask}
                    task={task}
                   key = {task.id}
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
export default Table;