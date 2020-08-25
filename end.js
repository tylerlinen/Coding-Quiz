const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

//const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveScoreBtn.addEventListener("click", function(event){
    event.preventDefault(event)
    let score = localStorage.getItem("currentscore")
    console.log(score)
    const Displayscore = {
        score: score,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.Displayscore - a.score);
    highScores.splice(5);
    
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.href = "hs.html";



})
