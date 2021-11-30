import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store.js';
import App from './app.js';

const root = document.getElementById("app");

console.log('index.js');

// Состояние приложения
const store = new Store({
  items: [
    {code: 1, cost: 11, title: 'Неопознанный объект'},
    {code: 2, cost: 222, title: 'Лось'},
    {code: 3, cost: 100, title: 'Книга магии'},
    {code: 4, cost: 50, title: 'Кочерга'},
    {code: 5, cost: 5, title: 'Воздух с моря'},
    {code: 6, cost: 2, title: 'Что-то очень неприглядное'},
    {code: 7, cost: 1000, title: 'Набор интсрументов "Сюрприз"'}
  ]
});

// Сообщаем реакту что и куда рендерить.
store.subscribe(() => {
  ReactDOM.render(<App store={store}/>, root);
});

// Сообщаем реакту что и куда рендерить.
ReactDOM.render(<App store={store}/>, root);
