import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { createClass,} from '../../managers/ClassManager.js'
import { getSkills } from '../../managers/SkillManager.js'
import "./cards.css"

export const NewClass = () => {
    const navigate = useNavigate()
    const [skillId, setSkillId] = useState([])


        // Since the input fields are bound to the values of
        // the properties of this state variable, you need to
        // provide some default values.
    const [currentClass, setCurrentClass] = useState({
        date: "",
        time: "",
        description: "",
        instructor: 0,
        skillId: 0,
        tags: ""
    })

    useEffect(() => {
        // TODO: Get the game, then set the state
        getSkills().then((data) => {
            // console.log(data)
            setSkillId(data)
        })
    }, [])

    const changeClassState = (domClass) => {
        // TODO: Complete the onChange function
        const copy = {...currentClass}
        copy[domClass.target.name] = domClass.target.value
        // console.log(copy)
        setCurrentClass(copy)
    }





    return (
                <form className="style">
                    <h2 className="text-center">New Class</h2>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="title">Title:</label>
                            <input type="text" name="title" required autoFocus className="form-control"
                                value={currentClass.title}
                                onChange={changeClassState}
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <input type="text" name="description" required autoFocus className="form-control"
                                value={currentClass.description}
                                onChange={changeClassState}
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="skillLevel">Skill Level:</label>
                            <select required autoFocus className="skillList" value={currentClass.skillId}
                                onChange={(evt) => {const copy = {...currentClass}
                                copy.skillId = parseInt(evt.target.value)
                                setCurrentClass(copy)}}
                            ><option name="skillId" className="game" >Select Skill</option>
                                {skillId.map(skill => {
                                    // console.log(game)
                                        return <option
                                            name="skillId"
                                            className="form-control"
                                            value={skill.id}
                                            key={`skill--${skill.id}`}
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
                        <input
                        required
                        id="tag"
                        type="text"
                        className="form-control"
                        placeholder="Add a Tag!"
                        value={currentClass.tags}
                        name="tags"
                        onChange={changeClassState}
                        />
                    </div>
                    </fieldset>
                    <button type="submit"
                        onClick={evt => {
                            // Prevent form from being submitted
                            evt.preventDefault()

                            const thisClass = {
                                title: currentClass.title,
                                description: currentClass.description,
                                time: currentClass.time,
                                date: currentClass.date,
                                instructor: localStorage.getItem("l2l_token"),
                                skillId: parseInt(currentClass.skillId),
                                tags: currentClass.tags.split(" "),
                            }

                            console.log(thisClass)

                            // Send POST request to your API
                            createClass(thisClass)
                                .then(() => navigate("/classes"))
                        }}
                        className="btn btn-dark">Create</button>
                </form>
            )
}