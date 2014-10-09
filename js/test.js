var players = [];
var player1 = " ";
var player2 = " ";
var count = 1;
var board = [[null, null, null], [null, null, null], [null, null, null]];
var wins = [7, 56, 448, 73, 146, 292, 273, 84];

window.onload = function () {

//on Click of submit button enters players names into array, limmiting players array to a length of two, call listPlayer() function
	document.getElementById('submit').addEventListener('click', function(){

		if (players.length == 2) {
			alert("You've reach the alloted number of players!")
			return;
		} else {
			var name = document.getElementById('i-player').value;
			players.push(new Player(name));
				if (players.length == 1) {
					player1 = players[0].name;
				} else {
					player2 = players[1].name;
					listPlayers(player1, "player1-H");
					listPlayers(player2, "player2-H");
				}
		}
	}); //end of creating players function on click

	//example of excessive coding to get div values I want
	//How to assign these values to a clicked cell???
	document.getElementById('divValues').addEventListener('click', function () {

		getDivValue(6); 
		getDivValue(7); 
		getDivValue(8); 
		getDivValue(10); 
		getDivValue(11); 
		getDivValue(12); 
		getDivValue(14); 
		getDivValue(15); 
		getDivValue(16);
	});

//assigns turns to each player
	if (count % 2 == 0) {

	}

//enables game board to switch between X's and O's only clicking each div once
	for (var row = 1; row < 4; row++) {
		for (col =1; col < 4; col++) {

			var myDiv = document.getElementById("r"+row+"c"+col);

				myDiv.addEventListener("click",
					(function(rowVal, colVal) {

						return function() {
							if (board[rowVal - 1][colVal - 1] != null) {return;};
							this.style.backgroundImage = (count % 2 == 0 ? "url(img/red_O.png)" : "url(img/red_X.png)");


							(board[rowVal - 1][colVal - 1]) = (count % 2 == 0) ? "O" : "X";
							console.log(board[rowVal - 1][colVal - 1]); 

							this.style.backgroundSize = "150px 150px";
							this.style.backgroundReapeat = "no-repeat";
							this.style.backgroundPosition = "center";
							alert(" row " + rowVal + " col " + colVal + " count " + count);

							count++;
						};
					})(row, col)
				);
			}
		}
	}
// creates a new player with a score set to 0
function Player(name){
	this.name = name;
	this.score = 0;
	this.toString = function(){
		return "My name is " + this.name + ".";
	};
} //end of onload function

// function to insert Player's names in header
var listPlayers = function (player, headerID) {
	var header = document.createElement("h4");
	var listPlayer = document.createTextNode(player);
	header.appendChild(listPlayer);
	var insert = document.getElementById(headerID);
	insert.appendChild(header);
}

//retrieves value of each div based on indexes
// The issue is I need only these index numbers 6, 7, 8, 10, 11, 12, 14, 15, 16 
//To call each indiviual index would be way too much code as I'll show above
var getDivValue = function (divIndex) {
	var div = document.getElementsByTagName("div")[divIndex];
	alert(div.getAttribute("value"));
}