import { useState } from "react";

type Props = {
  addTodo: (params: string) => void;
};

export function AddTodo(props: Props) {
  const { addTodo } = props;

  const [todoTitle, setTodoTitle] = useState("");
  //Adding Types to Events in React using TypeScript
  //https://bobbyhadz.com/blog/react-events-types
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoTitle(e.target.value);
  }

  function onClickAdd() {
    if (todoTitle.replace(/^\s+|\s+$/g, "") === "") {
      return;
    }
    addTodo(todoTitle);
    setTodoTitle("");
  }

  return (
    <div className="add-todo">
      <span className="add-todo-prefix">👉</span>
      <input
        type="text"
        placeholder="I need to ..."
        value={todoTitle}
        onChange={onChange}
      />
      <button className="add-todo-add" onClick={onClickAdd}>
        Add
      </button>
    </div>
  );
}
