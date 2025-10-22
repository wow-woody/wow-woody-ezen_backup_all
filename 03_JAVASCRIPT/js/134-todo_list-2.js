const form = document.querySelector('form');
const input = document.querySelector('input');
const list = document.querySelector('ul');
let todos = JSON.parse(localStorage.getItem('todos')) || [];

function render() {
  list.innerHTML = '';
  todos.forEach((t, i) => {
    const li = document.createElement('li');
    li.textContent = t;
    li.onclick = () => { todos.splice(i,1); save(); };
    list.append(li);
    li.innerHTML = `${t} <button>V</button> <button>X</button>`;
  });
  
}

function save() {
  localStorage.setItem('todos', JSON.stringify(todos));
  render();
}
form.onsubmit = e => {
  e.preventDefault();
  if(input.value) todos.push(input.value);
  input.value = '';
  save();
};
render();
