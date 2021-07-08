import { Button, Icon, Input, Table } from "semantic-ui-react"
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addTask, IsCompletedTask, loadApiData } from "../Action/taskAction";
import { toast } from "react-toastify";


export const Task = () => {
  const [task, setTask] = useState('');
  const taskList = useSelector(state => state.data)
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task) {
      const objTask = {
        taskId: Math.random(),
        taskName: task,
        isCompleted: false
      }
      dispatch(addTask(objTask));
      setTask('');
      toast.success("Data save Successfully")
    } else {
      toast.error("Enter valid data")

    }
  }

  const handleIsCompleted = (id) => {
    const checkedData = taskList.map(x => {
      if (x.taskId === id.taskId) {
        x.isCompleted = !x.isCompleted
      }
      return x
    })
    dispatch(IsCompletedTask(checkedData))
  }

  useEffect(() => {
    const localStorageData = localStorage.getItem("persist:root")
    if (localStorageData) {
      return
    } else {
      dispatch(loadApiData())
    }
  }, [])

  return (
    <div className='container' >
      <div className='headerTxt'>
        <h2>Add Task</h2>
      </div>
      <div>
        <Input style={{ width: "50%", padding: "20px" }} value={task} onChange={(e) => setTask(e.target.value)} icon='pen' placeholder='Please Enter Task...' />
      </div>
      <div>
        <Button className='addButton' onClick={handleAdd} positive>ADD</Button>
      </div>
      {
        taskList && taskList.length > 0 && <div className="tableMain">
          <Table color="green" celled >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Is Completed</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {taskList.map(item => {
                return (
                  <Table.Row>
                    <Table.Cell width={4}>{item.taskName}</Table.Cell>
                    <Table.Cell width={1} className='text-align-center'><input type="checkbox" checked={item.isCompleted} onChange={(e) => handleIsCompleted(item)} name="isCompleted" /></Table.Cell>
                  </Table.Row>
                )
              })}
            </Table.Body>
            <Table.Footer>
              <Table.Row>
              <Table.HeaderCell > {taskList.filter(item => item.isCompleted !== true).length} Task(s) not Done</Table.HeaderCell>
              <Table.HeaderCell> {taskList.filter(item => item.isCompleted).length} Task(s) Done</Table.HeaderCell>
               </Table.Row>
            </Table.Footer>
          </Table>
        </div>
      }
    </div >
  )
}
