const text = document.querySelector("#text");
const btn= document.querySelector("#btn");
const colorArray = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F',];

const RandomColor = () => {
    let hexCode = '#';
    for(let i = 0; i< 6;i++){
        hexCode+=colorArray[Math.floor(Math.random() * colorArray. length)]
    }
    return hexCode
}

btn.addEventListener('click', () => {
    const colorCode= RandomColor();
    text.innerText = colorCode;
    document.body.style.backgroundColor= colorCode;
})




