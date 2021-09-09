const promise = new Promise((resolve, reject) =>{
    if  (true){
        resolve('This DOES Work');
    } else{  
        reject ('Error, it DOES NOT Work');
    }
})

const promise2 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 100, 'Welcome!')
})

const promise3 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 1000, 'Subscribe to Our NewsLetter!!')
})

const promise4 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 3000, 'Leave us a Review.')
})

Promise.all([promise, promise2, promise3, promise4])
    .then(values =>{
        console.log(values);
    })

    
promise
.then(result => result + '!')
.then(result2 =>{
    console.log(result2);
})
.catch(() => console.log('error!!'))