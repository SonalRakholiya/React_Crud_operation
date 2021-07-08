import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { NavBar } from '../NavBar/NavBar'
import { MoveTask } from '../Component/MoveTask'
import { Task } from '../Component/Task'

const MainRouter = () => (
    <div>
        <NavBar />
        <Switch>
            <Route exact path="/" component={Task}></Route>
            <Route exact path="/Task" component={Task}></Route>
            <Route exact path="/MoveTask" component={MoveTask}></Route>
        </Switch>
    </div>
)

export default MainRouter