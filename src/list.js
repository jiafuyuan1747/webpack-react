import React from 'react'
import {connect} from "react-redux";

class List extends React.Component{
  render(){
    const {allTodos,changeTodoDone,deleteTodo } = this.props;
    return (
      <div>
      <ul>
        {this.props.allTodos.map(
          (item, index)=>{
            return(
              <div>
                <li
                  key={index}
                >
                  <input
                    className = "change-done"
                    type="checkbox"
                    onChange = {this.props.changeTodoDone.bind(index)}
                  />
                  <span className={item.done?"done":"" }> {item.content} </span>
                  <button onClick={() =>this.props.deleteTodo(index)} className="delete-button">删除</button>
                </li>
              </div>
            )})}
      </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    allTodos: state.allTodos
  }
};
const mapDispatchToProps= (dispatch) => {
  return {
    changeTodoDone: (index)=>dispatch({
      type: 'change_todo_done',
      index: index
    }),
    deleteTodo: (index) => dispatch({
      type:'delete_todo',
      index: index
    })
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(List)
