var cells = document.getElementsByClassName("date")  
var input = document.getElementById("cal-input")
var color = document.getElementById("cal-color")
var button = document.getElementById("cal-button")
input.value = ''
color.value = '#b0b0b0'         

var where = 0;

function insertData() {

    if (where != 0 && input.value != "") {  //如果輸入日期非零且輸入資料非空
        inputData = input.value;            //將頁面上input.value assign進變數中
        input.value = "";                   //頁面上input.value值清空
  
        insertDate = document.getElementById(where); //找出要insert 資料的日期
        innerText = document.createElement("DIV");   //創建一個存資料的div
        innerText.innerHTML = inputData;             //div的內文是使用者的input.value
        innerText.style.color = color.value;         //顏色是使用者選擇的顏色
        insertDate.appendChild(innerText);           //將div加進日期底下         
        where = 0;    //把輸入日期歸零

    }
    var inputData = "";  //把inputData清空
}



document.addEventListener('click', function (e) {          //onclick用的函式
    
    if (e.target && e.target.className == 'date') {       //如果class是date

        where = e.target.id;                              //把id取出
        clearBorder();                                    //清除所有邊框
    };

    /*要輸入資料的日期用邊框框住*/
    if (e.target && e.target.id == 'cal-input') {

        clearBorder();
        focusItem = document.getElementById(where);
        focusItem.style.border = "thick solid #000000";   
    }
});

input.addEventListener('keyup', event => {
    if (event.keyCode == '13' & event.target.value !== '') {            //當按下enter鍵且資料非空時
        insertData();                                                   //將輸入資料傳送進儲存資料的函式中  
        clearBorder();                                                  //把所有邊框清除
    }
});

/*刪掉所有邊框的函式*/
function clearBorder() {
    for (i = 4; i <= 31; i++) {
        focusItem = document.getElementById(i);   
        focusItem.style.border = "none";                           //將所有日期的邊框都設為none
    }
}

//Sets the page's theme. No need to modify
var themeButton = document.getElementsByClassName("ChooseTheme")
for(var i=0; i<themeButton.length; ++i) {
    themeButton[i].addEventListener('click', e => {
        document.body.setAttribute('class', e.target.id)
    }, false)
}