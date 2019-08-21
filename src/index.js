import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from './store';

const App = (
    //provider 讲store提供给他所有的子组件
    <Provider store = {store}>
        <TodoList></TodoList>    
    </Provider>
);

ReactDOM.render(App, document.getElementById("root"))

