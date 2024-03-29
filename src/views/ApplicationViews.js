import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { Classes } from "../components/class/Classes"
import { MyClass } from "../components/class/MyClass"
import { NewClass } from "../components/class/NewClass"
import { EditClass } from "../components/class/EditClass"
import { Instructors } from "../components/instructor/Instructors"

export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
            <Route path="/" element={<Classes />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/classes" element={<MyClass />} />
            <Route path="/classes/new" element={<NewClass />} />
            <Route path="/classes/:classId/edit" element={<EditClass />} />
            </Route>
        </Routes>
    </>
}
