import React from "react";

export const TaskCardDeleteButton = ({
  id,
  taskCardsList,
  setTaskCardsList,
}) => {
  const taskCardDeleteButton = (id) => {
    // タスクカードを削除する
    setTaskCardsList(taskCardsList.filter((taskCard) => taskCard.id !== id));
  };
  return (
    <div>
      <button
        className="taskCardDeleteButton"
        onClick={() => taskCardDeleteButton(id)}
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};
