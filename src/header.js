import React from "react";
import TodoList from './list'
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            allTodos :[{content:'第一个todo',done:false}],
            curTodo:''
        }
    }
    setCurTodo = (curTodo)=>{
        this.setState({
            curTodo:curTodo
        })
    };
    setAllTodos = (x)=>{
        this.setState({
            allTodos: x,
            curTodo:''
        });
    };
    AddTodo = (event)=>{
        let listTem = [...this.state.allTodos];
        let newTodo = {
            content: this.state.curTodo,
            done: false
        };
        listTem = listTem.concat(newTodo);
        this.setAllTodos(listTem);
        event.preventDefault();
    };
    refreshCurTodo = (event)=>{
        this.setCurTodo(event.target.value);
        event.preventDefault();
    };
    deleteTodo = (index)=>{
        let listTemp = [...this.state.allTodos];
        listTemp.splice(index,1);
        this.setAllTodos(listTemp);
    };
    changeTodoDone =(index) => {
        let listTemp = [...this.state.allTodos];
        listTemp[index].done = ! listTemp[index].done;
        this.setAllTodos(listTemp);
    };
    render() {
        return(
            <div >
                <form onSubmit={this.AddTodo} >
                   <input
                       type="text" onChange = {this.refreshCurTodo}
                       value = {this.state.curTodo}
                   />
                   <input type="submit"  value="新增"/>
                </form>
                <ul>
                    {this.state.allTodos.map(
                        (item, index)=>{
                            return (
                                <TodoList
                                    key = {index}
                                    item = {item}
                                    index = {index}
                                    deleteTodo = {this.deleteTodo}
                                    changeTodoDone = {this.changeTodoDone}
                                />
                            )
                          }
                      )
                    }
                </ul>
            </div>
        )
    }

}

export default Header;