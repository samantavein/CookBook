import React from 'react';
import { RecipeConsumer } from './RecipeContext';

const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');
const deleteBtn = document.querySelector('.delete');


const renderDetails = async () => {
  const res = await fetch('http://localhost:4001/recipes/' + id);
  if (!res.ok) {
    window.location.replace("/");
  }
  const post = await res.json();

  const template = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
  `

  container.innerHTML = template;
}

deleteBtn.addEventListener('click', async () => {
  const res = await fetch('http://localhost:4001/recipes/' + id, {
    method: 'DELETE'
  });
  window.location.replace("/");
})

window.addEventListener('DOMContentLoaded', renderDetails);

