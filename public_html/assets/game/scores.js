// ol element containing high scores
const List = document.getElementById("highscores");
// element displaying error messages
const Errors = document.getElementById("error");

// Function to Reset Score and High Score List
function resetForm() {
	// delete li elements holding high score data
	while (List.hasChildNodes()) {
		List.removeChild(List.firstChild);
	}
	// fetch scores.json and create new li elements holding the data
	get_scores(list_scores);
}

// code to execute when
function trucRelou(this_score) {
	// event.preventDefault(); // don't reload page
	var tenth_score = document.getElementById("lowscore").value; // lowest high score

	if (this_score > tenth_score) {// if the player's current score > the lowest high score
		let player = prompt("Félicitations, tu fais parti de l'élite ! Il ne te restes plus qu'à rentrer ton pseudo ci-desous. (16 charactères max, pas d'espaces)", "Player");
		player = player.replace(/\s/g, '');
		player = player.substring(0, 16);
		if (player == null || player == "") {
			player = "Player";
		}

		var formData = new FormData();
		formData.append("player_name", player);
		formData.append("score", this_score);

		// fetch request
		fetch("./assets/game/scores.php", {// sending to scores.php
			method: "post", // using method post
			body: formData // we are sending formData
		})
			.then(function (response) {
				return response.text(); // Get the text contents
			})
			.then(function (text) {
				resetForm(); // execute resetForm function
				console.log(text); // print the text contents to console
			})
			.catch(function (err) {// If there is an error
				Errors.innerHTML = err; // display error in errors element
			})
	}
	else {// if the player did not make it on the highscore list

	}

}

// Function to get the high score JSON
function get_scores(callback) {
	let file = "./assets/game/scores.json";// file location
	fetch(file, { cache: "no-cache" }) // fetch
		// If the response isn OK
		.then(function (response) {
			if (response.status !== 200) {
				Errors.innerHTML = response.status;
			}
			// If the response is OK
			response.json().then(function (data) {
				let scores = JSON.stringify(data);
				console.log(data);
				callback(scores);
			})
		})
		// If there is an error
		.catch(function (err) {
			Errors.innerHTML = err;
		});
}

//Function to display high score list
var list_scores = function (scores) {
	let object = JSON.parse(scores);
	let lowest_score = object[9].score;
	document.getElementById("lowscore").value = lowest_score;
	for (let i = 0; i < object.length; i++) {
		let li = document.createElement("LI");
		let textPlayeri = document.createElement("I");
		let textPlayer = document.createTextNode(object[i].name);
		let textScore = document.createTextNode(object[i].score);
		textPlayeri.appendChild(textPlayer);
		li.appendChild(textPlayeri);
		li.appendChild(textScore);
		List.appendChild(li);
	}
}