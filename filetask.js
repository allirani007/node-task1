const { time } = require('console');
const fs=require('fs');
const Path = require('path')
const today ="\n Date &Time :" + new Date()+"\n";
const path = './Date-time.txt'
if(fs.existsSync(path)){
    fs.appendFile("./Date-time.txt",today,(err)=>{
        console.log("completed adding new date &time!!");
    })
}
else
{
fs.writeFile("./Date-time.txt",today,(err)=>{
    console.log("completed writing ✔✔✔!!")
})
}

