const fs = require("fs");
const chalk = require("chalk");
const addNotes = (title,body)=>{


};

const writeNotes = (notes) =>{
     notes = JSON.parse(notes);
     const notesString = JSON.stringify(notes);
     try{
       fs.writeFileSync("data.json",notes);
       console.log(chalk.inverse.green("Success in writing"));
     }catch(e){
       console.log(chalk.inverse.red("Error in writing"));
     }


};
const loadNotes = () =>{
   try{
    fs.readFilesync("data.json",(error,buffredData)=>{
      const notes = JSON.parse(buffredData.toString());
      return notes;
    });
  }catch(e){
    return [];
  }

};

console.log(writeNotes([{title:"course",body:"NODE"}]));
console.log(loadNotes());
