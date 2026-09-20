import { Plus } from "@gravity-ui/icons"; 
import { SearchField, Button } from "@heroui/react";

function TaskSearch({ search, setSearch }) {
  return (
    <div className="mb-6 flex flex-row gap-2">
      <SearchField name="search" aria-label="Cari tugas">
        <SearchField.Group className="border border-slate-300">
          <SearchField.SearchIcon />
          <SearchField.Input
            className="w-70"
            placeholder="Search..."
            value={search}
            onChange={(value) =>
              setSearch(typeof value === "string" ? value : value.target.value)
            }
          />
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>

      <Button className="rounded-xl">
        <Plus width={16} height={16} aria-hidden="true" />
        Tambah
      </Button>

    </div>
  )

}

export default TaskSearch
