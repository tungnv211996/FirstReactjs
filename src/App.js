import React, { Component } from 'react';
import Header from './component/Header';
import Table from './component/Table';
import AddTask from './component/addTask';
import {createStore} from 'redux';
import './css/style.css';

var initialState = {
  status: false
}
var myReducer = (status = initialState, action) =>{
  return status;
}
const store = createStore(myReducer);
console.log(store)
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
          <Table/>
          <AddTask/>
      </div>
        );
      }
    }
    
    export default App;
