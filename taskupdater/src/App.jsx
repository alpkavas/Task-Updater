import { useEffect, useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  const deleteTaskByID = async id => {
    await axios.delete(`http://localhost:3000/tasks/${id}`); // değer silinir, database güncellenir.

    const deletedTask = tasks.filter(task => {
      // filtreden geçirir ve idsi eşit olmayanı döndürmez dolayısıyla array'e eklemez
      return task.id !== id;
    });
    setTasks(deletedTask); // geriye dönen elemanlarla(tasklarla) array tekrar oluşturulur
  };
  const handleUptTask = async (id, UptTitle, taskUptDesc) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      title: UptTitle,
      taskDesc: taskUptDesc,
    }); //düzenleme yaptıktan sonra güncellenen değerler db'de de güncellenir.

    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { id, title: UptTitle, taskDesc: taskUptDesc };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const createTask = async (title, taskDesc) => {
    const res = await axios.post("http://localhost:3000/tasks", {
      title,
      taskDesc,
    }); //istek atılır

    const createdElements = [
      ...tasks,
      // {
      //   //[...tasks(old array here),id, title, taskDesc]
      //   id: Math.round(Math.random() * 999999), // unique id, bcs should't match another id
      //   title: title, // just write title
      //   taskDesc: taskDesc,
      // },
      res.data, //direkt db değerler alınır
    ];
    setTasks(createdElements);
  };

  const fetchTask = async () => {
    const res = await axios.get("http://localhost:3000/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTask();
  }, []); //sadece bir kez render olur.

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1> TASKS </h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskByID}
        onUpdate={handleUptTask}
      />
    </div>
  );
}

export default App;
