import React, { useEffect, useState } from "react"
import { deleteClass, leaveClass, joinClass} from "../../managers/ClassManager.js"
import { getInstructingClasses} from "../../managers/InstructorManager"
import { getAttendingClasses} from "../../managers/StudentManager"
import { useNavigate , useParams } from "react-router-dom"
import "./cards.css"
import { chunks } from "../../utils.js"
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
        <h2 className="classHeader">Classes you are instructing!</h2>
        {
            chunks(classesInstructing, 4).map(row => {
                return (
                    <div className="row">
                        {
                        row.map(thisClass => {
                            return (
                                <div className="card col-3 text-center classDetails"   key={thisClass.id}>
                                    <div className="col-container">
                                        <div className="cardRow row">
                                            <h3 className="card-header">{thisClass.title}</h3>
                                        </div>
                                        <div className="cardRow row">
                                            <p className="description">Description of class:</p>
                                            <p className="description card-body">{thisClass.description}</p>
                                        </div>
                                        <div className="cardRow row">
                                            <p></p>
                                            <p className="info card-body">{thisClass.date}{thisClass.time}</p>
                                        </div>
                                        <div className="cardRow row">
                                            <p className="info card-body">{thisClass?.skill.skill_level}</p>
                                        </div>
                                        <div className="vertical-center">
                                            <button className="btn btn-dark" onClick={() => 
                                                {handleDelete(thisClass.id)}}>
                                                Delete Class
                                            </button>
                                        </div>
                                        <div className="vertical-center">
                                            <button className="btn btn-dark" onClick={ () => 
                                                { navigate(`${ thisClass.id }/edit`)}}>
                                                Edit this Class
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                )
            })
        }
        </div>
        <div  className="row">

        {
            chunks(classesAttending, 4).map(row => {
                return (
                    <div className="row">
                    <h2 className="classHeader">Classes you are attending!</h2>
                        {
                        row.map(thisClass => {
                            return (
                                <div className="card col-3 text-center classDetails" key={thisClass.id}>
                                    <div className="col-container">
                                        <div className="cardRow row">
                                            <h3 className="card-header">{thisClass.title}</h3>
                                        </div>
                                        <div className="cardRow row">
                                            <p className="description">Description of class:</p>
                                            <p className="description card-body">{thisClass.description}</p>
                                        </div>
                                        <div className="cardRow row">
                                            <p className="info card-body">{thisClass.date}{thisClass.time}</p>
                                        </div>
                                        <div className="cardRow row">
                                            <p className="info card-body">{thisClass?.skill.skill_level}</p>
                                        </div>
                                        <div className="vertical-center">
                                            <button className="btn btn-dark" onClick={() => 
                                                    {handleLeave(thisClass.id)}}>
                                                    Leave Class
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                )
            })
        }
            
                            </div>
            </div>
            </>)
}





      
