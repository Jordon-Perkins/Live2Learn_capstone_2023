import React, { useEffect, useState } from "react"
import { getInstructors} from "../../managers/InstructorManager.js"
import "./instructors.css"


export const Instructors = () => {



  const [ instructors, setInstructors ] = useState([])
    console.log(instructors)

    useEffect(() => {
        getInstructors().then(data => {
            setInstructors(data)
            
        })
    }, [])

    const getAllInstructors = () => {
        getInstructors().then(data => {
            setInstructors(data)

        })
    }


    return (<>
        <div className="row instructor-card">
        <h4 className="instructorHeader">Instructor Profiles!</h4>
            {instructors.map(instructor => {
                return  (<div className="instructor-card col-md-3" key={instructor.id}>
                    <div className="instructorDetails">
                    <h5>Name:</h5>
                    <p className="instructor-fullName">{instructor.full_name}</p>
                    <h5>Bio:</h5>
                    <p className="instructor-bio">{instructor.bio}</p>
                    </div>
                </div>)})}
                            </div>
        </>)
}