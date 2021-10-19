document.getElementById("grandparent").addEventListener('click', (e) => {
    console.log("Grandparent clicked");
     e.stopPropagation();
},true) //bubbling

document.querySelector("#parent").addEventListener('click', (e) => {
    console.log("Parent clicked");
},true) //bubbling

document.querySelector("#child").addEventListener('click', (e) => {
    console.log("Child clicked");
   
},true) //capturing
