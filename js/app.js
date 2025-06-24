// Add To-Do Functionality
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (text !== "") {
    const li = document.createElement('li');
    li.textContent = text;
    todoList.appendChild(li);
    input.value = "";
  }
});



// delete button
const deleteBtn = document.createElement('button');
deleteBtn.textContent = "Delete";
deleteBtn.onclick = () => li.remove();
li.appendChild(deleteBtn);



// edit and save button
const editBtn = document.createElement('button');
editBtn.textContent = "Edit";
editBtn.onclick = () => {
  const editInput = document.createElement('input');
  editInput.value = li.firstChild.textContent;
  li.innerHTML = '';
  li.appendChild(editInput);

  const saveBtn = document.createElement('button');
  saveBtn.textContent = "Save";
  saveBtn.onclick = () => {
    li.textContent = editInput.value;
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
  };

  li.appendChild(saveBtn);
};