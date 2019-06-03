import React from "react";
import {connect }from 'react-redux'
import {Input,Button} from "antd";
class Header extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = store.getState();
    //     store.subscribe(this.setCurTodo);
    // }
    // setCurTodo = ()=>{
    //     this.setState(
    //         store.getState()
    //     );
    // };
    // addTodo = () => {
    //     const action = {
    //         type: 'add_todo'
    //     };
    //     store.dispatch(action);
    // };
    // refreshCurTodo = (event)=>{
    //     const action = {
    //         type: 'refresh_curTodo',
    //         value: event.target.value
    //     };
    //     store.dispatch(action);
    // };

    render() {
        const {curTodo,refreshCurTodo,addTodo} = this.props;
        return(
            <div>
                <Input
                  placeholder="What is your main focus for today?"
                  onChange={this.props.refreshCurTodo}
                  value = {this.props.curTodo}
                  type="text"
                  // style={{marginRight: spacing + 'em'}}
                  style = {{width: '270px',height: '25px',marginRight:'10px'}}
                />
                <Button type="primary" className="input-add" onClick={this.props.addTodo}>newtodo</Button>
            </div>
        );

    }
}
const mapStateToProps = (state) => {
    return {curTodo: state.curTodo}
};
const mapDispatchToProps = (dispatch) => {
    return{
        refreshCurTodo:(event) => {dispatch(
          {
              type: 'refresh_curTodo',
              value: event.target.value
          }
        )},
        addTodo: () => {dispatch(
          {
              type: 'add_todo'
          }
        )}
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
