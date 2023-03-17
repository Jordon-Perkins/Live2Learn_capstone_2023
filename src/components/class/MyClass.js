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





      
