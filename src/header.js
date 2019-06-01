import React from "react";
import TodoList from './list'
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            allTodos :[{content:'第一个todo',done:false},{content:'第2个todo',done:false}],
            curTodo:''
        }
    }
    setCurTodo = (curTodo)=>{
        this.setState({
            curTodo:curTodo
        })
    };

    setAllTodos = (allTodos)=>{
        this.setState({
            allTodos,
            curTodo:''
        });
    };
    addTodo = () => {
        this.setAllTodos([
            ...this.state.allTodos,
            {
                content: this.state.curTodo,
                done: false,
            },
        ]);
        // event.preventDefault();
    };
    refreshCurTodo = (event)=>{
        this.setCurTodo(event.target.value);
        // event.preventDefault();
    };
    deleteTodo = (index) => {
        const listTemp = [...this.state.allTodos];
        listTemp.splice(index, 1);
        this.setAllTodos(listTemp);
    };

    changeTodoDone = (index) => {
        const listTemp = [...this.state.allTodos];
        listTemp[index].done = !listTemp[index].done;
        this.setAllTodos(listTemp);
    };

    render() {
        return(
            <div>
                <div>
                   <input
                       type="text"
                       onChange={this.refreshCurTodo}
                       value = {this.state.curTodo}
                   />
                    <button type="submit" className="input-add" onClick={this.addTodo}>新增</button>
                </div>
                <ul>
                    {this.state.allTodos.map(
                        (item, index)=>{
                            return (
                                <TodoList
                                    key={index}
                                    item={item}
                                    index={index}
                                    deleteTodo={this.deleteTodo}
                                    changeTodoDone={this.changeTodoDone}
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
