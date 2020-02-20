Одностраничное, с динамическим компонентом.

Запуск: 
npm i
nodemon server/server.js
localhost: 3000

Что есть:
1. Главная.
2. Каталог: добавить в корзину, фильтр размеры и цены (совместные), сортировка, выбор кол-ва товаров на страницу, пагинация (не разъезжается при большом кол-ве страниц).
3. Страница одного товара: запрос по id на сервер, слайдер фото, добавить в корзину. 
4. Страница корзины и оформление заказа (checkout) с отправкой на сервер, далее по кнопке Proceed на втором шаге заказа данные считываются с сервера.
5. В хедере строка поиска работает с любой страницы.
6. Блок отзывов на всех страницах.


С вебпаком не получилось, хотя переделал в экспортируемые объекты, импорт экпорт прописал, шторм не ругался, в конфиге путь для картинок переделал, в остальном структуру проекта сделал как на уроке 8, но все равно стопорится сборка видимо после главной страницы (копирует картинки куда надо, но это только картинки главной страницы). 






Single-page, using a dynamic component. 


Launch: 
npm i 
nodemon server/server.js 
localhost: 3000


What is it:

1. Main, 
2. Catalog: add to cart, filters size and price (joint), sorting, selecting the number of products per page, 
pagination (does not disperse when there are many pages). 
3. One product page: request by id to the server, photo slider, add to cart.
4. The shopping cart page and checkout with sending to the server, then click the Proceed button, on the second step 
order data is read from the server.
5. In the header, the search bar works from any page. 
6. Feedback block at the bottom of all pages.


I could not make the build with webpack, although I converted it to exported objects, I did the import export, Webstorm was ok, I changed the path for images in the config, the other project structure was like in lesson 8, but the build collapses most likely after index.html (it copies images where necessary, but these are only images of the main page).
