import React, { Component } from 'react';
import Header from './component/Header';
import Table from './component/table/table';
import Form from './component/form/form';
import './css/style.css';

let index = 5;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDisplayForm: false,
    }
    this.deleteTask = id => {
      this.setState({ tasks: this.state.tasks.filter(item => item.id !== id) })
    }

    this.editTask = item => {
      this.setState({ tasks: this.state.tasks.map(i => i.id === item.id ? item : i) })
    }
    this.addTask = (item) => {
      let newItem = { ...item, id: index++ }
      this.setState({ tasks: [...this.state.tasks, newItem] })
    }
    this.filter = (status) => {
      this.setState({status})
      // this.setState({ tasksFilter: this.state.tasks.filter(item => item.status === status), isFilter: true })
    }

  }

  isAddTask = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    })
  }
  render() {
    var products = [
      {
        id: 1,
        name: 'Oppo',
        cost: 10000000,
        img: 'https://cdn.didongthongminh.vn/upload_images/2018/08/oppo-a3s-red.jpg'
      },
      {
        id: 2,
        name: 'Nokia 1280',
        cost: 10000000,
        img: 'https://cf.shopee.vn/file/20bd7ca87fcb0b5a9ff8789101dec309'
      },
      {
        id: 3,
        name: 'Iphone',
        cost: 10000000,
        img: 'https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-hh-600x600.jpg'
      },
    ];
    let elements = products.map((product, index) => {
      return (
        <Table
          name={product.name}
          img={product.img}
          cost={product.cost}>
        </Table>
      )
    });
    let { isDisplayForm } = this.state;
    let elmForm = isDisplayForm ? <Form /> : '';
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className="m-50">
          <div className="row m-t-100">
            <div className="col-md-6">
              <a name="" id="" className="btn btn-primary" href="#" role="button" onClick={this.isAddTask}>Add Task</a>
              {elmForm}
            </div>
            <div className="col-md-6">
              <label className="m-r-10">Filter:</label>
              <div className="btn-group" data-toggle="buttons">
                <label className="btn btn-primary " onClick={()=>this.filter(false)}>
                  <input type="radio" name="filter"  ></input>In process
                </label>
                <label className="btn btn-primary" onClick={()=>this.filter(true)}>
                  <input type="radio" name="filter"  ></input>Done
                </label>
              </div>
            </div>
          </div>
          <div className="row ">
            <Table
                status ={this.state.status}
              // editTask={this.editTask}
              // deleteTask={this.deleteTask}
              // tasks={isFilter ? this.state.tasksFilter : this.props.tasks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
