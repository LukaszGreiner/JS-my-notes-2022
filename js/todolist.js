//Based on Tyler Pott's code https://www.youtube.com/watch?v=6eFwtaZf6zc

console.log('todolist.js loaded');

// Local Storage
window.addEventListener('load', () => {
  todos = JSON.parse(localStorage.getItem('todos')) || [];
  const newTodoForm = document.querySelector('#new-todo-form');
  newTodoForm.addEventListener('submit', e => {
    e.preventDefault();

    const todo = {
      content: e.target.elements.content.value,
      done: false,
      createdAt: new Date().getTime(),
    };

    // Prevent pushing task without content
    if (e.target.elements.content.value) {
      todos.push(todo);
    }

    localStorage.setItem('todos', JSON.stringify(todos));

    // Reset input value
    e.target.reset();

    DisplayTodos();
  });
  DisplayTodos();
});

function DisplayTodos() {
  const todoList = document.querySelector('#todo-list');

  todoList.innerHTML = '';

  todos.forEach(todo => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    const label = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const content = document.createElement('div');
    const actions = document.createElement('div');
    const edit = document.createElement('button');
    const delateBtn = document.createElement('button');

    input.type = 'checkbox';
    input.checked = todo.done;
    span.classList.add('bubble');

    content.classList.add('todo-content');
    actions.classList.add('actions');
    edit.classList.add('edit');
    delateBtn.classList.add('delate');

    content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
    edit.innerHTML = 'Edit';
    delateBtn.innerHTML = 'Delate';

    label.appendChild(input);
    label.appendChild(span);
    actions.appendChild(edit);
    actions.appendChild(delateBtn);
    todoItem.appendChild(label);
    todoItem.appendChild(content);
    todoItem.appendChild(actions);

    todoList.appendChild(todoItem);

    if (todo.done) {
      todoItem.classList.add('done');
    }

    input.addEventListener('click', e => {
      todo.done = e.target.checked;
      localStorage.setItem('todos', JSON.stringify(todos));

      if (todo.done) {
        todoItem.classList.add('done');
      } else {
        todoItem.classList.remove('done');
      }

      DisplayTodos();
    });

    edit.addEventListener('click', e => {
      const input = content.querySelector('input');
      input.removeAttribute('readonly');
      input.focus();
      input.addEventListener('blur', e => {
        input.setAttribute('readonly', true);
        todo.content = e.target.value;
        localStorage.setItem('todos', JSON.stringify(todos));
        DisplayTodos();
      });
    });

    delateBtn.addEventListener('click', e => {
      todos = todos.filter(t => t != todo);
      localStorage.setItem('todos', JSON.stringify(todos));
      DisplayTodos();
    });
  });
}
