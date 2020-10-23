function insertData() {
    alert("hello");
}
let foodType = "all";
let restaurantList = [];
const restaurantDetail = {
    id: ["a-yin", "five-nine", "i-am-pasta", "a-li-mama", "ntu-beef-noodles", "lazy-tai", "four-surface", "fong-chen", "dao-curry", "da-li", "seventy-two",
        "small-west", "wen-tun-wu-jiang","sukiya","ho-chai"],
    restaurant: ["阿英滷肉飯", "五九麵館", "I'm Pasta", "阿里媽媽南洋料理", "台大大聲公牛肉麵", "Lazy 徠集泰", "四面八方", "鳳城燒臘", "稻咖哩", "大李水餃",
        "柒食貳", "小川西堂", "文湯武醬滷味","sukiya平價牛丼","厚宅咖哩"],
    first: [
        ["中風滷肉飯2.0", 110],
        ["五九乾麵配煙燻鴨", 60],
        ["奶油起司蛤蠣麵", 125],
        ["椒麻雞", 120],
        ["燙青菜", 30],
        ["泰式打拋豬飯", 95],
        ["綜合紅油炒手麵", 85],
        ["廣州炒飯", 100],
        ["雙拼咖哩", 250],
        ["韭菜水餃", 5],
        ["現滷雞腿飯", 100],
        ["川西擔擔麵 雙肉", 250],
        ["鴨寶鍋", 85],
        ["牛肉咖哩飯+可樂餅套餐", 159],
        ["犇跑吧牛丼",110]
    ],
    second: [
        ["滷味+豆干", 25],
        ["五九招牌麵配雪花牛鴨血", 80],
        ["奶油蔬菜焗烤飯", 120],
        ["新加坡咖哩牛肉烤餅", 140],
        ["牛肉湯餃", 110],
        ["椒麻炸豆腐", 40],
        ["燙青菜", 30],
        ["招牌三寶飯", 100],
        ["香嫩雞肉咖哩", 150],
        ["高麗菜水餃", 5],
        ["泰式雞塊飯", 100],
        ["北方麻辣泡饃 豬肉", 258],
        ["牛肉鍋", 85],
        ["牛丼青菜套餐", 99],
        ["雞豬雙拼",190]
    ],
    third: [
        ["燙青菜", 40],
        ["怪味蔥醬麵配去骨雞腿排", 80],
        ["墨魚海鮮燉飯", 155],
        ["招牌奶茶", 10],
        ["半筋半肉牛肉麵", 180],
        ["泰式奶茶", 60],
        ["酸辣湯餃(10顆)", 80],
        ["乾炒牛河", 100],
        ["招牌橫濱直火牛肉咖哩", 150],
        ["蛋花湯", 30],
        ["紅茶", -5],
        ["西藏奶茶", 68],
        ["公仔麵", 65],
        ["起司牛丼+可麗餅套餐", 169],
        ["啾西炸雞厚咖哩飯",140]
    ],
    category: ["超值美食", "超值美食", "奢華美食", "小確幸美食", "小確幸美食", "奢華美食", "超值美食", "小確幸美食", "奢華美食", "超值美食", "小確幸美食",
        "奢華美食","超值美食","小確幸美食","奢華美食"],
    map: [
        ["台北市大安區溫州街74巷5弄", "https://ppt.cc/fUM1yx"],
        ["台北市大安區和平東路二段118巷59號", "https://ppt.cc/fELudx"],
        ["台北市大安區和平東路二段118巷50號", "https://ppt.cc/f2UGgx"],
        ["台北市中正區羅斯福路四段136巷1弄3號", "https://ppt.cc/fAPzrx"],
        ["台北市大安區新生南路三段54之6號", "https://ppt.cc/fpz3tx"],
        ["台北市大安區辛亥路二段165號1樓", "https://ppt.cc/fLkLWx"],
        ["台北市大安區復興南路二段340巷10號", "https://ppt.cc/ffkLOx"],
        ["台北市大安區新生南路三段58之3號", "https://ppt.cc/fzgIdx"],
        ["台北市大安區溫州街79號", "https://ppt.cc/fvlHJx"],
        ["台北市大安區和平東路二段118巷54弄35號", "https://ppt.cc/f46vSx"],
        ["台北市大安區溫州街72號", "https://ppt.cc/fqfqFx"],
        ["台北市大安區羅斯福路三段283巷38號", "https://ppt.cc/f7mojx"],
        ["台北市台大小福二樓", "https://ppt.cc/fdn2Bx"],
        ["106台北市大安區羅斯福路三段309號", "https://ppt.cc/fV3fNx"],
        ["台北市大安區辛亥路二段169號","https://ppt.cc/fmTQlx"]
    ],
    fbSrc: [
        "https://ppt.cc/f3gcOx",
        "https://ppt.cc/fSTJGx",
        "https://ppt.cc/f9OO8x",
        "https://ppt.cc/fwqm1x",
        "https://ppt.cc/fEjvrx",
        "https://ppt.cc/ffuONx",
        "https://ppt.cc/fclyPx",
        "https://ppt.cc/fbenix",
        "https://ppt.cc/fxSS4x",
        "https://ppt.cc/facvzx",
        "https://ppt.cc/fUakex",
        "https://ppt.cc/fgk2xx",
        "http://www.wtwj.com.tw/",
        "https://ppt.cc/fPdlRx",
        "https://ppt.cc/fuAj9x"


    ]
        
}



createRestaurant = (id, restaurantName, nameFirst, priceFirst, nameSecond, priceSecond, nameThird, priceThird, category, address, mapSrc, fbSrc) => {

    const restaurant = {
        id: id,
        name: restaurantName,
        photoSrc: "./images/" + id + "__restaurant.jpg",
        food: {
            0: {
                name: nameFirst,
                photoSrc: "./images/" + id + "__food-0.jpg",
                price: priceFirst
            },
            1: {
                name: nameSecond,
                photoSrc: "./images/" + id + "__food-1.jpg",
                price: priceSecond
            },
            2: {
                name: nameThird,
                photoSrc: "./images/" + id + "__food-2.jpg",
                price: priceThird


            }
        },
        category: category,
        address: address,
        mapSrc: mapSrc,
        fbSrc: fbSrc


        
    }
   
    return restaurant;

}
for (
    let i = 0; i < restaurantDetail.id.length; i++) {
    const restaurant = createRestaurant(
        restaurantDetail.id[i],
        restaurantDetail.restaurant[i],
        restaurantDetail.first[i][0],
        restaurantDetail.first[i][1],
        restaurantDetail.second[i][0],
        restaurantDetail.second[i][1],
        restaurantDetail.third[i][0],
        restaurantDetail.third[i][1],
        restaurantDetail.category[i],
        restaurantDetail.map[i][0],
        restaurantDetail.map[i][1],
        restaurantDetail.fbSrc[i]
    );
    restaurantList.push(restaurant);
}


changeChoice = (type) => foodType = type;
categoryColor = (category, text) => {
    switch (category) {
        case "超值美食":
            text.style.color = "#4287f5";
            break;
        case "小確幸美食":
            text.style.color = "#f53b57";
            break;
        case "奢華美食":
            text.style.color = "#9400D3";
            break;
        default:
            console.log("wrong category name!");

    }
}
pickRestaurant = () => {
    const filterArr = restaurantList.filter(restaurant => (restaurant.category == foodType || foodType == 'all'));
    const randomNum = Math.floor((Math.random() * filterArr.length));
    const restaurantSelected = filterArr[randomNum];
    restaurantNode = document.getElementById("restaurant");
    restaurantNode.children[0].innerText = restaurantSelected.category;
    categoryColor(restaurantSelected.category, restaurantNode.children[0]);
    restaurantNode.children[1].innerText = restaurantSelected.name;
    restaurantNode.children[2].src = restaurantSelected.photoSrc; 
    foodNode = document.getElementById("food-root");
    for (let i = 0; i < 3; i++) {
        foodNode.children[i].children[0].innerText = restaurantSelected.food[i].name;
        foodNode.children[i].children[1].src = restaurantSelected.food[i].photoSrc;
        foodNode.children[i].children[2].innerText = "價格： " + restaurantSelected.food[i].price + " 元";
    }
    document.getElementById("map").children[0].innerText = "地址： " + restaurantSelected.address;
    document.getElementById("map").children[1].src = restaurantSelected.mapSrc;
    document.getElementById("map").children[1].hidden = false;

    document.getElementById("comment").children[0].hidden = false;
    document.getElementById("comment").children[0].innerText = "臉書/評論連結";
    document.getElementById("comment").children[0].href = restaurantSelected.fbSrc;
    
        
    buttonNode = document.getElementById("button");
    buttonNode.innerText = "重新選擇"; 
};


document.getElementById("button").onclick = function (e) {
    pickRestaurant();

}

