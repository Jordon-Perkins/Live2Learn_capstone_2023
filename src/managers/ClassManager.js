export const getClasses = () => {
    return fetch("http://localhost:8000/classes", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("l2l_token")}`
        }
    })
        .then(response => response.json())
}

export const createClass = (this_class) => {
    return fetch("http://localhost:8000/classes", {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("l2l_token")}`,
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(this_class)
    })
        .then(res => res.json())
}

export const getClass = (id) => {
    return fetch(`http://localhost:8000/classes/${id}`,{
        headers:{
            "Authorization": `Token ${localStorage.getItem("l2l_token")}`
        }
    })
    .then(res => res.json())
};

export const updateClass = (id, this_class) => {
    return fetch(`http://localhost:8000/classes/${id}`, {
    method: "PUT",
    headers: {
        "Authorization": `Token ${localStorage.getItem("l2l_token")}`,
        "Content-Type": "application/json"
    },
    body: JSON.stringify(this_class)
    })
};

export const deleteClass = (id) => {
    return fetch(`http://localhost:8000/classes/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("l2l_token")}`,
        }
    })
};


// export const leaveClass = thisClassId => {
//     // TODO: Write the DELETE fetch request to leave an event
//     return fetch(`http://localhost:8000/classes/${thisClassId}/leave`, {
//         method: "DELETE",
//         headers: {
//             "Authorization": `Token ${localStorage.getItem("l2l_token")}`,
//         }
//     })
//   }
  
//   export const joinClass = thisClassId => {
//       // TODO: Write the POST fetch request to join and event
//       return fetch(`http://localhost:8000/classes/${thisClassId}/signup`, {
//         method: "POST",
//         headers:{
//             "Authorization": `Token ${localStorage.getItem("l2l_token")}`,
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify(thisClassId)
//     })
//         .then(res => res.json())
//   }