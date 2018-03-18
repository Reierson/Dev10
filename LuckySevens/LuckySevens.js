function luckySevens(){

//VARIABLES
var initialBet = document.getElementById("initialBet").value;
var money = 0;
var dieOne = 0;
var dieTwo = 0;
var dice = 0;
var rollTotal = 0;
var unLuckyCounter = 0;
var money = initialBet;
var moneyHeld = [initialBet];
var win = 4;
var loss = 1;
var maxHeld = 0;

//DICE ROLLING
	do{
rollTotal++;
dieOne = Math.floor(Math.random() * 6) + 1;
dieTwo = Math.floor(Math.random() * 6) + 1;
dice = dieOne+dieTwo;
			//WINNER
if (dice == 7){
money = money+win;
var last_element = moneyHeld[moneyHeld.length -1];
var last_updated = last_element + win;
moneyHeld.push(last_updated);
//LOSER
}else {
money--;
unLuckyCounter++;
var last_element = moneyHeld[moneyHeld.length -1];
var last_updated = last_element - loss;
moneyHeld.push(last_updated);
rollTotal = rollTotal++;
	}

	}while(money>0);
	var totalMax = 0;

	totalMax = Math.max.apply(Math, moneyHeld);
	tries = moneyHeld.indexOf(totalMax);
	if(tries<1){
		tries = 0;
	}
//END OF GAME
	document.getElementById("p1").innerHTML=("<center><br><br><table style=\"width: 100% height: 100%;\"><th colspan=\"2\"; class=\"th1\">Results</th><tr><th class=\"th2\">Starting Bet</th><th class=\"th2\">$" + initialBet + ".00</th></tr><tr><td>Total Rolls Before Going Broke</td><td>"+ rollTotal +"</td></tr><tr><td>Highes Amount Won</td><td>"+ totalMax +"</td></tr><tr><td>Roll Count at Highest Amount Held</td><td>"+ tries + "</td></tr></table></center>");
	document.getElementById("p2").innerHTML="Play Again?";

}
