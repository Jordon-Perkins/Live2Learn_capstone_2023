import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"


export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                {/* <Route path="/" element={<ClassList/>} />
                <Route path="/classes/new" element={<CreateClass/>} />
                <Route path="/classes" element={<MyClass />} />
                <Route path="/instructors" element={<InstructorList/>} />
                <Route path="/classes/edit" element={<EditClass />} /> */}
            </Route>
        </Routes>
    </>
}
