let container = document.getElementById("container");
let count = 25;

function scroller(container) {
    const htmlData = document.getElementById("container").innerHTML
   
     
    console.log("Scrolled")
    console.log(htmlData)
    const p1 = document.createElement("p");
    p1.innerHTML = `Masai Student ${++count}`
    const p2 = document.createElement("p");
    p2.innerHTML = `Masai Student ${++count}`
    const p3 = document.createElement("p");
    p3.innerHTML = `Masai Student ${++count}`
    const p4 = document.createElement("p");
    p4.innerHTML=`Masai Student ${++count}`
   
    container.insertAdjacentElement('beforeend', p1)
    container.insertAdjacentElement('beforeend', p2)
    container.insertAdjacentElement('beforeend', p3)
    container.insertAdjacentElement('beforeend',p4)
    console.log(container.innerHTML)
}
window.addEventListener("scroll", () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
     console.log(clientHeight + scrollTop,scrollHeight)
    if (clientHeight + scrollTop >= scrollHeight)
    {
        setTimeout(() => {
           scroller(container); 
        },300)
        }
        
});