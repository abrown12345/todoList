function addToList(event) {
    let input = document.getElementById("data").value;
    let ul = document.getElementById("mylist");

    let newLi = document.createElement("ul");
    newLi.textContent = input;
    ul.append(newLi);

    data.value= "";

    newLi.addEventListener('dblclick', function () {
        newLi.remove();
    })
};

let button=document.getElementById("button");

button.addEventListener("click", addToList);


