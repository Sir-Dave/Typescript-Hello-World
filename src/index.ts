// ENUMS
const enum Size{ Small = 1, Medium, Large}
let mySize = Size.Large
//console.log(mySize)

// FUNCTIONS WITH DEFAULT PARAMETERS
function calculateTax(income: number, taxYear: number = 2022): number{
    if (taxYear < 2022)
        return income * 0.2

    return income * 0.3;
}
var tax = calculateTax(175_000, 2021)
//console.log(`Tax on my income is ${tax}`)


// OBJECT TYPES IN TYPESCRIPT
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}


var employee: Employee = {
    id: 1, 
    name: "David Abiola",
    retire: (date: Date) =>{
        console.log(date) 
    }
}
