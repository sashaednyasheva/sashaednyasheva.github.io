document.addEventListener("DOMContentLoaded",()=> 
{
    //cards options
    const cardArray =[
    {
        name: "phoebe1",
        img: "images/1.png"
    },
    {
        name: "phoebe1",
        img: "images/1.png"
    },
    {
        name: "phoebe2",
        img: "images/2.png"
    },
    {
        name: "phoebe2",
        img: "images/2.png"
    },
    {
        name: "phoebe5",
        img: "images/5.png"
    },
    {
        name: "phoebe5",
        img: "images/5.png"
    },
    {
        name: "phoebe6",
        img: "images/6.png"
    },
    {
        name: "phoebe6",
        img: "images/6.png"
    },
    {
        name: "phoebe7",
        img: "images/7.png"
    },
    {
        name: "phoebe7",
        img: "images/7.png"
    },
    {
        name: "phoebe8",
        img: "images/8.png"
    },
    {
        name: "phoebe8",
        img: "images/8.png"
    }
    ]

    var shuffleDeck=function(){
    // Using the Fisher-Yates (Knuth) shuffle
    var currentIndex = cardArray.length
    , temporaryValue
    , randomIndex;
    // While there remain elements to shuffle...
        while (0 !== currentIndex) 
        {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
  
      // And swap it with the current element.
        temporaryValue = cardArray[currentIndex];
        cardArray[currentIndex] = cardArray[randomIndex];
        cardArray[randomIndex] = temporaryValue;
        }
    }

    shuffleDeck();
    console.log(cardArray);

    const grid = document.querySelector(".grid")
    var resultDisplay1 = document.querySelector("#result1")
    var resultDisplay2 = document.querySelector("#result2")
    var playerTurn = document.getElementById("currentPlayer")
    var cardsChosen = []
    var cardsChosenId = []
    var currentPlayer = 1
    var cardsWonPlayer1 = []
    var cardsWonPlayer2 = []
    var gameover = false

    // creating our board, create a loop to go through the cards array

    function createBoard(){
        for (let i=0; i < cardArray.length; i++) 
        {
            var card = document.createElement("img") //create a variable for each card
            card.setAttribute("src", "images/cover.png")
            card.setAttribute("data-id", i)
            //create an event listner for when the card is clicked on 
            card.addEventListener("click", flipCard)
            grid.appendChild(card)
        }
    }    
    createBoard()
    
    //function to flip card
    function flipCard() 
    {
        console.log(gameover)
        if(gameover){
            return;
        }
        console.log("flipCard")
        
        var cardId = this.getAttribute("data-id")
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute("src", cardArray[cardId].img)
        console.log(cardsChosen)
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 600)
        }
    }
 
    //check if cards matched
    function checkForMatch()
    {
        console.log("checkForMatch")
        var cards = document.querySelectorAll("img")
        var optionOneId = cardsChosenId[0]
        var optionTwoId = cardsChosenId[1]
        var cardsWonPlayer 
        // flag = true;
        
        if(currentPlayer ==1 ){
            cardsWonPlayer = cardsWonPlayer1
        }
            else{
                cardsWonPlayer = cardsWonPlayer2
            } 

            if(optionOneId == optionTwoId)
            {
                document.getElementById("noMatch").play();
                alert("You have clicked the same image! Pick another card");
                cards[optionOneId].setAttribute("src", "images/cover.png");
                cards[optionTwoId].setAttribute("src", "images/cover.png");
            }
            else if(cardsChosen[0] === cardsChosen[1])
            {
                document.getElementById("match").play();
                alert("It's a match! Go again!");
                cards[optionOneId].setAttribute("src", "images/blank.png");
                cards[optionTwoId].setAttribute("src", "images/blank.png");
                cards[optionOneId].removeEventListener('click', flipCard);
                cards[optionTwoId].removeEventListener('click', flipCard);
                cardsWonPlayer.push(cardsChosen);
                checkScore();
            }
            else 
            {
                document.getElementById("noMatch").play();
                alert("No match! Another player's turn now.");
                cards[optionOneId].setAttribute("src", "images/cover.png");
                cards[optionTwoId].setAttribute("src", "images/cover.png");
                    
                if(currentPlayer ==1 ){
                    currentPlayer=2;
                }
                else{
                     currentPlayer=1;
                } 
            } 
                    
        
        playerTurn.textContent = currentPlayer   //Shows who's turn it is now
        cardsChosen = []  // empty for the next match
        cardsChosenId=[]  // // empty for the next match
    } 
    // Score  
    function checkScore(){   

        resultDisplay1.textContent = cardsWonPlayer1.length *100
        resultDisplay2.textContent = cardsWonPlayer2.length *100  

        if(cardsWonPlayer1.length === cardArray.length/4)
        {    
            document.getElementById("congrats").play(); 
            setTimeout(function() 
                { 
                alert("Congratulations Player 1! You WON!"); 
                }, 500);
            //card.removeEventListener('click', flipCard)
            gameover = true;
        }
        if(cardsWonPlayer2.length === cardArray.length/4)
        { 
            document.getElementById("congrats").play(); 
            setTimeout(function() 
                { 
                alert("Congratulations Player 2! You WON!"); 
                }, 500);
            //card.removeEventListener('click', flipCard)
            gameover=true;
        }
        if(cardsWonPlayer1.length===cardArray.length/4 && cardsWonPlayer2.length === cardArray.length/4)
        {  
            document.getElementById("congrats").play(); 
            setTimeout(function() 
                { 
                alert("It's a DRAW!"); 
                }, 500);
            //card.removeEventListener('click', flipCard)
            gameover=true;
        }
    }
    
})


