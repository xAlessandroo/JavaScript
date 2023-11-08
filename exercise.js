function repeatHello(callback){
    setInterval(callback, 1000);
}

let sayHello = () => console.log("Hello");

repeatHello(sayHello)