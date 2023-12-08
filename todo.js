let main_container= document.querySelector(".main");
let todo_body=document.querySelector(".body_app");
let btn =document.querySelector("#add");
let add_task=document.querySelector("#task");
let list=document.querySelector(".list");




function addTask()
{
    if(add_task.value==="")
    {
        alert("YOU HAVE TO ENTER SOMETHING");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=add_task.value;
        list.appendChild(li);
        let trashIcon=document.createElement('i');
        trashIcon.classList.add('fa', 'fa-trash'); 
        li.appendChild(trashIcon);

    }
    add_task.value=""//it change the value to null after adding a task
}
 

todo_body.addEventListener("click",(e)=>
{
    if(e.target.tagName==="I")
    {
        e.target.parentElement.remove();
    }
})

