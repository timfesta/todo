$(function() {

	var $newTask = $('#new-task');
	var $taskName = $('#task-name');
	var $taskList = $('ul');
	var listItems = $('li');
	var $newDescription = $('#description-name');
	var $combo = $taskName + $newDescription; 

	$newTask.on('submit', function(event) {
		console.log("submitting form");
		event.preventDefault();
		console.log($newDescription.val());

	$taskList.append("<li>" + $taskName.val() + " " + $newDescription.val() + "</li>");
	
	$('ul').on('click', 'li', function(event) {
		console.log('strikeOut');
		$(this.style.textDecoration="line-through");
		});
		});
	});

