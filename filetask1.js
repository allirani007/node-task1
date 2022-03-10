const fs=require('fs');

fs.readdir("./myfiles",(err,files)=>{  // files data is in array format
    console.log(files);
}) 
fs.readdir("./myfiles",(err,files)=>{
    files.map((val)=>
    fs.readFile(`./myfiles/${val}`,"utf-8",(err ,content)=> {
        console.log("📚",content);

    })
    );
});

