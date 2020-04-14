document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
          name: 'fries',
          img: 'assets/images/fries.png'
        },
        {
          name: 'cheeseburger',
          img: 'assets/images/cheeseburger.png'
        },
        {
          name: 'ice-cream',
          img: 'assets/images/ice-cream.png'
        },
        {
          name: 'pizza',
          img: 'assets/images/pizza.png'
        },
        {
          name: 'milkshake',
          img: 'assets/images/milkshake.png'
        },
        {
          name: 'hotdog',
          img: 'assets/images/hotdog.png'
        },
        {
          name: 'fries',
          img: 'assets/images/fries.png'
        },
        {
          name: 'cheeseburger',
          img: 'assets/images/cheeseburger.png'
        },
        {
          name: 'ice-cream',
          img: 'assets/images/ice-cream.png'
        },
        {
          name: 'pizza',
          img: 'assets/images/pizza.png'
        },
        {
          name: 'milkshake',
          img: 'assets/images/milkshake.png'
        },
        {
          name: 'hotdog',
          img: 'assets/images/hotdog.png'
        }
      ]


      

      const grid = document.querySelector('.grid')
      const resultDisplay = document.querySelector('#result')
      var cardsChosen = []
      var cardsChosenId = []
      const cardsWon = []
      
      //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'assets/images/blank.png')
      card.setAttribute('data-id', i)
      //card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  createBoard()

})