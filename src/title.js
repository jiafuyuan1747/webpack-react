import React from 'react'
import css from './title.css'

class Title extends React.Component{
    render(){
        console.log(css);
        return  (
            <div className={css.title}>
                <h1> Todos</h1>

            </div>
        )
    }
};

export default Title