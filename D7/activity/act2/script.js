const task_manager = document.getElementById('taskManagerContainer');
task_manager.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const task_input = document.getElementById('task_input');
  const task_input_value = task_input.value.trim();

  const task_list = document.getElementById('task_list');

  if (task_input_value !== '') {
    const task_list_item = document.createElement('li');
    task_list_item.textContent = task_input_value;

    const remove_button = document.createElement('button');
    remove_button.textContent = 'Delete';

    remove_button.addEventListener('click', function () {
      task_list.removeChild(task_list_item);

      if (task_list.children.length === 0) {
        document.getElementById('no_task_text').style.display = 'block';
      }
    });

    task_list_item.appendChild(remove_button);

    task_list.appendChild(task_list_item);

    document.getElementById('no_task_text').style.display = 'none';
  }

  task_input.value = '';
}
