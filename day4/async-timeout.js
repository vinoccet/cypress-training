// Steps:
// Enrolled for training
// Training started
// make sure following prerequisite (computer and internet) is present for javascript and cypress training
// install node and vscode
// learn and practice javascript
// install cypress
// learn and practice cypress
// Training completed

// Not enrolled 
// Thankyou

const requirements={
    hardware:['computer','internet'],
    tools:['nodejs','vscode'],
    techStack:['javscript','cypress']
}

const training=(actualTraining)=>{
setTimeout(()=>{
    console.log('Enrollment completed')
    actualTraining()
},2000 )

}

const actualTraining=()=>{
setTimeout(()=>{
    console.log('Training started')
    setTimeout( ()=>{
        console.log(`make sure following prerequisite (${requirements.hardware[0]} and ${requirements.hardware[1]}) is present for ${requirements.techStack[0]} and ${requirements.techStack[1]} training`)
        setTimeout( ()=>{
            console.log(`install ${requirements.tools[0]} and ${requirements.tools[1]}`)
            setTimeout( ()=>{
                console.log(`learn and practice ${requirements.techStack[0]}`)
                setTimeout(()=>{
                    console.log(`install ${requirements.techStack[1]}`)
                    setTimeout(()=>{
                        console.log(`learn and practice ${requirements.techStack[1]}`)
                        setTimeout(()=>{
                            console.log('Training completed')
                        },1000)
                    },1000)
                },1000)
            },2000)
        },1000)
    },2000)
},0)
}


training(actualTraining)