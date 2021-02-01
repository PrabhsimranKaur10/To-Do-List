
var parent;

function add() {

    var item = document.getElementById("task").value;
    if (item == "")
        alert("Please add a task");
    else {
        document.getElementById("task").value = "";
        parent = document.getElementById("My_Ul"); //ul
        var list = document.createElement("li");
        var list_item = document.createTextNode(item); //list item

        list.appendChild(list_item);  //adding text to list-item
        parent.appendChild(list); //adding list-item to ul



        var remove_image = document.createElement("img");
        remove_image.setAttribute("src", "/Users/ennow8/Desktop/todolist/images/cross.png");
        remove_image.setAttribute("width", "15px");
        remove_image.setAttribute("height", "15px");
        remove_image.setAttribute("alt", "delete");
        remove_image.setAttribute("id", "removeimg");
        list.appendChild(remove_image); //adding image to the list-items

        parent.onclick = function (ev) { //to stike through the items on click
            if (ev.target.tagName === 'LI') {
                ev.target.classList.toggle('clicked');
            }
        }
        remove_image.onclick = function () {     //to remove item on image click
            this.parentNode.parentNode.removeChild(this.parentNode);
        }
        var rem = document.getElementById("removeall");  //to remove all items
        rem.onclick = function () {
            parent.innerHTML = "";
        }
    }

}




