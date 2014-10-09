var players = [];
var player1 = " ";
var player2 = " ";
var count = 1;
var board = [[null, null, null],[null, null, null],[null, null, null]];

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
	});

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

function Player(name){
	this.name = name;
	this.toString = function(){
		return "My name is " + this.name + ".";
	};
}

// function to insert Player's names in header
var listPlayers = function (player, headerID) {
	var header = document.createElement("h4");
	var listPlayer = document.createTextNode(player);
	header.appendChild(listPlayer);
	var insert = document.getElementById(headerID);
	insert.appendChild(header);
}