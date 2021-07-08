import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


const grid = 8;
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    padding: grid * 4,
    margin: `0 0 ${grid}px 0`,
    background: isDragging ? "#db284994" : "white",
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "#1a9437" : "#db284994",
    padding: grid,
    width: 600
});

const CardCenter = {
    textAlign: "center",
    display: "flex",
    justifyContent: "center"
}

const MainComponent = {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    margin: "30px"
}

export const MoveTask = () => {
    const completedList = useSelector(state => state.data)
    const [itemData, setItemData] = useState('')

    useEffect(() => {
        const competedData = completedList.filter(x => x.isCompleted)
        setItemData(competedData)
    }, [completedList])


    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        const items = reorder(
            itemData,
            result.source.index,
            result.destination.index
        );
        setItemData(items);
    }
    return (
        <div>
            <div style={MainComponent}>
                <h1>
                Move Task Component
                </h1>
            </div>

            <div style={CardCenter}>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}
                            >
                                {itemData && itemData.map((item, index) => (
                                    <Draggable key={item.taskName} draggableId={item.taskName} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}
                                            >
                                                {item.taskName}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        </div>
    )
}

