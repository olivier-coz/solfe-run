// A personality quiz

// This is an array of objects that stores the personality trait that is prompted to the user and the weight for each prompt.
// If a personality trait is considered more introverted, it will have a negative weight.
// If a personlity trait is considered more extroverted, it will have a positive weight.

var prompts = [
{
	prompt: 'Je mange 5 fruits et légumes par jour',
	weight: -1,
	class: 'group0'
},
{
	prompt: 'Je préfere les claquettes aux chaussons',
	weight: -1,
	class: 'group1'
},
{
	prompt: 'Je pense que ce quizz devrait utiliser l\'écriture inclusive',
	weight: -1,
	class: 'group2'
},
{
	prompt: 'Je suis sportif',
	weight: -1,
	class: 'group3'
},
{
	prompt: 'Je suis pour la rémigration',
	weight: -1,
	class: 'group4'
},
{
	prompt: 'Je préfère les vicelardes aux vodka-jet',
	weight: -1,
	class: 'group5'
},
{
	prompt: 'J\'ai facilement des matchs sur tinder',
	weight: 1,
	class: 'group6'
},
{
	prompt: 'La météo est clémente aujourd\'hui',
	weight: 1,
	class: 'group7'
},
{
	prompt: 'J\'ai voté Mélenchon en 2017 au premier tour',
	weight: 1,
	class: 'group8'
},
{
	prompt: 'Je suis un weeb',
	weight: 1,
	class: 'group9'
},
{
	prompt: 'Je suis asexuel',
	weight: 1,
	class: 'group10'
},
{
	prompt: 'La cohérence de ce quizz m\'impressionne',
	weight: 1,
	class: 'group11'
}

]

// This array stores all of the possible values and the weight associated with the value.
// The stronger agreeance/disagreeance, the higher the weight on the user's answer to the prompt.
var prompt_values = [
{
	value: 'oui !',
	class: 'btn-default btn-strongly-agree',
	weight: 5
},
{
	value: 'oui',
	class: 'btn-default btn-agree',
	weight: 3,
},
{
	value: 'neutre',
	class: 'btn-default',
	weight: 0
},
{
	value: 'non',
	class: 'btn-default btn-disagree',
	weight: -3
},
{
	value: 'non !',
	class: 'btn-default btn-strongly-disagree',
	weight: -5
}
]

// For each prompt, create a list item to be inserted in the list group
function createPromptItems() {

	for (var i = 0; i < prompts.length; i++) {
		var prompt_li = document.createElement('li');
		var prompt_p = document.createElement('p');
		var prompt_text = document.createTextNode(prompts[i].prompt);

		prompt_li.setAttribute('class', 'list-group-item prompt');
		prompt_p.appendChild(prompt_text);
		prompt_li.appendChild(prompt_p);

		document.getElementById('quiz').appendChild(prompt_li);
	}
}

// For each possible value, create a button for each to be inserted into each li of the quiz
// function createValueButtons() {

// 	for (var li_index = 0; li_index < prompts.length; li_index++) {
// 		for (var i = 0; i < prompt_values.length; i++) {
// 			var val_button = document.createElement('button');
// 			var val_text = document.createTextNode(prompt_values[i].value);

// 			val_button.setAttribute('class', 'value-btn btn ' + prompt_values[i].class);
// 			val_button.appendChild(val_text);

// 			document.getElementsByClassName('prompt')[li_index].appendChild(val_button);
// 		}
// 	}
// }
function createValueButtons() {
	for (var li_index = 0; li_index < prompts.length; li_index++) {
		var group = document.createElement('div');
		group.className = 'btn-group btn-group-justified';

		for (var i = 0; i < prompt_values.length; i++) {
			var btn_group = document.createElement('div');
			btn_group.className = 'btn-group';

			var button = document.createElement('button');
			var button_text = document.createTextNode(prompt_values[i].value);
			button.className = 'group' + li_index + ' value-btn btn ' + prompt_values[i].class;
			button.appendChild(button_text);

			btn_group.appendChild(button);
			group.appendChild(btn_group);

			document.getElementsByClassName('prompt')[li_index].appendChild(group);
		}
	}
}

createPromptItems();
createValueButtons();

// Keep a running total of the values they have selected. If the total is negative, the user is introverted. If positive, user is extroverted.
// Calculation will sum all of the answers to the prompts using weight of the value * the weight of the prompt.
var total = 0;

// Get the weight associated to group number
function findPromptWeight(prompts, group) {
	var weight = 0;

	for (var i = 0; i < prompts.length; i++) {
		if (prompts[i].class === group) {
			weight = prompts[i].weight;
		}
	}

	return weight;
}

// Get the weight associated to the value
function findValueWeight(values, value) {
	var weight = 0;

	for (var i = 0; i < values.length; i++) {
		if (values[i].value === value) {
			weight = values[i].weight;
		}
	}

	return weight;
}

// When user clicks a value to agree/disagree with the prompt, display to the user what they selected
$('.value-btn').mousedown(function () {
	var classList = $(this).attr('class');
	// console.log(classList);
	var classArr = classList.split(" ");
	// console.log(classArr);
	var this_group = classArr[0];
	// console.log(this_group);

	// If button is already selected, de-select it when clicked and subtract any previously added values to the total
	// Otherwise, de-select any selected buttons in group and select the one just clicked
	// And subtract deselected weighted value and add the newly selected weighted value to the total
	if($(this).hasClass('active')) {
		$(this).removeClass('active');
		total -= (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
	} else {
		// $('[class='thisgroup).prop('checked', false);
		total -= (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $('.'+this_group+'.active').text()));
		// console.log($('.'+this_group+'.active').text());
		$('.'+this_group).removeClass('active');

		// console.log('group' + findValueWeight(prompt_values, $('.'+this_group).text()));
		// $(this).prop('checked', true);
		$(this).addClass('active');
		total += (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
	}

	console.log(total);
})



$('#submit-btn').click(function () {
	// After clicking submit, add up the totals from answers
	// For each group, find the value that is active
	$('.results').removeClass('hide');
	$('.results').addClass('show');

	if(total < -1) {
		$('.results1').addClass('show')
		// document.getElementById('intro-bar').style.width = ((total / 60) * 100) + '%';
		// console.log(document.getElementById('intro-bar').style.width);
		// document.getElementById('intro-bar').innerHTML= ((total / 60) * 100) + '%';
		document.getElementById('results').innerHTML = '<b>Vous êtes une pantoufle</b><br><br>\
		Les pantoufles, les plus nombreuses (45 %), ne se soucient pas de leur performance comme telle pourvu qu&#8217;elle soit meilleure que celle des autres.\n\
<br><br>\
Bien qu&#8217;elles préfèrent être dans des groupes, elles ne veulent pas être le centre de l&#8217;attention. Elles sont réservées et silencieuses, probablement parce qu&#8217;elles aiment se perdre souvent dans leurs propres pensées. Les pantoufles aiment dépenser de l&#8217;argent dans des objets à la mode qui leur font avoir l&#8217;apparence de personnes aisées. Bien qu&#8217;elles aiment dépenser de l&#8217;argent dans les bonnes choses de la vie, elles ne sont pas snob.\
		';
	} else if(total > 1) {
		$('.results2').addClass('show')
		document.getElementById('results').innerHTML = '<b>Vous êtes une babouche !</b><br><br>\
		Les babouches sont connus pour leur diligence, leur fiabilité, leur force et leur détermination. De nature honnête, les babouches sont fortement patriotes, ont des idéaux et des ambitions de vie, et attachent de l&#8217;importance à la famille et au travail.\
<br><br>\
De manière générale, les babouches sont des personnes joviales. Ainsi, cela peut prendre du temps et beaucoup d&#8217;efforts pour apprendre à les connaître. Ces personnes ne partagent que rarement des éléments sur leur vie privée. C&#8217;est pour cette raison que la plupart d’entre elles ont peu d&#8217;amis proches. Une fois qu&#8217;elles ont des amis, leur amitié est pacifique et épanouissante. Elles travaillent durs pour les personnes qu&#8217;elles aiment.';
	} else {
		$('.results3').addClass('show')
		document.getElementById('results').innerHTML = '<b>Vous êtes une bouteille !</b><br><br>\
		Les bouteilles sont à l&#8217;aise en société. Elles sont appréciés par leur entourage pour leur gentillesse et l&#8217;attention qu&#8217;elles portent aux autres. Douées d&#8217;un excellent sens de l&#8217;humour, elles peuvent, au cours d&#8217;une discussion houleuse, métamorphoser en amis des personnes qui étaient prêtes à aller au conflit. Dotés d&#8217;un tempérament doux, elles ont aussi le sens de l&#8217;hospitalité. Ce sont des personnes prévenantes, toujours prêtes à aider leur prochain. Les bouteilles doivent toutefois prendre garde à ne pas verser dans l&#8217;excès d&#8217;amour universel et de charité, au risque de se trouver confrontés à des conflits d&#8217;intérêt. Elles leur arrivent aussi de ne pas savoir trancher, ce qui les conduit au devant de difficultés sur le plan sentimental.'
	}

	// Hide the quiz after they submit their results
	$('#quiz').addClass('hide');
	$('#submit-btn').addClass('hide');
	$('#retake-btn').removeClass('hide');
})

// Refresh the screen to show a new quiz if they click the retake quiz button
$('#retake-btn').click(function () {
	$('#quiz').removeClass('hide');
	$('#submit-btn').removeClass('hide');
	$('#retake-btn').addClass('hide');

	$('.results').addClass('hide');
	$('.results').removeClass('show');
	$('.results1').addClass('hide');
	$('.results1').removeClass('show');
	$('.results2').addClass('hide');
	$('.results2').removeClass('show');
	$('.results3').addClass('hide');
	$('.results3').removeClass('show');
})
