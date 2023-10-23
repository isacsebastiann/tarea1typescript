/*string*/
let typeData: any ="Typescript";
if(typeof typeData === "string"){
    console.log("is a string");
    }
/*number*/
typeData=10;
if(typeof typeData==="number"){
    console.log("is a number");
    }
/*boolean*/
typeData="true";
if(typeof typeData==="boolean"){
    console.log("is boolean");
    }
/*undefined*/
typeData=undefined;
if(typeof typeData==="undefined"){
    console.log("is undefined");
    }
/*object*/
typeData={name:"Sebastian",age:20};
if(typeof typeData==="object"){
    console.log("is object");
    }
/*null*/
typeData=null;
if(typeData===null){
    console.log("is null");
    }
/*function*/
const isFunction=(a:number,b:number):number=>{return a+b;}
if(typeof isFunction==="function"){
    console.log("is function");
    }
/*array*/
typeData=[25,50,75];
if(Array.isArray(typeData)){
    console.log("is array");
    }
/*name:*/
typeData="string";
console.log(`Isaac Guerra ${typeData} is "${typeof typeData}"`);

