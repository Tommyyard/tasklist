import { Rectangles4, Circle, CircleCheck } from '@gravity-ui/icons';
import { Tag, TagGroup } from "@heroui/react";


function TaskFilter() {
    return (
        <div className="mb-2">
            <TagGroup aria-label="Tags" selectionMode="single">
                <TagGroup.List>
                    <Tag id="default-news" className="px-4 py-2">
                        <Rectangles4 />
                        Semua
                    </Tag>
                    <Tag id="default-travel" className="px-4 py-2">
                        <Circle />
                        Aktif
                    </Tag>
                    <Tag id="default-gaming" className="px-4 py-2">
                        <CircleCheck />
                        Selesai
                    </Tag>
                </TagGroup.List>
            </TagGroup>
        </div>
    )
}

export default TaskFilter
