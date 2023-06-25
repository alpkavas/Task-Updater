import { useState } from "react";

function TaskCreate({ onCreate, task, taskEditable, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setDesc] = useState(task ? task.taskDesc : "");

  const handleChange = e => {
    setTitle(e.target.value);
  };
  const handleTaskChange = e => {
    setDesc(e.target.value);
  };

  const handleSubmit = e => {
    if (taskEditable) {
      onUpdate(task.id, title, taskDesc);
    } else {
      onCreate(title, taskDesc);
    }
    setTitle(""); // Empty value
    setDesc("");

    e.preventDefault();
  };
  return (
    <div>
      {" "}
      {taskEditable ? ( // doğruysa 1. forum yanlışsa ikinci form
        <div className="editForm">
          <h3 className="task-label">Lütfen Taskı Düzenleyiniz!</h3>
          <form className="taskForm">
            <label className="task-label">
              <span className="editSpanTitleText">Title</span>
            </label>
            <input
              value={title}
              onChange={handleChange}
              className="taskInput"
            />
            <label className="task-label">
              <span className="editSpanTitleText">Task</span>
            </label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="taskInput"
              rows={8}
            />
            <button onClick={handleSubmit} className="AddButton editBtn">
              Edit
            </button>
          </form>
        </div>
      ) : (
        <div className="taskCreate">
          <h3 className="task-label">Lütfen Task Ekleyiniz!</h3>
          <form className="taskForm">
            <label className="task-label">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="taskInput"
            />
            <label className="task-label"> Task </label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="taskInput"
              rows={8}
            />
            <button onClick={handleSubmit} className="AddButton">
              Add
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
