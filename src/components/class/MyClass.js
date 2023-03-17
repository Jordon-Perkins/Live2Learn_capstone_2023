import React, { useEffect, useState } from "react"
import { deleteClass, leaveClass, joinClass} from "../../managers/ClassManager.js"
import { getInstructingClasses} from "../../managers/InstructorManager"
import { getAttendingClasses} from "../../managers/StudentManager"
import { useNavigate ,useParams } from "react-router-dom"
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
                <div>
                    {classesInstructing.map(thisClass => {return  (<div className="class-card" key={thisClass.id}>
                            <div className="classDetails">
                            <p className="class-title">{thisClass.title}</p>
                            <p className="class-description">{thisClass.description}</p>
                            <p className="class-date">{thisClass.date}{thisClass.time}</p>
                            <p className="class-level">{thisClass?.skill?.skill_level}</p>
                            <button className="btn btn-2 btn-sep icon-create"
                            onClick={() => {
                                handleDelete(thisClass.id)
                            }}
                            >Delete Class</button>
                            <button className="btn btn-outline-light" onClick={ () => { navigate(`${ thisClass.id }/edit`)}}>Edit this Class</button>
                            {/* { deleteButton(itemObj.id) }
                            <button class="btn btn-outline-light" onClick={ () => { navigate(`${ itemObj.id }/edit`)}}>Edit an Item</button> */}
                            </div>
                        </div>)})}
                </div>
                <div>
                    {classesAttending.map(thisClass => {return  (<div className="class-card" key={thisClass.id}>
                            <div className="classDetails">
                            <p className="class-title">{thisClass.title}</p>
                            <p className="class-description">{thisClass.description}</p>
                            <p className="class-date">{thisClass.date}{thisClass.time}</p>
                            <p className="class-level">{thisClass?.skill?.skill_level}</p>
                            
                            <button className="btn btn-2 btn-sep icon-create"
                                onClick={() => {
                                    handleLeave(thisClass.id)
                                }}
                            >Leave Class</button>
                            
                            </div>
                        </div>)})}
                                    </div>
            </>)
}





      
