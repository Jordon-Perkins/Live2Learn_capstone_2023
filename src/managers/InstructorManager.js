export const getInstructingClasses = () => {
    return fetch("http://localhost:8000/classes_instructing", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("l2l_token")}`
        }
    })
        .then(response => response.json())
}

export const getInstructors = () => {
    return fetch("http://localhost:8000/instructors", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("l2l_token")}`
        }
    })
        .then(response => response.json())
}