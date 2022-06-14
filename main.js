// function orderArray(myArray) {
//     console.log(myArray.sort()); 
    
// }
// orderArray(["ss","vv","rfe","www","aa"])

// function orderArrayNumbers(myArray) {
//     console.log(myArray.sort((a,b)=>a-b)); 
// }
// orderArrayNumbers([55,1,7,9,8,6,3,44,51,15,4,8,1])

// function orderArrayNumbers(myArray) {
//     console.log(myArray.sort((a,b)=>b-a)); 
// }
// orderArrayNumbers([55,1,7,9,8,6,3,44,51,15,4,8,1])

var usernames = document.getElementById("userNames")
var myArray = []
function createStudentNames() {
        myArray.push(usernames.value)

    }
console.log(myArray);