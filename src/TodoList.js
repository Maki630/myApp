import React, { Component } from 'react';
import Store from './store/index.js'

const data = [
    'hello, can I help you',
    'NO, thanks',
    'have fun'
];
class TodoList extends Component {
    constructor(props) {
        super(props);
        const ad = Store.getState();
        console.log(ad);
    }

    List = (data) => {
      console.log(data);
      const a =[];// map((item)=> { return (<li>{item.type}</li> })
       data.map((item) => {
           a.push (
            <li>{item}</li>
           );              
       })
       return a;
    }

    render() { 
        const ListShow = this.List(data);
        return ( 
        <div>   
            <input type='text' placeholder='aaaa'/>
            <button>确认</button>
            <ul>{ListShow}</ul>
        </div>);
    }
}
 
export default TodoList;