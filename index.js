// Add your code here


const body = document.querySelector('body')

const submitData = ((userName, userEmail) =>{
    
    const objectConfig = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            'name': userName,
            'email': userEmail
        })
    }
    // debugger

    return fetch('http://localhost:3000/users', objectConfig)
    .then(response => response.json())
    .then(object =>{
        addToDom(object)
    })
    .catch(error =>{
        alert("Unauthorized Access")
        document.body.innerHTML = error.message
    })
})

const addToDom = (object) => {
    document.body.innerHTML = object.id
}
