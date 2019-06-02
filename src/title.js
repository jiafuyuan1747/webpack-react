import React from 'react'
import css from './title.css'
import store from "./store";

class Title extends React.Component{
    constructor(props){
        super(props);
        this.state = store.getState();
    }
    render(){
        console.log(this.state);
        return (
            <div className={css.title}>
                <h1> Todos</h1>

            </div>
        )
    }
}
export default Title