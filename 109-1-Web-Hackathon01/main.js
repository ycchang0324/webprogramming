var cells = document.getElementsByClassName("date")  
var input = document.getElementById("cal-input")
var color = document.getElementById("cal-color")
var button = document.getElementById("cal-button")
input.value = ''
color.value = '#b0b0b0'         

var where = 0;

function insertData() {

    if (where != 0 && input.value != "") {  //�p�G��J����D�s�B��J��ƫD��
        inputData = input.value;            //�N�����Winput.value assign�i�ܼƤ�
        input.value = "";                   //�����Winput.value�ȲM��
  
        insertDate = document.getElementById(where); //��X�ninsert ��ƪ����
        innerText = document.createElement("DIV");   //�Ыؤ@�Ӧs��ƪ�div
        innerText.innerHTML = inputData;             //div������O�ϥΪ̪�input.value
        innerText.style.color = color.value;         //�C��O�ϥΪ̿�ܪ��C��
        insertDate.appendChild(innerText);           //�Ndiv�[�i������U         
        where = 0;    //���J����k�s

    }
    var inputData = "";  //��inputData�M��
}



document.addEventListener('click', function (e) {          //onclick�Ϊ��禡
    
    if (e.target && e.target.className == 'date') {       //�p�Gclass�Odate

        where = e.target.id;                              //��id���X
        clearBorder();                                    //�M���Ҧ����
    };

    /*�n��J��ƪ��������خئ�*/
    if (e.target && e.target.id == 'cal-input') {

        clearBorder();
        focusItem = document.getElementById(where);
        focusItem.style.border = "thick solid #000000";   
    }
});

input.addEventListener('keyup', event => {
    if (event.keyCode == '13' & event.target.value !== '') {            //����Uenter��B��ƫD�Ů�
        insertData();                                                   //�N��J��ƶǰe�i�x�s��ƪ��禡��  
        clearBorder();                                                  //��Ҧ���زM��
    }
});

/*�R���Ҧ���ت��禡*/
function clearBorder() {
    for (i = 4; i <= 31; i++) {
        focusItem = document.getElementById(i);   
        focusItem.style.border = "none";                           //�N�Ҧ��������س��]��none
    }
}

//Sets the page's theme. No need to modify
var themeButton = document.getElementsByClassName("ChooseTheme")
for(var i=0; i<themeButton.length; ++i) {
    themeButton[i].addEventListener('click', e => {
        document.body.setAttribute('class', e.target.id)
    }, false)
}