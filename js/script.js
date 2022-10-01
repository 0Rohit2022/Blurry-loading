const backgroundEl = document.querySelector(".background");
const loadingPerEl = document.querySelector(".loading-percentage");


let load = 0;
let timer = setInterval(updatePercentage , 30);

function updatePercentage() {
    load++
    if(load > 99){
        clearInterval(timer);
    }
    // console.log(load)
    loadingPerEl.innerHTML = `${load}%`;
    loadingPerEl.style.opacity = scale(load,0,100,1,0);
    backgroundEl.style.filter = `blur(${scale(load,0,100,30,1)}px)`
}

const scale = (num , in_min , in_max, out_min , out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min ) + out_min
}