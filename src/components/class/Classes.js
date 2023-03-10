import React, { useEffect, useState } from "react"


export const Classes = () => {


    const classes = [
        {
          "id": 1,
          "title": "Ballet",
          "time": "4:30",
          "date": "2020-08-28",
          "description": "Take is back to the basics!",
          "skillId": "1"
        },
        {
          "id": 2,
          "title": "Tap",
          "time": "6:30",
          "date": "2023-09-01",
          "description": "Learn all the cool tap skills possible",
          "skillId": "3"
        },
        {
          "id": 3,
          "title": "Jazz",
          "time": "2:00",
          "date": "2022-10-30",
          "description": "Embrace you inner sass!",
          "skillId": "2"
        },
        {
          "id": 4,
          "title": "Lyrical",
          "time": "10:00",
          "date": "2023-01-27",
          "description": "Let go and live in the music!",
          "skillId": "1"
        },
        {
          "id": 5,
          "title": "Ballet Cachetti",
          "time": "7:45",
          "date": "",
          "description": "Take you Ballet skills to the next level!",
          "skillId": "3"
        }
      ]

    return (<>
                <div>
                    {classes.map(thisClass => {return  (<div className="class-card" key={thisClass.id}>
                            <div className="classDetails">
                            <p className="class-title">{thisClass.title}</p>
                            <p className="class-description">{thisClass.description}</p>
                            <p className="class-date">{thisClass.date}{thisClass.time}</p>
                            <p className="class-level">{thisClass?.skillId?.skill_level}</p>
                            {/* { deleteButton(itemObj.id) }
                            <button class="btn btn-outline-light" onClick={ () => { navigate(`${ itemObj.id }/edit`)}}>Edit an Item</button> */}
                            </div>
                        </div>)})}
                                    </div>
                </>)
}





      
