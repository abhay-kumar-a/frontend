import React from 'react'

const LocalStorage = () => {
    localStorage.clear()
    sessionStorage.clear()

    // set itmes into local storage
    localStorage.setItem("name", "Abhay Kumar")
    localStorage.setItem("age", "29")

    // get items from local storage
    const name = localStorage.getItem("name")
    const age = localStorage.getItem("age")

    console.log(name, age)

    // remove items from local storage
    // localStorage.removeItem("name")
    // localStorage.removeItem("age")

    //store object -> and localstorage only store string
    const user = {
        name: "Abhay Kumar",
        age: 29,
        email: "abhay@gmail.com"
    }
    
    localStorage.setItem("user", JSON.stringify(user))
    const storedUser = JSON.parse(localStorage.getItem("user"))
    console.log(storedUser)


    return (
        <div>
            <h1>LocalStorage</h1>
        </div>
    )
}

export default LocalStorage