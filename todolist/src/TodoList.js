import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({
  handleAddTodoBtn,
  currentCategory,
  todos,
  editTodoItem,
  searchValue,
  handleCheckTodoItem
}) => (
  <div className="todo-list-box">
    <h2>{searchValue ? `${searchValue}에 대한 결과` : currentCategory}</h2>
    {!searchValue ? (
      <div className="todo-complete-list">
        <h3>완료된 항목</h3>
        <ul className="todo-list complete">
          {todos.map((todo, index) =>
            todo.category === currentCategory && todo.isChecked ? (
              <TodoListItem
                key={index}
                index={index}
                todo={todo}
                editTodoItem={editTodoItem}
                handleCheckTodoItem={handleCheckTodoItem}
              />
            ) : null
          )}
        </ul>
      </div>
    ) : null}
    <ul className="todo-list">
      {searchValue
        ? todos.map((todo, index) =>
            todo.text.indexOf(searchValue) !== -1 ? (
              <TodoListItem
                key={index}
                index={index}
                todo={todo}
                editTodoItem={editTodoItem}
                handleCheckTodoItem={handleCheckTodoItem}
              />
            ) : null
          )
        : todos.map((todo, index) =>
            todo.category === currentCategory && !todo.isChecked ? (
              <TodoListItem
                key={index}
                index={index}
                todo={todo}
                editTodoItem={editTodoItem}
                handleCheckTodoItem={handleCheckTodoItem}
              />
            ) : null
          )}
    </ul>
    {searchValue ? null : (
      <p className="btn-box">
        <button
          className="btn-add-todo"
          onClick={handleAddTodoBtn.bind(null, "", Date.now())}
        >
          새 할일 추가
        </button>
      </p>
    )}
  </div>
);

export default TodoList;
