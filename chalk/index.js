const chalk = require("chalk");
console.log(chalk.bgRed(chalk.bold(chalk.blue('Hello world!'))))
;
console.log(chalk.green.bold.bgBlue("Welcome"));

console.log(chalk.green.bold.inverse.bgBlue("Welcome"));


console.log(chalk.keyword('orange')('Yay for orange colored text!'));