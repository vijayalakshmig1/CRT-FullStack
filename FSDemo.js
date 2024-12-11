const fs = require('fs');
//fs.readFile('abc.txt',(err,data)=>{
  //  if(err)console.log(err);
//    else console.log(data.toString());
//})

//fs.writeFile('abc.txt',"EveryBody rock ur body ",(err)=>{
//    if(err)console.log(err);
 //   else console.log("Successfullyy Updated");
//})
//fs.unlink('abc.txt',(err)=>{
 //   if(err)console.log(err);
 //   else console.log("Deleted");
//})
fs.rename('abc1.txt','def.txt',(err)=>{
    if(err)console.log(err);
    else console.log("Renamed");
})