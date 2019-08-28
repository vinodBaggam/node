const file1 =  require("./file1");
const utils =  require("./utils");
console.log(file1.myname1);
console.log(file1.myname2);

console.log(utils.add(10,2));
console.log(utils);
console.log("*** DEMO Command Line Arguments");
console.log("add sub mul divide");
console.log(process.argv[2]);
if(process.argv[2]==="add"){
    console.log(utils.add(10,2));
}else if(process.argv[2]==="sub"){
    console.log(utils.sub(10,2));
}else if(process.argv[2]==="mul"){
    console.log(utils.mul(10,2));
}else if(process.argv[2]==="divide"){
    console.log(utils.divide(10,2));
}

console.log(process);