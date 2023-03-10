import React, { useEffect, useState } from "react"

export const NewClass = () => {




    return (
                <form>
                    <h2>New Class</h2>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="title">Title:</label>
                            <input
                                onChange={
                                    (evt) => {
                                        console.log("handling title")
                                        // const copy = {...employee}
                                        // copy.name = evt.target.value
                                        // change(copy)
                                    }
                                }
                                required autoFocus
                                type="text"
                                className="form-control"
                                placeholder="Full name"
                                />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="skillLevel">Skill Level:</label>
                            <input
                                onChange={
                                    (evt) => {
                                        console.log("handling skill level")
                                        // const copy = {...employee}
                                        // copy.specialty = evt.target.value
                                        // change(copy)
                                    }
                                }
                                required autoFocus
                                type="text"
                                className="form-control"
                                placeholder="Technical specialty"
                                />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="time">Time of the Class: </label>
                            {/* <input type="text" name="time" placeholder="HH:MM" required autoFocus className="form-control"
                                value={currentEvent.time}
                                onChange={changeEventState}
                            /> */}
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="date">Date of the class: </label>
                            {/* <input type="text" name="date" placeholder="YYYY-MM-DD" required autoFocus className="form-control"
                                value={currentEvent.date}
                                onChange={changeEventState}
                            /> */}
                        </div>
                    </fieldset>
                    <fieldset>
                    <div className="form-group">
                        <label htmlFor="tag">Tag:</label>
                        {/* <input
                        required
                        id="description"
                        type="text"
                        className="form-control"
                        placeholder="What is it?"
                        value={userChoices.description}
                        onChange={handleInputChange}
                        /> */}
                    </div>
                    </fieldset>
                    {/* <button onClick={hireEmployee} className="btn btn-primary">
                        Hire Employee
                    </button> */}
                </form>
            )
}