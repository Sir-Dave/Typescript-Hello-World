// WORKING WITH UNION TYPES

function kgToLbs(weight: number | string): number{
    if( typeof weight === "number")
        return weight * 2.2

    return parseInt(weight) * 2.2
}

var w1 = kgToLbs(20)
var w2 = kgToLbs("30kg")

console.log(`Equivalent value is ${w1} pounds`)
console.log(`Equivalent value is ${w2} pounds`)

//TYPES WITH INTERSECTION

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable

var textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// LITERAL TYPES
type Quantity = 50 | 100
let quantity: Quantity = 50

type Metric = "cm" | "inch"
var metric: Metric = "cm"

// NULLABLE TYPES

function greet(name: string | null){
    if (name)
        console.log(`Hello ${name}`)

    else console.log("Hola!")
}

greet("David")
greet(null)

// OPTIONAL CHAINING
type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null{
    return id === 0 ? null : { birthday: new Date()} 
}

var customer = getCustomer(1)
console.log(customer?.birthday?.getFullYear())