import React, { useEffect, useState } from "react"
import { deleteClass, leaveClass, joinClass} from "../../managers/ClassManager.js"
import { getMyClasses} from "../../managers/InstructorManager"
import { useNavigate ,useParams } from "react-router-dom"
// import { getSkills } from '../../managers/SkillManager.js'

export const MyClass = () => {
    const [ classes, setClasses ] = useState([])
    const navigate = useNavigate()
    // const [skillId, setSkillId] = useState([])

    useEffect(() => {
        getMyClasses().then(data => setClasses(data))
    }, [])

    const getAllClasses = () => {
        getMyClasses().then(data => setClasses(data))
    }

    const handleDelete = (id) => {
      deleteClass(id).then(() => {
          {getAllClasses()}
           }) 
    }

  //   useEffect(() => {
  //     // TODO: Get the game, then set the state
  //     getSkills().then((data) => {
  //         // console.log(data)
  //         setSkillId(data)
  //     })
  // }, [])


    // const classes = [
    //     {
    //       "id": 1,
    //       "title": "Ballet",
    //       "time": "4:30",
    //       "date": "2020-08-28",
    //       "description": "Take is back to the basics!",
    //       "skillId": "1"
    //     },
    //     {
    //       "id": 2,
    //       "title": "Tap",
    //       "time": "6:30",
    //       "date": "2023-09-01",
    //       "description": "Learn all the cool tap skills possible",
    //       "skillId": "3"
    //     },
    //     {
    //       "id": 3,
    //       "title": "Jazz",
    //       "time": "2:00",
    //       "date": "2022-10-30",
    //       "description": "Embrace you inner sass!",
    //       "skillId": "2"
    //     },
    //     {
    //       "id": 4,
    //       "title": "Lyrical",
    //       "time": "10:00",
    //       "date": "2023-01-27",
    //       "description": "Let go and live in the music!",
    //       "skillId": "1"
    //     },
    //     {
    //       "id": 5,
    //       "title": "Ballet Cachetti",
    //       "time": "7:45",
    //       "date": "",
    //       "description": "Take you Ballet skills to the next level!",
    //       "skillId": "3"
    //     }
    //   ]

    return (<>
                <div>
                    {classes.map(thisClass => {return  (<div className="class-card" key={thisClass.id}>
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
                </>)
}





      
