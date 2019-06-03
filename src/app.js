import React from 'react';
import Header from './header';
import Title from './title';
import List from './list';
import store from './store/index'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <Title />
      <Header />
      <List />
    </Provider>
  );
};
export default App;
