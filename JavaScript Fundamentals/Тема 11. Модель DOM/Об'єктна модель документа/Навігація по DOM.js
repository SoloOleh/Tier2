// Для навігації по цій ієрархії елементи мають такі властивості:

// elem.parentNode — містить посилання на батьківський вузол-елемент вузла elem
// elem.childNodes — містить псевдомасив, у якому зібрані всі дочірні вузли-елементи і текстові вузли вузла elem
// elem.children — містить псевдомасив, у якому зібрані всі дочірні вузли-елементи вузла elem, тобто ті, що відповідають тегам
// elem.firstChild — містить посилання на перший дочірній вузол (вузол-елемент або текстовий вузол) вузла elem
// elem.firstElementChild — містить посилання на перший дочірній вузол-елемент усередині elem, тобто той, що відповідає тегу
// elem.lastChild — містить посилання на останній дочірній вузол (вузол-елемент або текстовий вузол) вузла elem
// elem.lastElementChild — містить посилання на останній дочірній вузол-елемент усередині elem, тобто той, що відповідає тегу
// elem.previousSibling — містить посилання на попередній сусідній вузол відносно елемента elem, і це може бути як елемент, так і текстовий вузол
// elem.previousElementSibling — містить посилання на попередній сусідній вузол-елемент відносно елемента elem, тобто той, що відповідає тегу
// elem.nextSibling — містить посилання на наступний сусідній вузол відносно елемента elem, і це може бути як елемент, так і текстовий вузол
// elem.nextElementSibling — містить посилання на наступний сусідній вузол-елемент відносно елемента elem, тобто той, що відповідає тегу

console.log(document);

const body = document.body;
console.log(body);

const list = document.querySelector(".list");
console.log(list);

const firstListItem = list.firstElementChild;
console.log(firstListItem);

const lastListItem = list.lastElementChild;
console.log(lastListItem);

const listItems = list.children;
console.log(listItems);
