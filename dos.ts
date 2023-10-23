function sumOrConcaten(dateOne: number | string, dateTwo: number | string): number | string {
    if (typeof dateOne === 'number' && typeof dateTwo === 'number') {
        return dateOne + dateTwo;//numeros se suman
    } else if (typeof dateOne === 'string' && typeof dateTwo === 'string') {
        return dateOne + dateTwo;// si son string se concatenan
    } else {
        // error
        return "ni uno ni otro *error.";
    }
}
//TERMINAL
const dateOne: number = 10;
const dateTwo: number = 10;
const dateStringOne: string = "Hola";
const dateStringTwo: string = "Typescript";

console.log(sumOrConcaten(dateOne, dateTwo));  
console.log(sumOrConcaten(dateStringOne, dateStringTwo));  
console.log(sumOrConcaten(dateOne, dateStringOne));  
console.log(`Isaac Guerra`);

