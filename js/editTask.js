$(function() {
	/*
	$.ajax({
		url: 'editTask',
		type: 'GET',
		dataType: 'json',
		success: function(data, status, jqXHR){
			console.log(data);
			if(data.errorList.length == 0) {
				var formattedTaskList = "";
				$.each(data.taskList, function(index, value) {
					formattedTaskList += '<tr>' +
		              '<input type="hidden" class="id" name="id" value="' + value.id + '"/>' +
		              '<td  class="taskName">' +
		              value.taskName + 
		              '</td>' +
		              '<td><center>' + value.phase + '</center></td>' +
		              '<td><center>' + value.estHours + 'hrs </center></td>' +
		              '<td><center>' + value.startDate + '</center></td>' +
		              '<td><center>' + value.dueDate + '</center></td>' +
		            '</tr>';
				});
				
				
				if (formattedTaskList == "") {
					formattedTaskList = "<div>Add tasks! :)</div>";
				}
				else{
					$('#finished_tasks').find('tbody').append(formattedTaskList);
				}
				if (undefined != successMessage && "" != successMessage) {
					alert(successMessage);
				}
			} else {
				alert('Failed to retrieve tasks!');
			}
		},
		error: function(jqXHR, status, error) {
			
		}
	});
	
	*/
});