import { NavBar } from "../NavBar/NavBar"
import { Switch, Route } from "react-router-dom";
import { Task } from "../Component/Task";

export const TaskRouter = () => {
    <>
        <NavBar />
        <Switch>
            <Route exact path="/" component={Task}></Route>
            <Route exact path="/Task" component={Task}></Route>
        </Switch>
    </>
}
