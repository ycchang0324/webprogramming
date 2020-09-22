let image = [
    "https://www.crazybirdfood.com/image/cache/catalog/seafood/AA2-1200x1200.jpg",   
    "https://y3.yooho.com.tw/images/201709/goods_img/744_G_1506729581635.jpg",
    "https://pic.pimg.tw/borntoshop/1505290211-334745832_l.jpg",
    "https://img.ruten.com.tw/s1/4/49/63/21636520326499_443.jpg",
    "https://cdn.hk01.com/di/media/images/2919592/org/f2fbd5fc56d87c9a91005e210b8040a8.jpg/fw1DJzTPsN58gK2VUADPhug79gmtLJz9gMbtx4DG7cc?v=w1280r16_9"
];


let pointer = 2;

function previousImg() {
    if ( pointer > 0 ) {
        pointer--;
        document.getElementById("display").src = image[ pointer ];   
    }
    changeOpacity();
    document.getElementById("url").innerHTML = image[pointer];   

}

function nextImg() {
    if ( pointer < 4 ) {
        pointer++;
        document.getElementById("display").src = image[ pointer ];
    }   
    changeOpacity();
    document.getElementById("url").innerHTML = image[pointer]; 
}

function changeOpacity() {
    if ( pointer == 0 ) {
        document.getElementById("previous").style = "opacity:50%";
        document.getElementById("next").style = "opacity:100%";
    }
    else if ( pointer == 4 ) {
        document.getElementById("previous").style = "opacity:100%";
        document.getElementById("next").style = "opacity:50%";
    }
    else {
        document.getElementById("previous").style = "opacity:100%";
        document.getElementById("next").style = "opacity:100%";
    }   
}

