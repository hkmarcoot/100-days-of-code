import { useState } from "react";
import { TodoButtons } from "./TodoButtons";
import { TodoTitle } from "./TodoTitle";

interface ITodo {
  title: string;
  isComplete: boolean;
  id: string;
}

interface Props {
  todo: ITodo;
  updateTodo: (id: string, todo: ITodo) => void;
  deleteTodo: (id: string) => void;
}

export function Todo(props: Props) {
  const { todo, updateTodo, deleteTodo } = props;
  const { title, isComplete } = todo;

  const [isEditing, setIsEditing] = useState(false);
  const [editedTodoTitle, setEditedTodoTitle] = useState(title);

  function onClickToggle() {
    const updatedTodo = { ...todo, isComplete: !todo.isComplete };
    updateTodo(todo.id, updatedTodo);
  }

  function onClickEdit() {
    setIsEditing(!isEditing);
  }

  function onClickDelete() {
    deleteTodo(todo.id);
  }

  function onClickDone() {
    const updatedTodo = { ...todo, title: editedTodoTitle };
    updateTodo(todo.id, updatedTodo);
    setIsEditing(false);
  }

  return (
    <div className="todo">
      <TodoTitle
        title={title}
        isComplete={isComplete}
        isEditing={isEditing}
        editedTodoTitle={editedTodoTitle}
        setEditedTodoTitle={setEditedTodoTitle}
      />
      <TodoButtons
        isComplete={isComplete}
        isEditing={isEditing}
        onClickToggle={onClickToggle}
        onClickEditOrDone={isEditing ? onClickDone : onClickEdit}
        onClickDelete={onClickDelete}
      />
    </div>
  );
}
