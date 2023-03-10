import React, { useEffect, useState } from "react"


export const Instructors = () => {

    const instructors = [
        {
          "id": 1,
          "name": "Instructor 1",
          "bio": "Bio for inst 1"
        },
        {
        "id": 2,
        "name": "Instructor 2",
        "bio": "Bio for inst 2"
        },
        {
        "id": 3,
        "name": "Instructor 3",
        "bio": "Bio for inst 3"
        }
      ]


    return (<>
        <div>
            {instructors.map(instructor => {return  (<div className="instructor-card" key={instructor.id}>
                    <div className="instructorDetails">
                    <p className="instructor-fullName">{instructor.name}</p>
                    <p className="instructor-bio">{instructor.bio}</p>
                    {/* { deleteButton(itemObj.id) }
                    <button class="btn btn-outline-light" onClick={ () => { navigate(`${ itemObj.id }/edit`)}}>Edit an Item</button> */}
                    </div>
                </div>)})}
                            </div>
        </>)
}