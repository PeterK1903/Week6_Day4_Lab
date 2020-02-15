document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const handleFormSubmit = function(event) {
  event.preventDefault();
  const resultParagraph = document.querySelector('#reading-list')
  resultParagraph.textContent += `Your reading list: ${event.target.title.value} ${event.target.author.value} ${event.target.category.value}`
  // document.getElementById('#new-item-form').reset();
  form.reset()
}
const form = document.querySelector('#new-item-form');
form.addEventListener('submit', handleFormSubmit)

const handleDeleteAllClick = function (event) {
  const readingList = document.querySelector('#reading-list');
  readingList.innerHTML = '';
}

const coolButton = document.createElement('button');
  document.querySelector('new-item-form');
  coolButton.textContent = "delete all!";
  coolButton.setAttribute('id', 'delete-all');
  const body = document.querySelector('body');
  body.appendChild(coolButton);
  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

})



// const newListItem = document.createElement('li');
//   newListItem.textContent = 'Purple';
//   newListItem.classList.add('purple');

// const newBtn = document.createElement('new-item-form');
//   newBtn.textContent = 'Delete';
//   newBtn.classList.add('button')

// const newBtn = document.createElement('input');
// newBtn.setAttribute('type','button');
// newBtn.setAttribute('value','delete');
// // newBtn.attachEvent('OnClick',Hi());
// const btn = document.querySelector('#new-item-form');
// btn.appendChild(newBtn);
