import React from "react";
import {completedFilterDictionary} from "../Filter/index";
import TodoItem from "../TodoItem";
import PropTypes from "prop-types";


const Index = ({
                   textFilter,
                   todoItems,
                   completedFilter,
                   toggleCompletedHandler,
                   editTodoItemHandler,
                   removeTodoItemHandler
               }) => {
                const isFilterMatched = (todoItemText) => todoItemText.indexOf(textFilter) > -1;

    return (
        todoItems.filter(
            (todoItem) =>
                isFilterMatched(todoItem.text)
                && (
                    todoItem.isCompleted === completedFilter
                    || completedFilter === completedFilterDictionary.showAll
                )
        ).map(
            (todoItem) =>
                <TodoItem
                    key={todoItem.id}
                    todoItem={todoItem}
                    toggleCompletedHandler={() => {toggleCompletedHandler(todoItem.id);}}
                    editTodoItemHandler={editTodoItemHandler(todoItem.id)}
                    removeTodoItemHandler={() => {removeTodoItemHandler(todoItem.id);}}
                />
        )
    )

}


Index.propTypes = {
    textFilter: PropTypes.string.isRequired,
    todoItems: PropTypes.array.isRequired,
    completedFilter: PropTypes.any,
    toggleCompletedHandler: PropTypes.func.isRequired,
    removeTodoItemHandler: PropTypes.func.isRequired,
    editTodoItemHandler: PropTypes.func.isRequired
};


export default Index;