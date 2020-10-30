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

    fetch("http://localhost:3000/users", objectConfig)
    .then(response => response.json())
    .then(object =>{
        addToDom(object)
    })
    .catch(error =>{
        alert("Something Went Wrong!")
        console.log(error.message)
        const p = document.createElement('p')
        p.innerText = error.message
        body.append(p)
    })

    return fetch()


})

const addToDom = (object) => {

    const h1 = document.createElement('h1')
    h1.innerText = object.id
    body.append(h1)
    
}

submitData("Kanye", "yeezy@gmail.com")
