var face1,face2,flag=0,point1=0,point2=0,opoint1=0,opoint2=0;
        const initialRender = function () {
            const initText1 = document.createElement('h1');
            initText1.textContent = 'Press the button to begin';
            document.querySelector('.textOneBoard').appendChild(initText1);
            const initText2 = document.createElement('h1');
            initText2.textContent = 'Wait for Player One to begin';
            document.querySelector('.textTwoBoard').appendChild(initText2);
            const initScore1 = document.createElement('h1');
            initScore1.textContent = 'Score: 0';
            document.querySelector('.scoreOneBoard').appendChild(initScore1);
            const initScore2 = document.createElement('h1');
            initScore2.textContent = 'Score: 0';
            document.querySelector('.scoreTwoBoard').appendChild(initScore2);
        }
        const playerOne = function (ch,board) {
            var playerEl;
            var boardEl,buttonEl1,buttonEl2;
            if(board === 1) {
                boardEl = document.querySelector('.textOneBoard');
                buttonEl1 = document.getElementById('button1');
                buttonEl2 = document.getElementById('button2');
            } else {
                boardEl = document.querySelector('.textTwoBoard');
                buttonEl1 = document.getElementById('button2');
                buttonEl2 = document.getElementById('button1');
            }
            boardEl.innerHTML = ''
            switch(ch) {
                case 7:
                case 11:playerEl = document.createElement('p')
                        playerEl.textContent = `You rolled ${ch}. You won!`
                        boardEl.appendChild(playerEl)
                        buttonEl1.style.display = "none";
                        buttonEl2.style.display = "none";
                        document.getElementById('restart').style.visibility = "visible";
                        return ch;
                case 2:
                case 3:
                case 12:playerEl = document.createElement('p')
                        playerEl.textContent = `You rolled ${ch}. You lost!`
                        boardEl.appendChild(playerEl)
                        buttonEl1.style.display = "none";
                        buttonEl2.style.display = "none";
                        document.getElementById('restart').style.visibility = "visible";;
                        return ch;
                default:playerEl = document.createElement('p')
                        playerEl.textContent = `Point = ${ch}.`
                        boardEl.appendChild(playerEl) 
                        buttonEl1.style.display = "none";
                        buttonEl2.style.display = "initial";
                        return ch;
            }
        }
        const playerSubsequent = function (ch,pnt,board) {
            debugger
            var playerEl;
            var boardEl,buttonEl1, buttonEl2;
            if(board === 1) {
                boardEl = document.querySelector('.textOneBoard');
                buttonEl1 = document.getElementById('button1');
                buttonEl2 = document.getElementById('button2');
            } else {
                boardEl = document.querySelector('.textTwoBoard');
                buttonEl1 = document.getElementById('button2');
                buttonEl2 = document.getElementById('button1');
            }
            boardEl.innerHTML = ''
            if(ch===pnt) {
                playerEl = document.createElement('p')
                playerEl.textContent = `You rolled ${ch} again. You won!`
                boardEl.appendChild(playerEl)
                buttonEl1.style.display = "none";
                buttonEl2.style.display = "none";
                document.getElementById('restart').style.visibility = "visible";
                return ch;
            }
            switch(ch) {
                case 7:
                case 11:playerEl = document.createElement('p')
                        playerEl.textContent = `You rolled ${ch}. You lost!`
                        boardEl.appendChild(playerEl)
                        buttonEl1.style.display = "none";
                        buttonEl2.style.display = "none";
                        document.getElementById('restart').style.visibility = "visible";
                        return ch;
                default:playerEl = document.createElement('p')
                        playerEl.textContent = `Point = ${ch}.`
                        boardEl.appendChild(playerEl) 
                        buttonEl1.style.display = "none";
                        buttonEl2.style.display = "initial";
                        return ch;
            }
        }
document.querySelector('#button1').addEventListener('click',function () {
    face1=Math.floor(1+Math.random()*6);
    face2=Math.floor(1+Math.random()*6);
    ch=face1+face2;
    if(flag===0){
        point1 = playerOne(ch,1);
        flag++;
    } else {
        point1 = playerSubsequent(ch,point1,1);
    }
    opoint1+=point1;
    document.querySelector('.scoreOneBoard').innerHTML = ''
    const scoreEl = document.createElement('h3');
    scoreEl.textContent = `Player one points: ${opoint1}`
    document.querySelector('.scoreOneBoard').appendChild(scoreEl)
})
document.querySelector('#button2').addEventListener('click',function () {
    face1=Math.floor(1+Math.random()*6);
    face2=Math.floor(1+Math.random()*6);
    ch=face1+face2;
    if(flag!==1) {
        point2 = playerSubsequent(ch,point2,2);
    } else {
        point2 = playerOne(ch,2);
        flag++;
    }
    opoint2+=point2;
    document.querySelector('.scoreTwoBoard').innerHTML = ''
    const scoreEl = document.createElement('h3');
    scoreEl.textContent = `Player two points: ${opoint2}`
    document.querySelector('.scoreTwoBoard').appendChild(scoreEl)
})
document.querySelector('#restart').addEventListener('click',function () {
    window.location.reload();
})