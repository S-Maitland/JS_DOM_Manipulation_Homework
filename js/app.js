document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const form = document.querySelector('#new-item-form');

const submitHandler = function(event){
  event.preventDefault();
  const title = event.target.title.value;
  const developer = event.target.developer.value;
  const category = event.target.category.value;

  //creates new list item to game list to display entries.
  newItem = document.createElement('li');
  newItem.textContent = `${title} ${developer} ${category}`;

  gameList = document.querySelector('#game-list');
  gameList.appendChild(newItem);
  document.querySelector('#new-item-form').reset();
};
  form.addEventListener('submit', submitHandler)

  //On load document creates a delete all button
  deleteButton = document.createElement('input');
  deleteButton.type = 'button';
  deleteButton.value = 'Delete All'
  form.appendChild(deleteButton);

  const handleDelete = function(){
    // gameList.innerHTML = "";
    while (gameList.firstChild) {
      gameList.removeChild(gameList.firstChild);
    }
  };

  deleteButton.addEventListener('click', handleDelete);

})
