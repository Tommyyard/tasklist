
function TaskHeader({ tanggal }) {

  return (
    <header className="mb-6">
      <h1 className="text-2xl font-bold tracking-tight text-slate-900">
        Task List
      </h1>
      <p className="mt-1 text-sm text-slate-500">{tanggal}</p>
    </header>
  )
}

export default TaskHeader
