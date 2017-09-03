/*-----------sidebar-toggle -jQuery  --------------*/

$(".header__mobile-icon").on('click', function () {       // Функция для отображения/скрытия,  по клику на иконку, выпадающего меню (мобильная версия)
    $(this).toggleClass("header__mobile-icon_active");    // Выбираем все элементы, у которых необходимо
    $(".sidebar").toggleClass("sidebar_active");          // изменить класс, и меняем его при кликена противоположный
    $(".fade").toggleClass("fade_active");                // с помощью методв toggleClass
    $("body").toggleClass("body_active");
  },
);

$(".fade").on('click', function () {   //Функция для скрытия,по клику на контентную часть, выпадающего меню(мобильная версия)
  $(this).removeClass("fade_active");
  $(".header__mobile-icon").removeClass("header__mobile-icon_active");   // Выбираем все элементы, у которых необходимо удалить
  $(".sidebar").removeClass("sidebar_active");                           // классы с модофикатором "active"
  $("body").removeClass("body_active");
});


/*-----------form-styler--------------*/

// Подключен плагин jQuery Form Styler для стилизации тегов "select"

(function ($) {
  $(function () {

    $('select').styler();

  });
})(jQuery);


/*-----------form-validation--------------*/

// Объявляем и инициализируем переменные для валидации формы

let form = document.querySelector('.form-validation');
let numberCard = form.querySelectorAll('.numberCard__input');
let userCard = form.querySelector('.nameCard__input');
let codeCard = form.querySelector('.codeCard__input');
let letterValidate = /^[A-Z]{4,}$/;
let numberValidate = /[0-9]{4}/;
let codeValidate = /[0-9]{3}/;

// Переводим текст, введенный в поле "Держатель карты", в верхний регистр
userCard.addEventListener('keyup', function (e) {
  e.preventDefault();
  userCard.value = userCard.value.toUpperCase();
});


form.addEventListener('submit', function (e) {    // Функция валидации формы
let bError = false;

  for (let i = 0; i < numberCard.length; i++) {             // Перебираем все элементы с классом "numberCard__input"
    if (!(numberValidate.test(numberCard[i].value))) {      // и проверяем корректность их заполнения, сравнивая их с регулярным выражением
      numberCard[i].classList.add('errorValidate');         // методом "test"
      bError = true;
    } else {
      numberCard[i].classList.remove('errorValidate');
    }
  }

if (!(letterValidate.test(userCard.value))) {               // Аналогично проверяем на корректность все остальные поля формы
    userCard.classList.add('errorValidate');
    bError = true;
  } else {
    userCard.classList.remove('errorValidate');
  }

  if (!(codeValidate.test(codeCard.value))) {
    codeCard.classList.add('errorValidate');
    bError = true;
  } else {
    codeCard.classList.remove('errorValidate');
  }

  if (bError) {                                               // Условие, запрещающее/разрешающее стандартное поведение submit,
    e.preventDefault();                                       // в зависимости от полученных значений переменной bError в ходе проверки
  }

});



