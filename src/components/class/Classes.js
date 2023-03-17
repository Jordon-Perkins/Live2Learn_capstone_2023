import React, { useEffect, useState } from "react"
import { getClasses, deleteClass, leaveClass, joinClass} from "../../managers/ClassManager.js"


export const Classes = () => {
    var user = parseInt(localStorage.getItem("l2l_user_id"))
    const [ classes, setClasses ] = useState([])
    const [ ] = useState([])

    useEffect(() => {
        getClasses().then(data => {
            setClasses(data)
        })
    }, [])

    const getAllClasses = () => {
        getClasses().then(data => {
            setClasses(data)
            console.log(classes)
        })
    }

    const handleJoin = (id) => {
        joinClass(id).then(() => {
            {getAllClasses()}
             }) 
    }

    const handleLeave = (id) => {
        leaveClass(id).then(() => {
            {getAllClasses()}
             }) 
    }

    // const handleDelete = (id) => {
    //   deleteClass(id).then(() => {
    //       {getAllClasses()}
    //        }) 
    // }

    return (<>
                <div>
                    {classes.map(thisClass => {
                        var student_ids = thisClass.students.map(student => student.id)
                        var is_currentUser_student = student_ids.includes(user)
                        var instructor_ids = thisClass.instructors.map(instructor => instructor.id)
                        var is_currentUser_instructor = instructor_ids.includes(user)


                        console.log(thisClass)
                        console.log(student_ids)
                        console.log(is_currentUser_student)
                        console.log(is_currentUser_instructor)
                        console.log(user)

                        return (<div className="class-card" key={thisClass.id}>
                            <div className="classDetails">
                            <p className="class-title">{thisClass.title}</p>
                            <p className="class-description">{thisClass.description}</p>
                            <p className="class-date">{thisClass.date}{thisClass.time}</p>
                            <p className="class-level">{thisClass?.skillId?.skill_level}</p>
                            {
                            thisClass.joined ?
                                // TODO: create the Leave button
                                <button className="btn btn-2 btn-sep icon-create"
                                    onClick={() => {
                                        handleLeave(thisClass.id)
                                    }}
                                >Leave Class</button>
                            :
                                // TODO: create the Join button
                                <button className="btn btn-2 btn-sep icon-create"
                                    onClick={() => {
                                        handleJoin(thisClass.id)
                                    }}
                                >Attend Class</button>
                            }
                            {/* <button className="btn btn-2 btn-sep icon-create"
                            onClick={() => {
                                handleDelete(thisClass.id)
                            }}
                            >Delete Class</button> */}
                            {/* {
                            event.joined ?
                                // TODO: create the Leave button
                                <button className="btn btn-2 btn-sep icon-create"
                                    onClick={() => {
                                        handleLeave(event.id)
                                    }}
                                >Leave Event</button>
                            :
                                // TODO: create the Join button
                                <button className="btn btn-2 btn-sep icon-create"
                                    onClick={() => {
                                        handleJoin(event.id)
                                    }}
                                >Join Event</button>
                        } */}
                            </div>
                        </div>)})}
                                    </div>
                </>)
}





      
