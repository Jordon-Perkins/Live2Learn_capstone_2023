export const getSkills = () => {
    return fetch("http://localhost:8000/skills", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("l2l_token")}`
        }
    })
        .then(response => response.json())
}

export const getSkill = (id) => {
    return fetch(`http://localhost:8000/skills/${id}`,{
        headers:{
            "Authorization": `Token ${localStorage.getItem("l2l_token")}`
        }
    })
    .then(res => res.json())
};