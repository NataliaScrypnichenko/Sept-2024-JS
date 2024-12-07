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

  // Сортировка по имени
  buttonSortByName.addEventListener('click', () => {
      const items = Array.from(pairList.querySelectorAll('li'));
      items.sort((a, b) => {
          const [nameA] = a.innerText.split('=').map((item) => item.trim());
          const [nameB] = b.innerText.split('=').map((item) => item.trim());
          return nameA.localeCompare(nameB);
      });
      items.forEach((item) => pairList.appendChild(item));
  });

  // Сортировка по значению
  buttonSortByNumber.addEventListener('click', () => {
      const items = Array.from(pairList.querySelectorAll('li'));
      items.sort((a, b) => {
          const valueA = parseInt(a.innerText.split('=')[1].trim());
          const valueB = parseInt(b.innerText.split('=')[1].trim());
          return valueA - valueB;
      });
       items.forEach((item) => pairList.appendChild(item));
  });

  // Удаление выбранных элементов
  buttonDelete.addEventListener('click', () => {
      const checkboxes = pairList.querySelectorAll('.delete-checkbox');
       checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
            checkbox.parentElement.remove();
            }
       });
  });
