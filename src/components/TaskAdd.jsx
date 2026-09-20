import { useState } from "react";
import { TextArea, CloseButton, Button } from "@heroui/react";
import { Plus } from "@gravity-ui/icons";


function TaskAdd({ onAddTask, onClose }) {
  const [taskName, setTaskName] = useState('');
  
  const handleSubmit = () => {
    if (!taskName.trim()) return;

    onAddTask(taskName);
    setTaskName('');
    onClose();
  }

  const handleCancel = () => { 
    setTaskName('');
    onClose();
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <Plus
              width={18}
              height={18}
              aria-hidden="true"
            />
          </div>
          <div>
            <h2 className="font-semibold text-slate-900">Tambah task</h2>
            <p className="text-sm text-slate-500">Tulis tugas yang ingin kamu selesaikan.</p>
          </div>
        </div>
        <CloseButton
          aria-label="Tutup form tambah task"
          onPress={handleCancel}
        />
      </div>

      <TextArea
        aria-label="Nama task baru"
        className="mt-4 w-full resize-none rounded-xl border border-slate-200 bg-white"
        placeholder="Contoh: Selesaikan desain halaman dashboard"
        value={taskName}
        onChange={(value) => {
          setTaskName(typeof value === 'string' ? value : value.target.value)
        }}
      />

      <div className="mt-4 flex justify-end gap-2">
        <Button
          className="rounded-xl"
          variant="secondary"
          onPress={handleCancel}
        >
          Batal
        </Button>
        <Button
          className="rounded-xl"
          variant="primary"
          onPress={handleSubmit}
        >
          <Plus
            width={16}
            height={16}
            aria-hidden="true"
          />
          Tambah
        </Button>
      </div>
    </section>
  )
}

export default TaskAdd
