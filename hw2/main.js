const input = document.getElementById('todo-input');    //��J��

var itemArr = [];    //�x�s��J��ƪ��}�C

var isCompleteArr = [];  //�x�s�ƥ�O�_�w����

var id = 0;     //��Ƭy����

var locate = "all";

document.addEventListener('click', function (e) {
    if (e.target && e.target.className == 'todo-app__item-x') {
       
         removeId = e.target.parentNode.id;
        
        for (var i = 0; i < itemArr.length; i++) {
            if (i == removeId) {
                itemArr.splice(i, 1);
                isCompleteArr.splice(i, 1);
                
            } 
                
                
        }
        updateHTML(locate);
    }
    
    if (e.target && e.target.className == 'todo-app__checkbox-input') {

        completeId = e.target.parentNode.parentNode.id;
        if (isCompleteArr[completeId] == false) {
            e.target.checked = true;
            
            console.log(completeId);
                       
            isCompleteArr[completeId] = 1;
        }
        else {
            e.target.checked = false;
   
            isCompleteArr[completeId] = 0;
        }
        updateHTML(locate);   
    }
});

input.addEventListener('keyup', event => {
    if (event.keyCode == '13' & event.target.value !== '') {              //����Uenter��B��ƫD�Ů�
        var inputData = "";                                               //��ƲM��
        inputData = event.target.value;                                   //�N����x�s��javascript�����ܼ�inputData
        event.target.value = "";                                          //html����ƲM��
        const newItem = createNewItem(inputData);                         //�N��J��ƶǰe�i�Ыطs��ƪ��禡��    
    }
});

function createNewItem(input){

    itemArr.push(input);

    isCompleteArr.push(0);
    
    updateHTML(locate);

}

function truncateList() {
    var node = document.getElementById("todo-list");

    while (node.firstChild) {                        //�e�ݦC������M��
        node.removeChild(node.firstChild);
    }
}

function displayNewList(option) {
    for (i = 0; i < itemArr.length; i++) {
        const itemNode = document.createElement("LI");
        const check_box = document.createElement("DIV");
        const check_box_input = document.createElement("INPUT");
        const check_box_label = document.createElement("LABEL");
        const detail = document.createElement("H1");
        const delete_img = document.createElement("IMG");

        itemNode.className = "todo-app__item";
        itemNode.id = i;

        console.log(check_box_input.checked);
        if (isCompleteArr[i] == 0)
            check_box_input.checked = false;
        else {
            check_box_input.checked = true;
            detail.style.textDecoration = "line-through";
            detail.style.opacity = 0.5;
            detail.style.fontSize = "medium";
        }

        check_box.className = "todo-app__checkbox";
        check_box_input.type = "checkbox";
        check_box_input.className = "todo-app__checkbox-input";
        check_box_input.setAttribute("id", "input" + i);
        check_box_label.setAttribute("for", "input" + i);
        detail.className = "todo-app__item-detail";
        delete_img.className = "todo-app__item-x";
        delete_img.id = "item-x" + i;

        delete_img.src = "./img/x.png";
        detail.innerHTML = itemArr[i];

        itemNode.appendChild(check_box);
        itemNode.appendChild(detail);
        itemNode.appendChild(delete_img);

        check_box.appendChild(check_box_input);
        check_box.appendChild(check_box_label);

        if (option == "complete") {
            if (isCompleteArr[i]) {
                document.getElementById("todo-list").appendChild(itemNode); // append Item   
            }
        }

        if (option == "active") {
            if (!isCompleteArr[i]) {
                document.getElementById("todo-list").appendChild(itemNode); // append Item
            }  
        }

        if (option == "all") {
                document.getElementById("todo-list").appendChild(itemNode); // append Item   
        }
    }

    if (option == "complete") {
        locate = "complete";
        document.getElementById("button-all").style.boxShadow = "none";
        document.getElementById("button-active").style.boxShadow = "none";
        document.getElementById("button-complete").style.boxShadow = "0px 0px 3px gray";
    }
    if (option == "active") {
        locate = "active";
        document.getElementById("button-all").style.boxShadow = "none";
        document.getElementById("button-active").style.boxShadow = "0px 0px 3px gray";
        document.getElementById("button-complete").style.boxShadow = "none";
    }
    if (option == "all") {
        locate = "all";
        document.getElementById("button-all").style.boxShadow = "0px 0px 3px gray";
        document.getElementById("button-active").style.boxShadow = "none";
        document.getElementById("button-complete").style.boxShadow = "none";
    }
}

function updateCount() {
    document.getElementById("todo-total").innerHTML = itemArr.length + " left";
}

function clearComplete() {
    for (let i = 0; i < isCompleteArr.length; i++) {
        if (isCompleteArr[i]) {
            itemArr.splice(i, 1);
            isCompleteArr.splice(i, 1);
            i--;
        }
    }
    updateHTML(locate);   
}

function updateHTML(option) {
    truncateList();
    displayNewList(option);
    updateCount();
}
