import TaskList from "./components/TaskList";
import TaskHeader from "./components/TaskHeader";
import TaskFilter from "./components/TaskFilter.jsx";
import TaskSearch from "./components/TaskSearch";
import TaskAdd from "./components/TaskAdd.jsx";
import { useState } from "react";
import dataTasks from "../src/data/data.js";

function App() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useState(dataTasks);
  const [isAddOpen, setIsAddOpen] = useState(false);

  const tanggalHariIni = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const tanggalTask = new Date()
    .toLocaleDateString("id-ID", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "-");

  const handleAddTask = (taskName) => {
    const newTask = {
      id: tasks.length + 1,
      task: taskName,
      completed: false,
      createdAt: tanggalTask,
    };
    setTasks([newTask, ...tasks]);
  };

  const filterTask = tasks.filter((items) => {
    const matchSearch = items.task.toLowerCase().includes(search.toLowerCase());

    return filter === "active"
      ? matchSearch && !items.completed
      : filter === "completed"
        ? matchSearch && items.completed
        : matchSearch;
  });

  return (
    <main className="min-h-screen bg-slate-200 px-6 py-10 flex items-center justify-center">
      <section className="flex flex-col gap-2 mx-auto w-full max-w-xl rounded-2xl border bg-white p-5">
        <TaskHeader tanggal={tanggalHariIni} />
        <div className="">
          <TaskSearch
            search={search}
            setSearch={setSearch}
            onOpenAdd={() => setIsAddOpen(true)}
          />
        </div>
        <div className="">
          {isAddOpen && (
            <TaskAdd
              onAddTask={handleAddTask}
              onClose={() => setIsAddOpen(false)}
            />
          )}
        </div>
        <div className="">
          <TaskFilter filter={filter} setFilter={setFilter} />
        </div>
        <div className="">
          <TaskList tasks={filterTask} search={search} />
        </div>
      </section>
    </main>
  );
}

export default App;
