import { Checkbox, Description } from "@heroui/react";

function highlightText(text, query) {
  if (!query) return text;

  const parts = text.split(new RegExp(`(${query})`, 'gi'));

  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark
        key={index}
        className="bg-yellow-200 text-slate-900 rounded-sm px-0.5"
      >
        {part}
      </mark>
    ) : (
      part
    )
  );
}

function TaskList({ tasks, search }) {
  return (
    <ul className="w-full min-w-0 space-y-3 overflow-y-auto max-h-70 scrollbar-none">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex min-w-0 flex-col gap-2"
        >
          <Checkbox
            id={`task-${task.id}`}
            isSelected={task.completed}
            className="w-full min-w-0 rounded-lg border border-slate-150 p-3 transition-colors hover:bg-slate-50"
          >
            <Checkbox.Content
              className="flex items-center gap-2 min-w-0"
            >
              <Checkbox.Control className="rounded-full w-7 h-7 border-2 border-blue-500 shrink-0">
                <Checkbox.Indicator />
              </Checkbox.Control>
              {/* truncate atau break-words agar teks panjang tidak menabrak batas container */}
              <span className={`min-w-0 wrap-break-words ${task.completed ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                {highlightText(task.task, search)}
              </span>
            </Checkbox.Content>
            <Description className="ml-2 text-xs text-slate-400">
              {task.createdAt} {task.completed ? '| selesai' : ''}
            </Description>
          </Checkbox>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
