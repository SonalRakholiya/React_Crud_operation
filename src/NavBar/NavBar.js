import { useState } from "react"
import { Menu } from "semantic-ui-react"
import history from '../history'

export const NavBar = () => {
    const pathName = window.location.pathname

     console.log("pathName", pathName)
    const [activeItem, sedativeItem] = useState(pathName === '/MoveTask' ? "MoveTask" : "Task")
    const handleItemClick = (name) => {
        sedativeItem(name)
        history.push('/' + name)
    }
    return (
        <div>
            <Menu tabular>
                <Menu.Item
                    name='Task'
                    active={activeItem === 'Task'}
                    onClick={() => handleItemClick("Task")}
                />
                <Menu.Item
                    name='MoveTask'
                    active={activeItem === 'MoveTask'}
                    onClick={() => handleItemClick("MoveTask")}
                />
            </Menu>
        </div>
    )
}
