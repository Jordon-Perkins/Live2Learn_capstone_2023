import React, { useEffect, useState } from "react"
import { getInstructors, deleteClass, leaveClass, joinClass} from "../../managers/InstructorManager.js"
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
    // const instructors = [
    //     {
    //       "id": 1,
    //       "name": "Instructor 1",
    //       "bio": "Bio for inst 1"
    //     },
    //     {
    //     "id": 2,
    //     "name": "Instructor 2",
    //     "bio": "Bio for inst 2"
    //     },
    //     {
    //     "id": 3,
    //     "name": "Instructor 3",
    //     "bio": "Bio for inst 3"
    //     }
    //   ]


    return (<>
        <div className="row">
        <h4 className="instructorHeader">Instructor Profiles!</h4>
            {instructors.map(instructor => {return  (<div className="instructor-card col-md-6" key={instructor.id}>
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