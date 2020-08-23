import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { removeTodo, markTodoAsCompleted } from './actions';
import './TodoList.css';

const TodoList = ({ todos, onRemovePressed, onCompletePressed }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem
            key={Math.random()}
            todo={todo}
            onRemovePressed={onRemovePressed}
            onCompletePressed={onCompletePressed}
        />)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletePressed: text => dispatch(markTodoAsCompleted(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);