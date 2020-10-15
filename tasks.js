
function addList(event) {
  const board = document.getElementById("board");
  const card = document.createElement("div");
  const cardHeader = document.createElement("div");
  const buttonItem = document.createElement("button");
  const list = document.createElement("ul");

  card.className = "card col-md-3";
  card.draggable = "true";
  list.className = "list-group list-group-flush";
  cardHeader.className = "card-header";
  buttonItem.className = "btn btn-secondary";
  buttonItem.textContent = "Add item";
  buttonItem.onclick = addItem;

  card.appendChild(cardHeader);
  card.appendChild(list);
  cardHeader.appendChild(buttonItem);
  board.appendChild(card);

  card.ondrop = dropItem;
  card.ondragover = allowDropItem;
}

function addItem(event) {
  const card = event.target.parentElement.parentElement;
  const list = card.getElementsByTagName("ul")[0];
  const item = document.createElement("li");

  item.className = "list-group-item";
  item.innerText = "Click here to edit";
  item.contentEditable = "true";
  item.id = Math.random();
  item.draggable = "true";
  item.allowDrop = "false";
  list.appendChild(item);
  const removeButton = document.createElement("button");
  removeButton.className = "btn btn-outline-secondary btn-sm";
  removeButton.innerText = "Remove";
  removeButton.contentEditable = "false";
  item.appendChild(removeButton);
  removeButton.onclick = removeItem;

  card.allowDrop = allowDropItem;
  item.ondragstart = dragItem;

  //   const trashIcon = document.createElement("svg");
  //   trashIcon.className = "bi bi-trash-fill";
  //   //trashIcon.setAttribute = "class", "bi bi-trash-fill";
  //   this.appendChild(trashIcon);
  //   removeButton.appendChild(trashIcon);
  //   trashIcon.style.width = "1em";
  //   trashIcon.style.height = "1em";
  //   trashIcon.style.viewBox = "0 0 16 16";
  //   trashIcon.style.xmlns = "http://www.w3.org/2000/svg";
  //   trashIcon.style.fill = "currentColor";
  //   // // trashIcon.innerHTML = "bi bi-trash-fill";
}

function removeItem(event) {
  console.log(event);
  const item = event.target.parentElement;
  const list = event.target.parentNode.parentNode;
  list.removeChild(item);
}

function allowDropItem(event) {
  event.preventDefault();
}

function dragItem(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function dropItem(event) {
  console.log(event);
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  if (event.target.tagName == "DIV") {
    event.target.appendChild(document.getElementById(data));
  }
  else {
    event.target.parentElement.appendChild(document.getElementById(data));
  }
}

