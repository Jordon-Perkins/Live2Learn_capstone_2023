import React, { useEffect, useState } from "react"
import { unstable_HistoryRouter } from "react-router-dom"
import { getClasses, deleteClass, leaveClass, joinClass} from "../../managers/ClassManager.js"
import { getSkills } from '../../managers/SkillManager.js'
import { chunks } from "../../utils.js"
import "./cards.css"

export const Classes = () => {
    var user = parseInt(localStorage.getItem("l2l_user_id"))
    const [ classes, setClasses ] = useState([])
    // const [skillId, setSkillId] = useState([])

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

    // useEffect(() => {
    //     getSkills().then((data) => {
    //         setSkillId(data)
    //     })
    // }, [])

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

    const buttons_all = (thisClass) => {

        var student_ids = thisClass.students.map(student => student.id)
        var is_currentUser_student = student_ids.includes(user)

        var instructor_ids = thisClass.instructors.map(instructor => instructor.id)
        var is_currentUser_instructor = instructor_ids.includes(user)

        if (is_currentUser_instructor) {
            console.log("i am an instructor")
            return <></>
        } 
        else if (is_currentUser_student) {
            console.log("i am a student")
            return <div className="vertical-center"><button className="btn btn-dark"
            onClick={() => {
                handleLeave(thisClass.id)
            }}
        >Leave Class</button></div>
        } else {
            console.log("lets dance")
            return <div className="vertical-center"><button className="btn btn-dark"
            onClick={() => {
                handleJoin(thisClass.id)
            }}
        >Attend Class</button></div>
        }
    }
    
    return (<>
        <h2 className="classHeader">Find A Class!</h2>
        {
            chunks(classes, 4).map(row => {
                return (
                    <div className="row">
                        {
                        row.map(thisClass => {
                            return (
                                <div className="card col-3 classDetails" key={thisClass.id}>
                                    <div className="col-container">
                                        <div className="row">
                                            <h3 className="card-header text-center">{thisClass.title}</h3>
                                        </div>
                                        <div className="row">
                                            <h5 className="description">Description of class:</h5>
                                            <p className="description ">{thisClass.description}</p>
                                        </div>
                                        <div className="row">
                                            <h5>Time and Date of Class:</h5>
                                            <p className="info">{thisClass.date}{thisClass.time}</p>
                                        </div>
                                        <div className="row">
                                            <h5>Skill Level:</h5>
                                            <p className="info">{thisClass?.skill.skill_level}</p>
                                        </div>
                                        { buttons_all(thisClass) }
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                )
            })
        }
    </>)
}





      
