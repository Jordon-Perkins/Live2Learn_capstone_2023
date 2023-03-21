import React, { useEffect, useState } from "react"
import { deleteClass, leaveClass, joinClass} from "../../managers/ClassManager.js"
import { getInstructingClasses} from "../../managers/InstructorManager"
import { getAttendingClasses} from "../../managers/StudentManager"
import { useNavigate , useParams } from "react-router-dom"
import "./cards.css"
// import { getSkills } from '../../managers/SkillManager.js'

export const MyClass = () => {
    const [classesInstructing, setClassesInstructing] = useState([])
    const navigate = useNavigate()
    const [classesAttending, setClassesAttending] = useState([])

    useEffect(() => {
        getInstructingClasses().then(data => setClassesInstructing(data))
    }, [])

    useEffect(() => {
        getAttendingClasses().then(data => setClassesAttending(data))
    }, [])

    const resetInstructingClasses = () => {
        getInstructingClasses().then(data => setClassesInstructing(data))
    }

    const resetAttendingClasses = () => {
        getAttendingClasses().then(data => setClassesAttending(data))
    }


    const handleDelete = (id) => {
      deleteClass(id).then(() => {
          {resetInstructingClasses()}
           }) 
    }

    const handleLeave = (id) => {
        leaveClass(id).then(() => {
            {resetAttendingClasses()}
            }) 
    }

  

    return (<>
    <div  className="row">
                <div  className="row">
                    {classesInstructing.map(thisClass => {return  (<div className="card col-3 text-center" key={thisClass.id}>
                            <div className="classDetails">
                            <p className="card-header">{thisClass.title}</p>
                            <p className="card-body">{thisClass.description}</p>
                            <p className="card-body">{thisClass.date}{thisClass.time}</p>
                            <p className="card-body">{thisClass?.skill?.skill_level}</p>
                            <div className="vertical-center">
                            <button class="btn btn-dark"
                            onClick={() => {
                                handleDelete(thisClass.id)
                            }}
                            >Delete Class</button></div>
                            <div className="vertical-center">
                            <button class="btn btn-dark" onClick={ () => { navigate(`${ thisClass.id }/edit`)}}>Edit this Class</button></div>
                            </div>
                        </div>)})}
                </div>
                <div  className="row">
                    {classesAttending.map(thisClass => {return  (<div className="card col-3 text-center" key={thisClass.id}>
                            <div className="classDetails">
                            <p className="card-header">{thisClass.title}</p>
                            <p className="card-body">{thisClass.description}</p>
                            <p className="card-body">{thisClass.date}{thisClass.time}</p>
                            <p className="card-body">{thisClass?.skill?.skill_level}</p>
                            <div className="vertical-center">
                            <button class="btn btn-dark"
                                onClick={() => {
                                    handleLeave(thisClass.id)
                                }}
                            >Leave Class</button>
                            </div>
                            </div>
                        </div>)})}
                                    </div>
            </div>
            </>)
}





      
