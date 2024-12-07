const someFrom = document.forms.someFrom;
 const buttonAdd = document.getElementById('buttonAdd');
const inputCinema = document.getElementById('inputCinema');
const pairList = document.getElementById('pairList');
const buttonSortByName = document.getElementById('buttonSortByName');
const buttonSortByNumber = document.getElementById('buttonSortByNumber');
const buttonDelete = document.getElementById('buttonDelete');
const list = document.getElementById('list');

 //додавання пари значення
 someFrom.addEventListener('submit', function(event){
      event.preventDefault();
      const input = inputCinema.value.trim();//чистить від пробілів
     //Метод split() разбиваєт об'єкт String на массив на рядки та розділяє їх
     //Метод map() створює новий масив
      const [name, value]= input.split("=").map(item=>item.trim());

     inputCinema.value = '';// стираю веденний текст

      //провіряю чи правильно внесли дані
      if (!name || !value || /[text]/.test(name) || /[number]/.test(value)) {
        return;//не виконуємо дію
      }

      // створюємо li ,createElement та приймає його
      const li = document.createElement('li');
      //додаю текст
      li.innerText = `${name}=${value}`;
      //створюю checkbox, щоб можна було видалити елемент та приймає дщ нього інпут
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.classList.add('delete-checkbox');
      //додаю в список ведені значення
      li.append(checkbox);
      pairList.append(li);
 });

  //створюю ф-цію яка при виклику кнопки буде відсортувати по алфавіту
  buttonSortByName.addEventListener('click', () => {
      //створю const items який зразу приймає новий масив
      const items = Array.from(pairList.querySelectorAll('li'));
      // відсортувати по алфавіту
      items.sort((a, b) => {
          const [nameA] = a.innerText.split('=');
          const [nameB] = b.innerText.split('=');
          return nameA.localeCompare(nameB);
      });
      //перебираю кожний елемент в дів
       pairList.appendChild(item);
  });

  // створюю ф-цію яка при виклику кнопки буде відсортувати по значенню
  buttonSortByNumber.addEventListener('click', () => {
      //створю const items який зразу приймає новий масив
      const items = Array.from(pairList.querySelectorAll('li'));
      //відсортовую від найменшого до більшого
      items.sort((a, b) => {
           const valueA = (a.innerText.split('=')[1]);
           const valueB = (b.innerText.split('=')[1]);
          return valueA - valueB;
      });
      //перебираю кожний елемент в дів
       pairList.appendChild(item);
  });

  //створюю ф-цію яка при виклику кнопки буде видаляти вибраний елемент
  buttonDelete.addEventListener('click', () => {
      const checkboxes = pairList.querySelectorAll('.delete-checkbox');
       checkboxes.forEach((checkbox) =>{
            if (checkbox.checked) {
            checkbox.parentElement.remove();
            }
       });
  });
