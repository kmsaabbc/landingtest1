function onHome(){
    const location = document.querySelector("#home").offsetTop;
    window.scrollTo({top:location,behavior:"smooth"});
}
function onAutoRecord(){
    const location = document.querySelector("#auto-record").offsetTop;
    window.scrollTo({top:location,behavior:"smooth"});
}
function onMultiPlatform(){
    const location = document.querySelector("#multi-platform").offsetTop;
    window.scrollTo({top:location,behavior:"smooth"});
}
function onReport(){
    const location = document.querySelector("#report").offsetTop;
    window.scrollTo({top:location,behavior:"smooth"});
}
function onContact(){
    const location = document.querySelector("#contact").offsetTop;
    window.scrollTo({top:location,behavior:"smooth"});
}
function onSendEmain(){

}

let imageIndex = 0;
const imgList = ["/img/mainimg-01.png","/img/mainimg-02.png","/img/mainimg-03.png"]
function changeMainImage(){
    const mainImage = document.querySelector("#main-image");
    mainImage.src = imgList[imageIndex];
    imageIndex++;
    if(imageIndex >= imgList.length)
        imageIndex=0;
}

setInterval(changeMainImage,5000);