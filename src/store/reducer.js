const initData = {
  allTodos: [{ content: '第一个todo', done: false }, { content: '第2个todo', done: false }],
  curTodo: '',
};

export default (
  (state = initData, action) => {
    switch (action.type) {
      case 'refresh_curTodo':
        // const newState = {
        //   ...state,
        // };
        // const newState = JSON.parse(JSON.stringify(state));
        // 如果是用【...state】来展开的话会报错
        // newState.curTodo = action.value;
        return {
          ...state,
          curTodo: action.value,
        };
      case 'add_todo':
        const newState2 = JSON.parse(JSON.stringify(state));
        // newState2.allTodos.push(
        //   {
        //   content:newState2.curTodo,
        //   done:false
        // });
        // console.log(newState2);
        // newState2.curTodo = '';
        return {
          allTodos: [
            ...state.allTodos,
            {
              content: newState2.curTodo,
              done: false,
            },
          ],
          curTodo: '',
        };
      case 'delete_todo':
        const newState3 = JSON.parse(JSON.stringify(state));
        newState3.allTodos.splice(action.index, 1);
        console.log(newState3);
        return newState3;
      case 'change_todo_done':
        const newState4 = JSON.parse(JSON.stringify(state));
        newState4.allTodos[action.index].done = !newState4.allTodos[action.index].done;
        return newState4;
      default:
        return state;
    }
  }
);
