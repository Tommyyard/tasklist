import TaskList from './components/TaskList'
// import TaskHeader from './components/TaskHeader'
import TaskFilter from './components/TaskFilter.jsx'
import TaskSearch from './components/TaskSearch'
import { useState } from 'react'
import dataTasks from '../src/data/data.js'


function App() {
  const [search, setSearch] = useState('');

  const filterTask = dataTasks.filter((items) =>
    items.task.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-slate-200 px-6 py-10 flex items-center justify-center">
      <section className="bg-white rounded-2xl mx-auto max-w-fit max-h-150 border p-5 ">
        {/* <TaskHeader /> */}
        <div className="">
          <TaskSearch search={search} setSearch={setSearch} />
        </div>
        <div className="">
          <TaskFilter />
        </div>
        <div className="">
          <TaskList tasks={filterTask} search={search} />
        </div>
      </section>
    </main>
  )
}

export default App
