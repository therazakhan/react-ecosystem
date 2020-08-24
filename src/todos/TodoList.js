import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { loadTodos, removeTodoRequest } from './thunks';
import { markTodoAsCompleted } from './actions';
import './TodoList.css';

const TodoList = ({ todos, isLoading, onRemovePressed, onCompletePressed, startLoadingTodos }) => {
    useEffect(()=>{
        startLoadingTodos()
    },[]);
    const loadingMessage = <div>Loading todos...</div>
    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map(todo => <TodoListItem
                key={Math.random()}
                todo={todo}
                onRemovePressed={onRemovePressed}
                onCompletePressed={onCompletePressed}
            />)}
        </div>);
    return isLoading ? loadingMessage : content;
};
const mapStateToProps = state => ({
    isLoading: state.isLoading,
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletePressed: text => dispatch(markTodoAsCompleted(text)),
    startLoadingTodos: () => dispatch(loadTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);