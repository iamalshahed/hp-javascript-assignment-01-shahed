const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add To-Do
addBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (text !== "") {
    addTodoItem(text);
    input.value = "";
  }
});

function addTodoItem(text) {
  const li = document.createElement('li');
  li.className = "flex justify-between items-center bg-gray-200 px-4 py-2 rounded";

  const span = document.createElement('span');
  span.textContent = text;

  const btns = document.createElement('div');
  btns.className = "space-x-2";

//   edit btn
  const editBtn = document.createElement('button');
  editBtn.textContent = "Edit";
  editBtn.className = "text-yellow-600 hover:underline cursor-pointer";
  editBtn.onclick = () => editTodoItem(span, editBtn);

//   delete btn
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "text-red-600 hover:underline cursor-pointer";
  deleteBtn.onclick = () => li.remove();

  btns.appendChild(editBtn);
  btns.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btns);

  todoList.appendChild(li);
}

function editTodoItem(span, btn) {
  const oldText = span.textContent;
  const input = document.createElement('input');
  input.value = oldText;
  input.className = "border px-1 py-0.5 rounded w-full";

  span.replaceWith(input);
  btn.textContent = "Save";

  btn.onclick = () => {
    if (input.value.trim() !== "") {
      const newSpan = document.createElement('span');
      newSpan.textContent = input.value.trim();
      input.replaceWith(newSpan);
      btn.textContent = "Edit";
      btn.onclick = () => editTodoItem(newSpan, btn);
    }
  };
}