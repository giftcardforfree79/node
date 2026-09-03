const checkLogin=()=>{ return new Promise(
    (resolve,reject)=>{
        let loggedIn=true;
        if(loggedIn){
            resolve("welcome you are logged in ")
        }
        else{
            reject("sorry you are not logged in")
        }
    }    
)
}