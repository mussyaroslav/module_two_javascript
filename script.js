let book = document.querySelectorAll('.book');
let adv = document.querySelector('.adv');

// удаление рекламы
adv.remove();

// Перемещение книги
book[1].after(book[0]);
book[3].before(book[2]);
book[2].before(book[4]);
book[5].after(book[2]);

// Замена фона
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

// Исправление ошибки текста
document.body.innerHTML = document.body.innerHTML.replace('Книга 3. this и Пропопипы Объектов', 'Книга 3. this и Прототипы Объектов');

// Правильный порядок во 2й книге
const book2List = document.querySelector('.book:nth-of-type(2) ul');
const book2Chapters = Array.from(book2List.children);

book2Chapters[1].after(book2Chapters[3]);
book2Chapters[3].after(book2Chapters[6]);
book2Chapters[4].before(book2Chapters[8]);

// Правильный порядок в 5й книге
const book5List = document.querySelector('.book:nth-of-type(5) ul');
const book5Chapters = Array.from(book5List.children);

book5Chapters[1].after(book5Chapters[9]);
book5Chapters[3].before(book5Chapters[4]);
book5Chapters[6].after(book5Chapters[2]);
book5Chapters[8].before(book5Chapters[5]);
book5Chapters[3].after(book5Chapters[4]);

// Добавить новую главу в 6 книгу
const book6List = document.querySelector('.book:nth-of-type(6) ul');
const book6Chapters = Array.from(book6List.children);

// Создаем новый элемент списка глав
const newChapter = document.createElement('li');
newChapter.textContent = 'Глава 8: За пределами ES6';

// Добавляем новый элемент в конец списка глав в шестой книге
book6List.insertAdjacentElement('beforeend', newChapter);

// не получается ее переместить