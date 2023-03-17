export const getClasses = () => {
    return fetch("http://localhost:8000/classes/students/userId", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("l2l_token")}`
        }
    })
        .then(response => response.json())
}

export const getAttendingClasses = () => {
    return fetch("http://localhost:8000/classes_attending", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("l2l_token")}`
        }
    })
        .then(response => response.json())
}