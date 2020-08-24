import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { getTodosLoading, getCompleteTodos, getIncompleteTodos } from './selectors';
import { loadTodos, removeTodoRequest, markTodoAsCompleteRequest } from './thunks';

const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`;

const TodoList = ({ completeTodos, inCompleteTodos, isLoading, onRemovePressed, onCompletePressed, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos()
    }, []);
    const loadingMessage = <div>Loading todos...</div>
    const content = (
        <ListWrapper>
            <NewTodoForm />
            <h3>Incomplete:</h3>
            {inCompleteTodos.map(todo => <TodoListItem
                key={Math.random()}
                todo={todo}
                onRemovePressed={onRemovePressed}
                onCompletePressed={onCompletePressed}
            />)}
            <h3>Completed:</h3>
            {completeTodos.map(todo => <TodoListItem
                key={Math.random()}
                todo={todo}
                onRemovePressed={onRemovePressed}
                onCompletePressed={onCompletePressed}
            />)}
        </ListWrapper>);
    return isLoading ? loadingMessage : content;
};
const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    completeTodos: getCompleteTodos(state),
    inCompleteTodos: getIncompleteTodos(state)
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletePressed: id => dispatch(markTodoAsCompleteRequest(id)),
    startLoadingTodos: () => dispatch(loadTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);