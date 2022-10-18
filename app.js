function add_item() {
    let item = document.getElementById("box");
    let list_item = document.getElementById("list_item");
    if (item.value != "") {
        let make_li = document.createElement("LI");
        make_li.appendChild(document.createTextNode(item.value));
        list_item.appendChild(make_li);
        item.value = "";
        make_li.onclick = function () {
            this.parentNode.removeChild(this);
        }
        let button = document.getElementById("button");
        button.onclick = function () {
            list_item.parentNode.removeChild(list_item);
        };
    } else {
        alert("добавьте задачу!");
    }
}