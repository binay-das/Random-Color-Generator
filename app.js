let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    let h1=document.querySelector("h1");
    h1.innerText=`rgb(${getRandomColor()})`;
    let div=document.querySelector("div");
    div.style.backgroundColor=`rgb(${getRandomColor()})`;
    div.style.border=`rgb(${getRandomColor()})`;
});
function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color = [red, blue, green];
    return color;
}