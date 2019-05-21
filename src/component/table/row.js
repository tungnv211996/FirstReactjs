import React, { Component } from 'react';
class Row extends Component {
    constructor(props) {
        super(props)
        this.changeStatus = this.changeStatus.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    state = {
        task: this.props.task,
        isEdit: false
    }
    isEdit = () => {
        this.setState({
            isEdit: !this.state.isEdit
        })
    }
    editTask = () => {
        this.props.editTask(this.state.task)
    }
    changeStatus = () => {
        let task = this.state.task
        task.status = !this.state.task.status;
        this.setState({ task })
        console.log(this.state.task.status)

    }
    deleteTask = (id) => {
        this.props.deleteTask(id)
    }
    handleChange(event) {
        this.setState({ task: { ...this.state.task, name: event.target.value } })
    }

    render() {
        const { task } = this.props
        return (
            <tr>
                <td>{task.id}</td>
                {!this.state.isEdit ?
                    <td>{task.name}</td> :
                    <td><input onChange={this.handleChange} defaultValue={task.name}></input></td>}
                {this.state.isEdit ?
                    <td>
                        <a onClick={() => this.changeStatus()} className="btn btn-primary" role="button">
                            {this.state.task.status ? 'Done' : 'In process'}</a>
                    </td> :
                    <td>
                        <button className="btn btn-primary" disabled role="button">
                            {this.state.task.status ? 'Done' : 'In process'}</button>
                    </td>}
                <td>
                    <a id="1" onClick={() => this.deleteTask(task.id)} className="btn btn-primary" role="button">Delete</a>
                    {!this.state.isEdit ?
                        <a onClick={() => this.isEdit()} id="2" className="btn btn-secondary" role="button">Edit</a> :
                        <a onClick={(event) => { this.editTask(); this.isEdit() }} id="3" className="btn btn-success" role="button">Save</a>}

                </td>
            </tr>
        )
    }
}
export default Row;