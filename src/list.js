import React from 'react'
import store from './store/index'
import {renderedDive} from "enzyme/src/Utils";
class List extends React.Component{
  constructor(props){
    super (props);
    this.state = store.getState();
    store.subscribe(this.setCurTodo);
  }
  setCurTodo = ()=>{
    this.setState(
      store.getState()
    );
  };
  deleteTodo = (index) => {
    const action = {
      type: 'delete_todo',
      index: index
    };
    store.dispatch(action);
  };
  changeTodoDone = (index) => {
    const action  = {
      type: 'change_todo_done',
      index: index
    };
    store.dispatch(action);
  };

  render(){
    console.log(this);
    return (
      <div>
      <ul>
        {this.state.allTodos.map(
          (item, index)=>{
            return(
              <div>
                <li
                  key={index}
                >
                  <input
                    className = "change-done"
                    type="checkbox"
                    onChange = {() => this.changeTodoDone(index)}
                  />
                  <span className={item.done?"done":""}> {item.content} </span>
                  <button onClick={() =>this.deleteTodo(index)} className="delete-button">删除</button>
                </li>
              </div>
            )
          }
        )
        }
      </ul>
      </div>
    )
  }

}

export default List
