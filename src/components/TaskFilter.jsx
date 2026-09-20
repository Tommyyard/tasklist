import { Rectangles4, Circle, CircleCheck } from '@gravity-ui/icons';
import { Tag, TagGroup } from "@heroui/react";


function TaskFilter({ filter, setFilter }) {
    return (
        <div className="mb-2">
            <TagGroup
                aria-label="Tags"
                selectionMode="single"
            >
                <TagGroup.List>
                    <Tag
                        id="default-news"
                        className={`px-4 py-2 ${filter === 'all'
                            ? 'bg-blue-500 text-white'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                        onClick={() => setFilter('all')}
                    >
                        <Rectangles4 />
                        Semua
                    </Tag>
                    <Tag
                        id="default-travel"
                        className="px-4 py-2"
                        onClick={() => setFilter('active')}
                    >
                        <Circle />
                        Aktif
                    </Tag>
                    <Tag
                        id="default-gaming"
                        className="px-4 py-2"
                        onClick={() => setFilter('completed')}
                    >
                        <CircleCheck />
                        Selesai
                    </Tag>
                </TagGroup.List>
            </TagGroup>
        </div>
    )
}

export default TaskFilter
