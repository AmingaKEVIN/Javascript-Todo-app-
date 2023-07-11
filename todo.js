 var x = document.getElementById('span-tag');
var inputfield = document.getElementById('kev')
var z = document.getElementById('div')
var TodoContainer = document.getElementById('toDo')
var button = document.getElementById('addbutton')


function Todo(){
var inputfield = document.getElementById("kev").value
if(inputfield.length==0){
    x.innerHTML="Please add a task";
}else{
    x.innerHTML="Task is being added successfully"
}

}
Todo()


function addelements(){
    var paragraph = document.createElement('p')
        paragraph.innerText = inputfield.value;
        TodoContainer.appendChild(paragraph);
        inputfield.value=""
        paragraph.addEventListener('click', function(){
                     paragraph.style.textDecoration = "line-through";
               })
               paragraph.addEventListener('dblclick', function(){
                        TodoContainer.removeChild(paragraph);
                    })
}
 