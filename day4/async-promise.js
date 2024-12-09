// states:
// 1 Pending
// 2 resolve
// 3 reject
//    catch
// finally   

// promise chaining using .then()

const requirementsPromise={
    hardware:['computer','internet'],
    tools:['nodejs','vscode'],
    techStack:['javscript','cypress']
}

const isEnrolled=true;
const train=((time,orderOfTraining)=>{
    return new Promise((resolve,reject)=>{
        if(isEnrolled){
            setTimeout(()=>{
                resolve()
                console.log('Enrollment completed')
                orderOfTraining()
            },time)
        }else{
            reject('not enrolled')
        }
    })
})

train(2000,()=>{
    console.log('Training started')
}).then(()=>{
    console.log(`make sure following prerequisite (${requirementsPromise.hardware[0]} and ${requirementsPromise.hardware[1]}) is present for ${requirementsPromise.techStack[0]} and ${requirementsPromise.techStack[1]} training`)
}).then(()=>{
    console.log(`install ${requirementsPromise.tools[0]} and ${requirementsPromise.tools[1]}`)
}).then(()=>{
    console.log(`learn and practice ${requirementsPromise.techStack[0]}`)
}).then(()=>{
    console.log(`install ${requirementsPromise.techStack[1]}`)
}).then(()=>{
    console.log(`learn and practice ${requirementsPromise.techStack[1]}`)
}).then(()=>{
    console.log('Training completed')
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log('Thank you for your interest')
})