// [X] Get Input value on form submit or click of add button
// [] Create List element and insert value of input in list
/*
const formbody = document.getElementById('forminput');
formbody.addEventListener('submit', getInputValue);

function getInputValue(e){
    e.preventDefault();
    const inputValue = formbody.elements['field'].value;
    console.log(inputValue);
}
*/
const formbody = document.getElementById('forminput');
const button = document.getElementById("btnadd");
const list = document.getElementById("list-item-container");
let listNumber = 0;

button.addEventListener('click', addItem);
function addItem(e) {
    e.preventDefault();
    const inputfield = formbody.elements['field'];
    // getting the element's value
    let fieldvalue = inputfield.value;
    if (fieldvalue === "") {
        alert("add item");
    }
    else {
        //new list is created
        let li = document.createElement('li');
        li.setAttribute('data-id', `item-${++listNumber}`);
        li.innerHTML = `<input type="checkbox" id="accept" name="accept" onchange="todochecked(this)">
                        <span>${fieldvalue}</span>
                        <button onclick="edit(this)" type="button">EDIT</button>
                        <input type="text" class="editinput" style="display:none; width:40%;"> <button type="button" id="btnsave" onclick="save(this)" style="display:none;">Save</button>
                        <i class="fa fa-trash" id ="trash" onclick="removeTask(this)"></i>`;
        list.prepend(li);
        inputfield.value = "";
    }
}

function edit(event) {
    var temp = event.previousElementSibling;  //span
    var tempVal = temp.innerText; // value of span 
    //console.log(tempVal);
    event.previousElementSibling.style.display = "none";   //span 
    event.style.display = "none";  // edit button
    event.nextElementSibling.style.display = "inline";   //input 
    event.nextElementSibling.nextElementSibling.style.display = "inline"; //button 
    event.nextElementSibling.value = tempVal; // setting tempVal in input field to edit
    //console.log()
}

function save(event) {
    var final = event.previousElementSibling.value;    // storing edited val in variable
    event.previousElementSibling.style.display = "none";     // input field
    event.style.display = "none";          //save button
    event.previousElementSibling.previousElementSibling.style.display = "inline"; // edit button
    event.previousElementSibling.previousElementSibling.previousElementSibling.style.display = "inline"; //span 
    event.previousElementSibling.previousElementSibling.previousElementSibling.innerText = final;

}

function todochecked(event) {
    //console.log(event);
    event.nextElementSibling.classList.toggle("toggling");
}

const mainform = document.querySelector(".main");
const delli = document.getElementById("delbtn");
const cancel = document.getElementById("cancelbtn");

function removeTask(event) {
    document.getElementById('item-to-be-deleted').value = event.parentElement.getAttribute('data-id');
    //console.log(event.parentElement.getAttribute('data-id'));
    mainform.classList.remove("display-none");
}

delli.addEventListener("click", function(e){
    document.querySelector(`li[data-id='${e.target.parentElement.previousElementSibling.value}']`).remove();
    mainform.classList.add("display-none");
})

cancel.addEventListener("click", function(){
    //console.log("1");
    mainform.classList.add("display-none");
})

//all delete functionality
var deleteall = document.getElementById("btndelete");
deleteall.onclick = function () {
    list.innerHTML = '';
}

//get input element
let filterinput = document.getElementById("searchfilter");

//event listener
filterinput.addEventListener("keyup", filterlist)
function filterlist() {
    var filterinputVal = filterinput.value.toLowerCase();
    //get ul list element
    const list = document.getElementById("list-item-container");
    //get li elements
    //loop
    for (var i = 0; i < list.children.length; i++) {
        var index = list.children[i].children[1];
        if (list.children[i].children[1].innerText.toLowerCase().indexOf(filterinputVal) > -1) {
            list.children[i].style.display = '';
        }
        else {
            list.children[i].style.display = "none";
        }
    }
}

//dropdown
function GetSelectedTextValue(e){
    //console.log(taksselected.options);
    //console.log(taksselected.selectedIndex);
    var selectedopt = taksselected.value;
    console.log(selectedopt);
    for(var i=0; i<list.children.length; i++ ){
        if(selectedopt == 1){
            if(list.children[i].children[0].checked){
                list.children[i].style.display = '';
            }
            else {
                list.children[i].style.display = "none";
            }
        }
        if(selectedopt == 2){
            if(list.children[i].children[0].checked){
                list.children[i].style.display = "none";
            }
            else {
                list.children[i].style.display = '';
            }
        }
        if(selectedopt == 0){
            if(list.children[i].children[0].checked){
                list.children[i].style.display = '';
            }
            else {
                list.children[i].style.display = '';
            }
        }
    }
   
}