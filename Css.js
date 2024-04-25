//* * — выбрать все элементы. Аналог //* в XPath.

// tagName – это формула, а не конкретный селектор. 
// Ты всегда можешь найти элемент(ы) на странице по названию тега.
// Хочешь все кнопки на странице — это поиск по селектору button. Хочешь все ссылки — a.
// Хочешь найти картинку – img. Просто, не правда ли? Как слышится, так и пишется.

// .className — еще одна формула. С точки начинаются селекторы, которые выполняют поиск по CSS-классу.
// .btn — найти все элементы с CSS-классом btn. Что круто, так это то, что можно указать несколько классов.

/*
<input class="rzd-input bg-accessible" placeholder="Откуда" id="direction-from">

<input class="rzd-input bg-accessible" placeholder="Куда" id="direction-to">

<input class="rzd-input bg-accessible hasDatepicker" placeholder="Туда" id="datepicker-from">

<input class="rzd-input bg-accessible hasDatepicker" placeholder="Обратно" id="datepicker-to">
*/

//* Задача найти все поля ввода
// по общему классу .rzd-input
//* поля ввода с датами
// .rzd-input.hasDatepicker

// мы хотим собрать все элементы на странице, которые:

// Имеют CSS-класс red-text.
// Являются кнопками (button).
// => button.red-text