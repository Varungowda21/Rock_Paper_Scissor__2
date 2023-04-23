//////////////////// (5)
const totalscore = { computerscore: 0, playerscore: 0 }
//////////////////  (1)
function getcomputerchoice() {
  const rpschoice = ['✊', '🤚', '✌️']
  const computerchoice = rpschoice[Math.floor(Math.random() * 3)]
  return computerchoice
}
// console.log(getcomputerchoice())

//////////////// (7)

function showresult(score, playerchoice, computerchoice) {
  const resultdiv = document.getElementById('result')
  const handsdiv = document.getElementById('hands')
  const playerscorediv = document.getElementById('player-score')
  const compscorediv = document.getElementById('comp-score')
  switch (score) {
    case -1:
      resultdiv.innerText = `You Lose!`
      break;
    case 0:
      resultdiv.innerText = `It's Tie..!`
      break;
    case 1:
      resultdiv.innerText = `You Win!`
      break;
  }
  handsdiv.innerText = `👨‍🦰-->${playerchoice} vs ${computerchoice}<--🤖`
  playerscorediv.innerText = `👨‍🦰Your_score = ${totalscore['playerscore']}`
  compscorediv.innerText = `🤖Robot_score = ${totalscore['computerscore']}`
}
/////////////////////// (4)
function getresult(playerchoice, computerchoice) {
  let score;
  if (playerchoice === computerchoice) {
    score = 0
  } else if (playerchoice === '✊' && computerchoice === '✌') {
    score = 1
  } else if (playerchoice === '🤚' && computerchoice === '✊') {
    score = 1
  } else if (playerchoice === '✌️' && computerchoice === '🤚') {
    score = 1
  } else {
    score = -1
  }
  return score
}
console.log(getresult('✊', '✌'))

///////////////////////// (3)
function onclickrps(playerchoice) {
  console.log(playerchoice)
  const computerchoice = getcomputerchoice()
  console.log(computerchoice)
  const score = getresult(playerchoice, computerchoice)
  ///////////////////////// (6)
  totalscore['playerscore'] += score
  // console.log(score)
  // console.log(totalscore)
  totalscore['computerscore'] -= score
  console.log(totalscore)

  //////////////////////////// (8)
  showresult(score, playerchoice, computerchoice)
}
///////////////////// (2)
function playgame() {
  const rpsButtons = document.querySelectorAll('.rpsButton')
  // return rpsButtons
  rpsButtons.forEach(rpsButtons => {
    rpsButtons.onclick = () => onclickrps(rpsButtons.value)
  })
  ///////////////////////// (9)
  const endgamebutton = document.getElementById('endGameButton')
  endgamebutton.onclick = () => endgame(totalscore)
}
////////////////////////// (10)
function endgame(totalscore) {
  totalscore['computerscore'] = 0
  totalscore['playerscore'] = 0
  // function showresult(score,playerchoice,computerchoice){
  const resultdiv = document.getElementById('result')
  const handsdiv = document.getElementById('hands')
  const playerscorediv = document.getElementById('player-score')
  const compscorediv = document.getElementById('comp-score')
  resultdiv.innerText = ''
  handsdiv.innerText = ''
  playerscorediv.innerText = ''
  compscorediv.innerText = ''


}
console.log(playgame())

