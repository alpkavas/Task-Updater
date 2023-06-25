import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete, onUpdate }) {
  const [showEdit, setEdit] = useState(false);

  const handleDeleter = () => {
    onDelete(task.id);
  };

  const handleEdit = () => {
    setEdit(true); // -> !showEdit
  };
  const handleSubmitEdit = (id, UptTitle, taskUptDesc) => {
    setEdit(false);
    onUpdate(id, UptTitle, taskUptDesc);
  };

  return (
    <div className="taskOfList">
      {showEdit ? (
        <TaskCreate
          task={task}
          taskEditable={true}
          onUpdate={handleSubmitEdit}
        />
      ) : (
        <div>
          <h3 className="task-title">Görevimiz</h3>
          <p className="texts">{task.title}</p>
          <h3 className="task-title">Yapılacaklar</h3>
          <p className="texts">{task.taskDesc}</p>
          <div className="taskButtons">
            <button className="delete" onClick={handleDeleter}>
              Delete
            </button>
            <button className="updater" onClick={handleEdit}>
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
