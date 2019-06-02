import React from "react";

import {Input,Button} from "antd";
import store from './store/index'
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        store.subscribe(this.setCurTodo);
    }
    setCurTodo = ()=>{
        this.setState(
            store.getState()
        );
    };
    addTodo = () => {
        const action = {
            type: 'add_todo'
        };
        store.dispatch(action);
        // this.setAllTodos([
        //     ...this.state.allTodos,
        //     {
        //         content: this.state.curTodo,
        //         done: false,
        //     },
        // ]);
        // event.preventDefault();
    };
    refreshCurTodo = (event)=>{
        const action = {
            type: 'refresh_curTodo',
            value: event.target.value
        };
        store.dispatch(action);
        // event.preventDefault();
    };
    // deleteTodo = (index) => {
    //     const action = {
    //         type: 'delete_todo',
    //         index: index
    //     };
    //     store.dispatch(action);
    // };
    // changeTodoDone = (index) => {
    //     const action  = {
    //         type: 'change_todo_done',
    //         index: index
    //     };
    //     store.dispatch(action);
    // };

    render() {
        return(
            <div>
                <div>
                    <Input
                      placeholder="What is your main focus for today?"
                      onChange={this.refreshCurTodo}
                      value = {this.state.curTodo}
                      type="text"
                      // style={{marginRight: spacing + 'em'}}
                      style = {{width: '270px',height: '25px',marginRight:'10px'}}
                    />
                    <Button type="primary" className="input-add" onClick={this.addTodo}>newtodo</Button>
                </div>
            </div>
        )
    }

}

export default Header;
