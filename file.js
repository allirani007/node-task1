const fs=require('fs');
const quoto ="Live more worry Less";
fs.writeFile("./awesome.html",quoto,(err)=>{
    console.log("completed writing!!")
})
const quoto1=" have a nice day"
for (let i = 1; i <= 10; i++){
fs.writeFile(`./backup/text${i}.html`,quoto,(err)=>{
    console.log("completed writing!!")
})}

quoto3 = "Work hard live happy";

const n= process.argv[2];
for (let i = 1; i <= n; i++){
    fs.writeFile(`./backup/text${i}.html`,quoto3,(err)=>{
        console.log("completed writing!!")
    })}
fs.readFile("cool1.txt","utf-8",(err,content)=>{
    if(err)
    {
        console.log("⚡" , err)
    }
    console.log("🌁",content);
});
//relative file path
fs.readFile("./cool.txt", "utf-8", (err, content) => {
    if (err) {
      console.log("❌ ", err);
    }
    console.log("📚 ", content);
  });
const niceQuote="Make everyday a littel less ordinary"
  fs.appendFile("./nice.txt",niceQuote,(err)=>{
    console.log("appended completed!!")
});
const niceQuote1="Make everyday a littel less ordinary"
fs.appendFile("./nice.txt", niceQuote1, (err) => {
    console.log("Updated file !!! 😊👍");
  });
fs.unlink("nice.txt",(err)=>{
    if (err) {
        console.log("❌ ", err);
      }
      console.log("📚 ", "file deleted");
    });
 fs.readdir("./backup",(err,files)=>{  // files data is in array format
     console.log(files);
 }) 
 fs.readdir("./backup",(err,files)=>{
    files.map((val)=>
    fs.unlink(`./backup/${val}`,(err)=> {
        console.log("deleted file");

    })
    );
});
        //console.log(files);



// fs.readdir("./backup", (err, files) => {
//     // console.log(files);
//     files.forEach((fileName) =>
//       fs.unlink(`./backup/${fileName}`, (err) => {
//         console.log("Deleted file!!! ✨");
//       })
//     );
//   });
  