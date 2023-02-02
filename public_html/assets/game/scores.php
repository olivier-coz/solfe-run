<?php 
 # JavaScript Dice Game by Coding Commanders 
 # Full tutorials at codingcommanders.com/dice
 # Tweet me: @codingcommander
 // player's name (passed back from JavaScript form) 
 $player_name = strip_tags( trim( $_POST[player_name] ) ); 
 // player's score (passed back from JavaScript form) 
 $player_score = strip_tags( trim( (int)$_POST[score]) ); 
 // An associative array containing player's name & score 
 $player_array = array("name"=>$player_name, "score"=>$player_score);
 // get contents of JSON file
 $highscoreJSON = file_get_contents("scores.json");
 // JSON contents decoded into an associative php array
 $highscore_array = json_decode($highscoreJSON, true);
 // declare variables
 $key = 0;
 $highscores = array();
 
 //if the player's score is greater than the lowest high score
 if ($player_score > $highscore_array[9][score]) {
 	 foreach($highscore_array as $k => $value) {
 	 	 $score = $value[score];
 	 	 if ($score >= $player_score) {
 	 	 	 $highscores[$k] = $value;
 	 	 }
 	 	 if ($score < $player_score) {
 	 	 	 // Beat the score
 	 	 	 $key = $k;
 	 	 	 $highscores[$k] = $player_array;
 	 	 	 for ($i = $key; $i < 9; $i++) {
 	 	 	 	 $highscores[$i + 1] = $highscore_array[$i];
 	 	 	 }
 	 	 break;
 	 	}
 	 }
 	 $jsonscores = json_encode($highscores);
 	 file_put_contents("scores.json", $jsonscores);
 	 var_dump("New high score");
 }
 // if the player's score is less than or equal to the lowest high score 
 else {
 	 var_dump("No high score");
 }
 ?>
