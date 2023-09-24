var addtodobtn = document.querySelector('#addtodobtn');
var title = document.querySelector('#title');
var body = document.querySelector('#body');
var todoscontainer = document.querySelector('#todoscontainer');
var btn = document.querySelector('.btn-danger');


addtodobtn.onclick = function () {
    var title_value = title.value;
    var body_value = body.value;
    if (title_value == '') {
        title.style.border = '2px solid red';
    } else {
        title.style.border = '';
    }
    if (body_value == '') {
        body.style.border = '2px solid red';
    } else {
        body.style.border = '';
    }

    if (title_value != '' && body_value != '') {
        var id = Math.round(Math.random());
        var newTodo = `
                <div class="card mb-5" id="TodoEl${id}">
                <div class="card-header">
                <div class="row">
                    <div class="col-6">
                        ${title_value}
                    </div>
                    <div class="col-6 text-right">
                        <button data-Todo="#TodoEl${id}" class="btn btn-danger delete-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill delete-btn" viewBox="0 0 16 16">
                            <path data-Todo="#TodoEl${id}" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                        </svg></button>
                    </div>
                </div>
                </div>
                <div class="card-body">
            <p>${body_value}</p>
                </div>
            </div>`;
    }
    todoscontainer.innerHTML = newTodo + todoscontainer.innerHTML;
    title.value = '';
    body.value = '';

};

document.querySelector('#todoscontainer').onclick = function (e) {
    if (e.target.classList.contains('delete-btn')) {
        console.log(e.target.dataset.Todo);
        var TodoEl = document.querySelector(e.target.dataset.Todo);
        TodoEl.remove();
    }

};