const number = 15;

let promise = new Promise((resolve, reject) => {
    if(number > 10){
        return resolve(`Numero ${number} maggiore di 10`);
    }   else {
        return reject(`Numero ${number} non maggiore di 10`);
    }
})

promise
    .then((number) => console.log(number))
    .catch((err) => console.error(err))
