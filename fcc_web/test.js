function generateSentence(desc,arr){
    let baseString =`The ${arr.length} ${desc}`
    const lastIndex=arr.length-1
    for(let i=0;i<arr.length;i++){
        if(i == lastIndex)
            baseString+=arr[i]
        else{
            baseString+=arr[i]+","
        }
    }
    return baseString
}

// const sentence=generateSentence("highest mountain",["Mount Everest", "K2"])

const sentence=generateSentence("first alphabets ", ["a","b","c","d","e","f","h"])

console.log(sentence)