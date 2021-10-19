
 
var btn = document.getElementById("btn");


function addTask()
{   
    var task = document.getElementById("task");
    var div = document.createElement("div");
    div.setAttribute("class", "tasks");
    var p = document.createElement("p");
    var span = document.createElement("span");
    var input = document.getElementById("inp");
    var count = document.getElementById("count");
    var countText = Number(document.getElementById("count").textContent);
    countText++;
    

    p.innerHTML = input.value;
    span.setAttribute("class", "divs");
    count.textContent = countText;
    
    var span1 = document.createElement("span");
    var span2=document.createElement("span")
    var btn1 = document.createElement("button");
    var btn2 = document.createElement("button");
    btn1.innerHTML = "Done";
    btn2.innerHTML = "Remove";
    btn2.setAttribute("class", "remove");
    btn1.setAttribute("class", "lineBtn");
    span.appendChild(p);
    span1.appendChild(btn1);
    span2.appendChild(btn2);
     div.append(span);
    div.append(span1);
    div.append(span2);
    task.append(div);
    
    var lineBtn = document.getElementsByClassName("lineBtn");
    var removeBtn = document.getElementsByClassName("remove");
    
    btn1.onclick = function ()
    {
        p.style.textDecoration = "line-through";
        p.style.color = "green";
    }
    for (var i = 0; i < removeBtn.length; i++) {
        removeBtn[i].onclick = function () {

            var remove = this.parentElement;
            remove.parentElement.style.display = "none";
            
            var count = document.getElementById("count");
            var countText = Number(document.getElementById("count").textContent);
            var heading = document.getElementById("heading");
            countText--;
       
            count.textContent = countText;
           
        
        }
    }
    console.log(span);
    input.value = "";
    
}

 

