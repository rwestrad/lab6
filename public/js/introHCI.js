'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);
	var res = $.get('https://lab6-rwe.herokuapp.com/project/' + idNumber, addProject);
	console.log(res);
}

function addProject(result) {
	var stringID = '#project' + result.id + ' .details';
  var projectHTML = '<a href="#" class="thumbnail">' +
    '<img src="' + result['image'] + '" class="detailsImg">' +
    '<p>' + result['summary'] + '</p>' +
    '<p><small>' + result['date'] +
    '</small></p></a>'; 

	$(stringID).html(projectHTML);

}
