const mypromise=new Promise((resolve, reject) =>{
    let marks=78;

    if(marks > 33){
        resolve("pass");
    }
    else {
    reject("fail");
    }
})
mypromise.then((msg) => console.log(msg)).catch((error)=> console.log("some error occured", error));