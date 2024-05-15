const readlineSync=require('readline-sync');
const fs=require('fs');
const path=require('path');

function cesarCipher(str,idx){
    let result="";
    //let alphabet="abcdefghijklmnñopqrstuvwxyz";
    let alphabetMayusc="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    for(let letter of str){
        let index=alphabetMayusc.indexOf(letter);
        letter=letter.toUpperCase();
        if(index!== -1){
            let newIndex=(index + idx)%26;
            let newLetter=alphabetMayusc[newIndex];
            result +=newLetter;
        }
        console.log("letter",letter);
        console.log("index",index);
    }
   return result;
}
console.log(cesarCipher("hola",2));
//console.log(cesarCipher("hola",2));

function registerUser(){
    let name=readlineSync.question("Enter your name: ")
        let password=readlineSync.question("Enter your password:" );
        let passwordCifrada=cesarCipher(password,7);
        addUser(name,passwordCifrada);
        console.log("Welcome "+name);
        console.log("Password "+password);
        console.log(passwordCifrada);     
}

function addUser(userName,passwordCifrada){
    const filePath=path.join(__dirname,'users.json');
    let users=[];
    console.log(userName,passwordCifrada);
    fs.readFile(filePath,(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            users=JSON.parse(data);
        }
        users.push({userName,passwordCifrada});
        fs.writeFile(filePath,JSON.stringify(users),(err)=>{
            if(err){
            console.log("Error adding user");
        }else{
            console.log("User added");
        }

        })
    })
}

function login(){
    let userName=readlineSync.question('Enter your name: ');
    let password=readlineSync.question('Enter your password: ');
    const filePath=path.join(__dirname,'users.json');
    fs.readFile(filePath,(err,data)=>{
        if(err){
            console.log("Error reading file");
        }
        else{
           for(let usersNames of JSON.parse(data)){
            if(userName.userName!==userName && cesarCipher(password,7) !== usersNames.passwordCifrada){
                console.log('Welcome',userName);
            }
            else{
                console.log("Wrong user or password");
            }
           }
        }
    })
}

//registerUser();
login();