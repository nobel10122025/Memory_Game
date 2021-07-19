document.addEventListener('DOMContentLoaded',() => {

    const cardArray = [
        {
            name:'cake',
            img:'images/cake.jpg'
        },
        {
            name:'chocolate',
            img:'images/chocolate.jpg'
        },
        {
            name:'coffee',
            img:'images/coffee.jpg'
        },
        {
            name:'donut',
            img:'images/donut.jpg'
        },
        {
            name:'ice_cream',
            img:'images/ice_cream.jpg'
        },
        {
            name:'strawberry',
            img:'images/strawberry.jpg'
        },
        {
            name:'cake',
            img:'images/cake.jpg'
        },
        {
            name:'chocolate',
            img:'images/chocolate.jpg'
        },
        {
            name:'coffee',
            img:'images/coffee.jpg'
        },
        {
            name:'donut',
            img:'images/donut.jpg'
        },
        {
            name:'ice_cream',
            img:'images/ice_cream.jpg'
        },
        {
            name:'strawberry',
            img:'images/strawberry.jpg'
        }
    ]

    cardArray.sort(()=>Math.random())

    const grid=document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen=[]
    var cardsChosenId=[]
    var cardsWon=[]
    
    // creating a game board
    function createBoard(){
        for(let i=0;i<cardArray.length;i++){
            var card = document.createElement('img')
            card.setAttribute('src','images/blank.jpg')
            card.setAttribute('data-id',i)
            card.setAttribute('class','image')
            card.addEventListener('click' ,flipCard)
            grid.appendChild(card)
        }
    }

    function chechForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId=cardsChosenId[0]
        const optionTwoId=cardsChosenId[1]
        if(cardsChosen[0]=== cardsChosen[1]){
            //alert('You found a match')
            cards[optionOneId].setAttribute('src','images/white.jpg')
            cards[optionTwoId].setAttribute('src','images/white.jpg')
            cardsWon.push(cardsChosen)
            //console.log('yessss')
        }else {
           
            cards[optionOneId].setAttribute('src','images/blank.jpg')
            cards[optionTwoId].setAttribute('src','images/blank.jpg')
            //alert('Sorry Try Again!')
            //console.log('nooooo')

        }
        cardsChosen=[]
        cardsChosenId=[]
        resultDisplay.textContent=cardsWon.length
        //console.log(resultDisplay.textContent)
        if(cardsWon.length===cardArray.length/2){
            resultDisplay.textContent="Congrats! You have found all."
            //alert("Congrats! Have a nice day...")
        }

    }
    
    
    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src',cardArray[cardId].img)
        if(cardsChosen.length===2){
            setTimeout(chechForMatch,500)
        }
    }
    createBoard()
})