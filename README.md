# HW22-js-jquery-part2

1. Создайте на вашем github репозиторий по следующему шаблону HW#-name. Все результаты нужно запушить в ваш репозиторий и прикрепить ссылку на hillel портале.

2. Создайте index.html в котором подключите js script.

3. Создайте README.md с описанием задания.

4. Подготовка

- Установить:

  - https://nodejs.org/uk/ - LTS версию

  - Затем выполнить в консоле npm install -g json-server

- Создайте в папке с заданием:

  - Создайте папку db

  - Создайте в папке db json файл с именем db.json. В который поместите содержимое c https://gist.github.com/OlegRovenskyi/e39cd96baa9f3d4555eceaca5e91b33c. Должны получить следующую структуру: db/db.json

- Чтобы запустить сервер нужно в консоли или терминале зайти в папку с файлом db.json и запустить команд: json-server --watch db.json
- чтобы остановить сервер нажмите вместе комбинацию клавиш в консоли: CTRL C

5. Переделать ToDo-list (желательно который реализован на class) с использованием jQuery.
   Вся работа с DOM должна проходить через jquery, в том числе обработка событий и url данных (jQuery ajax).

- При загрузке страницы нужно вывести список всех todos в html.

- Реализовать создание новых задач.

  - При нажатии на кнопку create отправить (post) запрос на создание todo.

  - При успешном создании todo отобразить todo в списке задач и очистить input.
  - При возникновении ошибки показать сообщение. (Можно вывести в консоль или вывести сообщение в удобном месте).

- Реализовать изменение статуса todo.

  - При изменении статуса нужно обновить ui.

  - Отправить запрос (put) на обновление задачи в базе данных (данные должны обновиться в файле db.json).

- **Опциональное задание.** Реализовать удаление todo

  - Удаление todo с DOM дерева.

  - Отправить запрос на удаление из базы данных
