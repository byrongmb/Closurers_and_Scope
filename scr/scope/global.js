var hello = 'Hello'
let world = 'Helo World'
const helloWorld = 'Hello World!!'

const anotherFunction = () =>{
    console.log(hello)
    console.log(world)
    console.log(helloWorld)
}


anotherFunction()

/* Mala Práctica*/
const helloWorld = () =>{
    globalVar = 'I am global'
}

helloWorld()
console.log(globalVar)


/* Reasinación de variables*/

const anotherFunction = () =>{
    var localVar = globalVar = 'I m global'
}

anotherFunction()
console.log(globalVar)
