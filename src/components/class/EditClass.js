import React, { useEffect, useState } from "react"
import { useNavigate, useParams} from 'react-router-dom'
import { getClass, updateClass } from '../../managers/ClassManager.js'
import { getSkills } from '../../managers/SkillManager.js'

import "./cards.css"

export const EditClass = () => {
    const navigate = useNavigate()
    const { classId } = useParams()
    const [skills, setSkills] = useState([])

    const [currentClass, setCurrentClass] = useState({
        date: "",
        time: "",
        description: "",
        instructor: 0,
        skillId: 0,
        tags: ""
    })

    useEffect(() => {
        getSkills().then(res => setSkills(res))
        getClass(classId).then(res => {
            res.skillId = res.skill.id
            res.tags = res.tags.map(tag => tag.tag).join(" ")
            
            setCurrentClass(res)
            console.log(currentClass)
        })
    }, 
    [classId])

    console.log(currentClass)

    const changeClassState = (domClass) => {
        // TODO: Complete the onChange function
        const copy = {...currentClass}
        copy[domClass.target.name] = domClass.target.value
        console.log(`Updated ${domClass.target.name} to ${domClass.target.value}`)
        console.log(`This is the copy:`)
        console.log(copy)
        setCurrentClass(copy)
        console.log(`This is the new currentClass:`)
        console.log(currentClass)
    }

    return (
        <form>
            <div className="items-container">
            <h2>Edit this Class</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentClass?.title}
                        onChange={changeClassState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description of this Class: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={currentClass?.description}
                        onChange={changeClassState}
                    />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                    <label htmlFor="skillId">Skill Level: </label>
                    <select required autoFocus className="skillLevel" value={currentClass.skillId}
                        onChange={(evt) => {
                            console.log("Setting skill.. Have to parse as int!!")
                            const copy = {...currentClass}
                            copy.skill = parseInt(evt.target.value)
                            setCurrentClass(copy)
                            console.log(currentClass)
                    }}
                    ><option name="skillId" className="skill" >Select Skill Level</option>
                        {skills.map(skill => {
                                return <option
                                    name="skillId"
                                    className="form-control"
                                    value={skill.id}
                                    key={`game--${skill.id}`}
                                >{skill.skill_level}</option>
                            }
                            )
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="time">Time of the Class: </label>
                    <input type="text" name="time" placeholder="HH:MM" required autoFocus className="form-control"
                        value={currentClass.time}
                        onChange={changeClassState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date of the class: </label>
                    <input type="text" name="date" placeholder="YYYY-MM-DD" required autoFocus className="form-control"
                        value={currentClass.date}
                        onChange={changeClassState}
                    />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                <label htmlFor="tag">Tag:</label>
                <input type="text" name="tags" required autoFocus className="form-control"
                        value={currentClass?.tags}
                        onChange={changeClassState}
                    />
            </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    console.log(`Submitting!! Here is the body of the request: ${currentClass}`)
                    // Prevent form from being submitted
                    evt.preventDefault()
                        currentClass.tags = currentClass.tags.split(" ")
                    
                    updateClass(classId, currentClass)
                        .then(() => {
                            console.log("Navigating to /classes")
                            navigate("/classes")
                        })
                }}
                className="btn btn-dark">Update</button>
                </div>
        </form>
    )
}