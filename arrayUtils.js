function myLengthFunction(arr){

    let length = 0
    for(i in arr)
        length++
    
    return length
}

function myMapFunction(arr, callbackFunction){

    let newArray = [];

    for(let i=0; i<myLengthFunction(arr); ++i){
        newArray.push(callbackFunction(arr[i]))
    }

    return newArray
}

function myFilterFunction(arr, callbackFunction){

    let newArray = [];

    for(let i=0; i<myLengthFunction(arr); ++i){
        if(callbackFunction(arr[i]) === true){
            newArray.push(arr[i])
        }
    }

    return newArray
}

function myReduceFunction(arr, callbackFunction, num){

    let total = (num === undefined)?arr[0]:num 

    for(let i=(num === undefined)?1:0; i<myLengthFunction(arr); ++i){
        total = callbackFunction(total, arr[i])
    }

    return total
}

function myForEachFunction(arr, callbackFunction){

    for(let i=0; i<myLengthFunction(arr); ++i){
        callbackFunction(arr[i])
    }
}

let baseArray = [18, 17, 16, 21, 25, 50]
document.getElementById("base-array").innerHTML = baseArray

let mappedArray = baseArray.map((num) => num + 2)
document.getElementById("inbuilt-map").innerHTML = mappedArray
let myMappedArray = myMapFunction(baseArray, (num)=>num+2)
document.getElementById("map").innerHTML = myMappedArray

let filteredArray = baseArray.filter((num) => num % 5 === 0)
document.getElementById("inbuilt-filter").innerHTML = filteredArray
let myFilteredArray = myFilterFunction(baseArray, (num)=> num % 25 ===0 )
document.getElementById("filter").innerHTML = myFilteredArray

let reducedTotal = baseArray.reduce((total, num)=>total+num, 9)
document.getElementById("inbuilt-reduce").innerHTML = reducedTotal
let myReducedTotal = myReduceFunction(baseArray, (total, num)=>total + num, 9)
document.getElementById("reduce").innerHTML = myReducedTotal

function setPageAsActive(whichTabIsActive){

    document.getElementById("inbuiltTab").className = "inactive"
    document.getElementById("manualTab").className = "inactive"
    document.getElementById("inbuilt").style.display = "none"
    document.getElementById("manual").style.display = "none"

    if(whichTabIsActive === "inbuiltTab"){
        document.getElementById(whichTabIsActive).className = "active"
        document.getElementById("inbuilt").style.display = "block"
        return
    }
    else{
        document.getElementById(whichTabIsActive).className = "active"
        document.getElementById("manual").style.display = "block"
    }
}

setPageAsActive("inbuiltTab")
// console.log('Base Array: '+ baseArray)

// console.log('Output of inbuilt map array function '+ mappedArray)
// console.log('Output of manually built map array function '+ myMappedArray)

// console.log('Output of inbuilt filter array function '+ filteredArray)
// console.log('Output of manually built filter array function '+ myFilteredArray)

// console.log('Output of inbuilt reduce array function '+ reducedTotal)
// console.log('Output of manually built reduce array function '+ myReducedTotal)

// console.log('In built forEach function: -')
// baseArray.forEach((num)=> console.log(num-3))

// console.log('Manually built forEach function: -')
// myForEachFunction(baseArray, (num)=> console.log(num-3))