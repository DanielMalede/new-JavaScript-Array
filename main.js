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

// let usernames = document.getElementById("userNames")
// let myArray = []
// function createStudentNames() {
//     if (myArray.length<10) {
//         myArray.push(usernames.value)
//         usernames.value = ""
//     }
//     console.log(myArray.join("-")); 
// }

// let numbersArray = []
// function createRandomArrayAges() {
//     for (let i = 0; i < 10; i++) {
//             numbersArray.push(Math.floor(Math.random()*121))
//     }
//     console.log(numbersArray.sort((a,b)=>a-b));
// }
// createRandomArrayAges()

function printCompanyName() {
    let h6_text = document.getElementById("h6_text")
    let div_photos = document.getElementById("div_photos")
    let companyName = ["Dell","Malam-Team","intel","Rafael","Chack Point","mobileye","IBM","Microsoft","samsung","AMD"]
    for (let i = 0; i < companyName.length; i++) {
        h6_text.innerText += companyName[i]+ "\n"
    }
    let arrayPhotos = 
    [
    "https://yt3.ggpht.com/ytc/AKedOLQ3PoLUWrwMgqg8K_XgWTvbInXBSDpXdXgex9mc=s900-c-k-c0x00ffffff-no-rj",
    "https://media.istockphoto.com/vectors/music-abstract-concept-vector-id187851806?k=20&m=187851806&s=612x612&w=0&h=FwXEujS4P4dvL6XHNv2CtrkxLzIznWCKyGAbgey8ghs=",
    "https://i.scdn.co/image/ab67706f0000000308505494b55becef096c4581",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPr7ifB44-IcwaMzgWpXwWyIuzq0LtWXLyV3FduAUkBAlJ1KqmECiOlHAXVKPPoeE_eI&usqp=CAU",
    "https://media.istockphoto.com/photos/word-cloud-concept-music-related-picture-id487883303",
    "https://media.istockphoto.com/vectors/words-cloud-of-music-vinyl-record-shape-vector-id857927464",
    "https://i1.wp.com/dailytrojan.com/wp-content/uploads/2020/03/C917581E-A6E7-4DBE-A59B-6411F5D29879.jpeg.jpg?fit=879%2C1030",
    "https://www.udiscovermusic.com/wp-content/uploads/2020/12/Xmas2020_soul_1000x600-1-1000x600.jpg",
    "https://i.scdn.co/image/ab67616d0000b273b42f30fd1464e6a8520b44b5",
    "https://musiconhold.com.au/wp-content/uploads/2017/07/web2_music-genre_RnBSoul.jpg"]
    for (let i = 0; i < arrayPhotos.length; i++) {
        div_photos.innerHTML += "<img src='"+ arrayPhotos[i] +"'style='width: 10vw;'>"+"\n"   
    }
}
printCompanyName()

