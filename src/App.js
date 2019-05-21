import React, { Component } from 'react';
import Header from './component/Header';
import Table from './component/table/table';
import AddTask from './component/addTask';
import Form from './component/form/form';
import { createStore } from 'redux';
import './css/style.css';

var initialState = {
  status: false
}
let index = 5;
var myReducer = (status = initialState, action) => {
  return status;
}

const store = createStore(myReducer);
class App extends Component {


  constructor(props) {
    super(props);
    this.state = {

      tasks: [
        {
          id: 1,
          name: 'Ăn',
          status: true,
        },
        {
          id: 2,
          name: 'Ngủ',
          status: true,
        }, {
          id: 3,
          name: 'Code',
          status: true,
        }, {
          id: 4,
          name: 'Run',
          status: false,
        },
      ],

      isDisplayForm: false,

    }
    this.deleteTask = id => {
      this.setState({tasks:this.state.tasks.filter(item=>item.id !== id)})
    }
    this.editTask = item => {
      this.deleteTask(item.id)
      this.setState({ tasks: [...this.state.tasks, item] })
      console.log(this.state.tasks)
    }
    // this.changeStatus = id => {
    //   this.state.tasks.forEach((task, index){
    //     if(task.id == id)
    //   })
    // }
    this.addTask = (item) => {
      let newItem = {...item,id:index++}
      this.setState({ tasks: [...this.state.tasks, newItem] })
    }
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


    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className="m-50">
          <div className="row m-t-100">
            <a name="" id="" className="btn btn-primary" href="#" role="button">Add Task</a>
          </div>
          <Form
            addTask={this.addTask}

          />

          <div className="row ">
            <Table 
              editTask = {this.editTask}
              deleteTask = {this.deleteTask}
              tasks = {this.state.tasks}
            />
          </div>
          <AddTask />
        </div>
      </div>
    );
  }
}

export default App;
