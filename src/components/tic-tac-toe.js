import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
class ticTacToe extends LitElement{
    
   static properties = {
        player1 : {state:true ,type: String},
        player2 : {state: true ,type: String},
        isPlayer1 : {state: true,type: Boolean},
        insertedBox: {state: true, type: Array},
        gameEnded : {state: true , type: Boolean},
        click :{state: true, type: Number},
     }
    static styles = css `
    :host{
    font-family: "Permanent Marker", cursive;
    font-weight: 400;
    }
    p{
        font-size: 30px;
        margin:0;
    }
    #Player{
        display: flex;
        flex-direction: row;
        justify-content:space-between;
    }
    #player1{
        color: red;
    }
    #player2 {
        color:black;
    }
    #img1{
        float:left;
    }
    #img2{
        float:right;
    }
    #winstat{
        font-size: 30px;
        margin:0;
    }
    img{
        border-radius: 8px;
    }
    button{
        border: 3px solid #9AD1E4;
        border-radius: 20px;
        font-size:15px;
        padding:2px;
        width:80px;
        background-color: #cee0e8;
        font-family:azuki;
    }
    button:hover{
        opacity:70%;
        background-color:#909ca2;
    }
     #container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        height: 250px;
        padding-left:10px;
        padding-right:10px;
     }
     .column{
        box-shadow: 0 0 0 2px;
        border:1px solid black;
        font-size: 50px;
     }
    `
    constructor(){
        super();
        this.player1= "X";
        this.player2 = "O";
        this.isPlayer1 = true;
        this.insertedBox = [];
        this.gameEnded = false;
        this.click=0;
        this.imgPath=``;
}
    firstUpdated(){
        const column = this.renderRoot.querySelectorAll('.column');
        const winstat = this.renderRoot.querySelector('#winstat');
        const p1 = this.renderRoot.querySelector('#player1');
        const p2 = this.renderRoot.querySelector('#player2');
        this.checkClick(column,winstat,p1,p2);
        this.resetBoard(column,winstat,p1,p2);
    }
    //check the win condition
    winCondition(insertedBox,player){
        const winPossible = [
            // all possible win in the array
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for(let i=0;i<winPossible.length;i++){
            // check 3 of the values in the array above
            let box1 = winPossible[i][0]; 
            let box2 = winPossible[i][1];
            let box3 = winPossible[i][2];
            // check if the inserted array
            // which contain the player inputs
            if(insertedBox[box1]===insertedBox[box2] 
                && insertedBox[box2]===insertedBox[box3]
                && insertedBox[box1]===player)
                {
                    return true;
                }
        }
    }
    //reset the board game
    resetBoard(column,winstat,p1,p2){
        const resetButton = this.renderRoot.querySelector('#reset');
        resetButton.addEventListener('click', () =>{
            //reset values
            this.isPlayer1 = true;
            this.insertedBox = [];
            this.gameEnded = false;
            winstat.innerHTML = "";
            this.click=0;
            p1.style.color='red';
            p2.style.color='black';
            column.forEach( box =>{
                //reset box
                box.innerHTML = "";
               
            });
        });
    }
    checkClick(column,winstat,p1,p2){
        const conlumnLength = column.length;
        column.forEach( (box,index) => { 
            box.addEventListener('click',()=>{
            if(this.gameEnded===false && box.innerHTML===""){ // check if the space was free or not
                if(this.isPlayer1===false){ //player 2 turn
                    p2.style.color= 'black';
                    p1.style.color = 'red';
                    box.innerHTML=this.player2;
                    this.isPlayer1=true;
                    this.insertedBox[index]=this.player2;
                }
                else if(this.isPlayer1){ //player 1 turn
                    box.innerHTML= this.player1;   
                    this.isPlayer1=false;
                    this.insertedBox[index]=this.player1;
                    p2.style.color='red';
                    p1.style.color='black';
                }   
                // check if the game is eneded or not 
                if(this.winCondition(this.insertedBox,this.player1)){
                        winstat.innerHTML= `${this.player1} Win`;
                        this.gameEnded = true;
                }
                if(this.winCondition(this.insertedBox,this.player2)){
                    winstat.innerHTML = `${this.player2} Win`;
                    this.gameEnded = true;
                }
                this.click++;
                if(this.click===conlumnLength && this.gameEnded===false){
                    winstat.innerHTML = `Tie`;
                    this.gameEnded = true;
                }
            }
        });
    }); 
    }
    render(){
        return html `
        <p> TIC TAC TOE </p>
        <div id="Player"> 
            <p1 id="player1"> Player 1 </p1>
            <p1 id= "player2"> Player 2 </p1>
        </div>
            <img id="img1" src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c04091a3-d4c7-4a50-8b45-914a6a6329d6/dflyuef-43110441-d876-4d0c-9e09-ab16b6fbb2ce.png/v1/fill/w_975,h_819,q_70,strp/bocchi_the_rock_by_itskittyrosie_dflyuef-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA3NSIsInBhdGgiOiJcL2ZcL2MwNDA5MWEzLWQ0YzctNGE1MC04YjQ1LTkxNGE2YTYzMjlkNlwvZGZseXVlZi00MzExMDQ0MS1kODc2LTRkMGMtOWUwOS1hYjE2YjZmYmIyY2UucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.tqYi0UW9H3CC7Bj00URBH2tmofqk1BQD6j9mHOgSdX4" width= "60" height="60">
            <img id="img2" src = "https://avatarfiles.alphacoders.com/375/375161.png" width= "60" height= "60">
        <div id="container">
            <div class="column" id="1"></div>
            <div class="column" id="2"></div>
            <div class="column" id="3"></div>
            <div class="column" id="4"></div>
            <div class="column" id="5"></div>
            <div class="column" id="6"></div>
            <div class="column" id="7"></div>
            <div class="column" id="8"></div>
            <div class="column" id="9"></div>
        </div>
        <p2 id="winstat"></p2>
        <br>
        <button id="reset"> RESET </button>
        <br>
        `
    }

}
customElements.define('tic-toe',ticTacToe);