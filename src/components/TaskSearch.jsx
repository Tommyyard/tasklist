import { Plus } from "@gravity-ui/icons"; 
import { SearchField, Button } from "@heroui/react";

function TaskSearch({ search, setSearch, onOpenAdd }) {

  return (
    <div className="flex flex-row gap-2 ">
      <SearchField
        name="search"
        aria-label="Cari tugas"
        className="w-full"
        value={search}
        onChange={setSearch}
        onClear={() => setSearch('')}
      >
        <SearchField.Group className="border border-slate-300">
          <SearchField.SearchIcon />
          <SearchField.Input
            className=""
            placeholder="Search..."
          />
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>

      <Button
        className="rounded-xl"
        onPress={onOpenAdd}
      >
        <Plus
          width={16}
          height={16}
          aria-hidden="true"
        />
        Tambah
      </Button>

    </div>
  )

}

export default TaskSearch
