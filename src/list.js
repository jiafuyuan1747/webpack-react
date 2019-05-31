import React from 'react'
const List  = (props)=>{
    const {item,index,deleteTodo,changeTodoDone} = props;
    return(
            <div>
                <li
                    key={index}
                >
                    <input
                        type="checkbox"
                        onChange = {()=>changeTodoDone(index)}
                    />
                    <span className={item.done? "done":"notdone"}> {item.content} </span>
                    <button onClick={() => deleteTodo(index)} className="deletebutton">删除</button>
                </li>
            </div>
        )
};
export default List
