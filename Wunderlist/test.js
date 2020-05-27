var checkboxSVG = '<svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;stroke: rgba(0,0,0,0.35);"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg>';
var starSVG = '<svg width="18px" class="task-star" id="task-star" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path> </g> </svg>';
var starckSVG = '<svg width="22px" height="44px" class="star-dd" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path> </g> </svg>';
var checkdeSVG = '<svg class="checkdele" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path> <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path> </g> </svg>';
// Xu ly User-tool when click


document.getElementById('inputTask').addEventListener('keydown', function(e) {
    var text = this.value;

    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        if (text.trim().length > 0) {
            addItem(text);
            // console.log(text);
        }

    }
});

function addItem(text) {
    AddTask(text);
    document.getElementById('inputTask').value = '';
};




function AddTask(text, completed) {



    var list = (completed) ? document.getElementById('completed') : document.getElementById('todo');

    var div = document.createElement("div");
    var atribute = document.createAttribute("draggable");
    div.setAttributeNode(atribute);
    atribute.value = "true";
    div.className = "taskItem";

    //Remove
    var complete = document.createElement('button');
    complete.classList.add('box');
    complete.innerHTML = checkboxSVG;
    // CHECK BOX CLICK DELE

    // box.addEventListener('click', CheckBoxKP);
    div.append(complete);



    complete.addEventListener('click', CheckBoxCl);
    // console.log(complete);



    var divItem = document.createElement("div");
    var span = document.createElement("span");
    divItem.className = "item-wrapper";
    divItem.appendChild(span);
    div.appendChild(divItem);
    span.innerText = text;
    // console.log(span.innerText);
    div.appendChild.innerHTML = starSVG;
    var task = document.getElementsByClassName("taskItem");



    //star

    const d = document.getElementById("D");
    if (d.style.opacity != '1') {
        var star = document.createElement("button");
        star.className = 'star';
        star.innerHTML = starSVG;
        div.appendChild(star);

    } else {
        d.style.opacity = '0';
        var star = document.createElement("button");
        star.className = 'star';
        star.innerHTML = starckSVG;
        div.appendChild(star);
    }

    list.insertBefore(div, list.childNodes[0]);




}


const checkbox = document.getElementsByClassName("box");
for (var i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('click', CheckBoxCl);

}


function CheckBoxCl() {
    var item = this.parentNode;
    var parent = item.parentNode;
    // var valuItem = this.currentTarget;
    var valuStar = item.children[2];
    var value = item.innerText;
    // var id = parent.id;

    console.log(value);


    parent.removeChild(item);
    var ul = document.querySelector('.tasks');
    var li = document.createElement("LI");

    li.className = "deletask";
    // li.innerHTML = this.innerHTML;
    // console.log(this.innerHTML);
    // ul.append("li");

    const div = document.createElement("div");
    // var ul = document.querySelector('.tasks');
    var atribute = document.createAttribute("draggable");
    div.setAttributeNode(atribute);
    atribute.value = "true";
    div.className = "taskItem-dele";
    var box = document.createElement('button');
    box.className = "box1";
    box.innerHTML = checkdeSVG;
    box.addEventListener('click', CheckBoxKP);
    div.append(box);


    var divItem = document.createElement("div");
    divItem.className = "item-wrapper";
    var span = document.createElement("span");
    // console.log(this.getElementsByTagName("span")[0].innerHTML);
    var textnode = document.createTextNode(value);

    span.appendChild(textnode);
    divItem.append(span);

    // div.append(gt);

    var Info = document.createElement("div");
    Info.className = "taskItem-info";
    Info.innerHTML = "6 minutes ago by Vui Tran Thi";
    divItem.append(Info);

    div.append(divItem);
    div.append(valuStar);

    // gia tri star xem là trang hay do



    // div.append(kq);
    var dele = document.getElementsByClassName("deletask");

    li.append(div);
    ul.insertBefore(li, dele[0]);


}


const boxkp = document.getElementsByClassName("box1");
for (var i = 0; i < boxkp.length; i++) {
    boxkp[i].addEventListener('click', CheckBoxKP);

}

function CheckBoxKP() {

    var item = this.parentNode;
    var parent = item.parentNode;
    var valuStar = item.children[2];
    var value = item.children[1].children[0].innerText;
    // console.log(id);
    console.log(value);

    this.parentNode.parentNode.remove();
    var taskList = document.querySelector(".taskList");
    var div = document.createElement("div");
    div.className = "taskItem";
    var atribute = document.createAttribute("draggable");
    div.setAttributeNode(atribute);
    atribute.value = "true";

    var box = document.createElement('button');
    box.classList.add('box');
    box.innerHTML = checkboxSVG;
    box.addEventListener('click', CheckBoxCl);
    div.append(box);



    var divItem = document.createElement("div");
    divItem.className = "item-wrapper";
    var span = document.createElement("span");
    // console.log(this.getElementsByTagName("span")[0].innerHTML);
    var textnode = document.createTextNode(value);
    // console.log(textnode);

    span.appendChild(textnode);
    divItem.append(span);

    div.append(divItem);
    div.append(valuStar);
    // var target = (id === 'todo') ? document.getElementById('completed') : document.getElementById('todo');
    // target.insertBefore(div, target.childNodes[0]);
    taskList.append(div);

}