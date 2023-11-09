const isLogged = true;

function isLoggedIn(isLogged) {
    return new Promise ((resolve, reject) => {
        if (isLogged == true){
            resolve(Math.random())
        } else {
            reject(new Error("Not logged in!"));
        }
    })
}

function getDetails(number){
    return new Promise ((resolve, reject) => {
        if (number > 0.5){
            resolve({name: "John", age: 24})
        } else {
            reject(new Error("Error 2!!"));
        }
    })
}

function getFullDates(getDetails){
    return getDetails
}

isLoggedIn(isLogged)
.then (getDetails)
.then (getFullDates)
.then ((val) => console.log(val))
.catch ((err) => console.error(err))