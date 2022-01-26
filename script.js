const input = $('.todo-input');
const createButton = $('#create-todo');
const requestURL = 'http://localhost:3000/todos';
let list = $('#list');

class TodoList {
  constructor(elem, url) {
    this.elem = elem;
    this.url = url;
  }

  addTodo(todo) {
    $.ajax({
      type: 'post',
      url: this.url,
      data: JSON.stringify({
        task: todo,
        complited: false,
      }),
      headers: { 'Content-type': 'application/json; charset=utf-8' },
    });
    // this.showTodoList();
    location.reload();
  }

  removeTodo(id) {
    $.ajax({
      type: 'delete',
      url: `${this.url}/${id}`,
      headers: { 'Content-type': 'application/json' },
      data: null,
    });
  }

  getDataFromDB() {
    return $.ajax({
      url: this.url,
      dataType: 'json',
      success: () => {
        console.log('Operation success');
      },
    });
  }

  async showTodoList() {
    try {
      let data = await this.getDataFromDB();
      this.render(data);
    } catch (error) {
      console.log('Что-то пошло не так! Ошибочка: ', error);
    }
  }

  render(data) {
    let res = '';

    for (let el of data) {
      //   console.log(data);
      //   console.log(el);
      if (!el) {
        return;
      }
      res += `<li class="list-item ${el.complited ? 'done' : 'must-done'}" data-id="${el.id}">${
        el.task
      }
          <button class="set-status">Change status</button><button class="delete-task">Delete</button></li>`;
    }
    // console.log(res);
    this.elem.html(res);
  }

  async changeTodoStatus(id) {
    try {
      let data = await this.getDataFromDB();

      for (let item of data) {
        if (item.id == id) {
          item.complited = !item.complited;

          $.ajax({
            type: 'put',
            url: `${this.url}/${id}`,
            data: JSON.stringify({
              task: item.task,
              complited: item.complited,
            }),
            headers: { 'Content-type': 'application/json' },
          });
        }
      }
      location.reload();
    } catch (error) {
      console.log('Что-то пошло не так! Ошибочка: ', error);
    }
  }
}

let newTodo = new TodoList(list, requestURL);
newTodo.showTodoList();

createButton.on('click', () => {
  newTodo.addTodo(input.val());
  input.val(null);
});

list.on('click', (e) => {
  let target = e.target;
  let todoId = target.closest('li').dataset.id;

  if (target.className.includes('set-status')) {
    newTodo.changeTodoStatus(todoId);
  } else if (target.className.includes('delete-task')) {
    newTodo.removeTodo(todoId);
    location.reload();
  }
});
