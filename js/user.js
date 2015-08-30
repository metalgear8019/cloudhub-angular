/* ------------------------------------------------------------------------------
 * Javascript for user registration (with AJAX)
 * @author Jacquelyn Amaya
 * @version 0.01
 * Version History
 * [08/07/2015] 0.01 - Jacquelyn Amaya - Function for clicking the button Sign Up
 * [08/27/2015] 0.02 - Jacquelyn Amaya - Function for clicking the button Log In
 * --------------------------------------------------------------------------- */
$(document).ready(function() {
	$(function() {
		//Add User
		$(document).on('click', '#btnSignUp', function(){
			var confirmPassword = $('#confirm_password').val();
			jsonData = {
					data: JSON.stringify({
					firstname: $('#txtFirstName').val(),
					lastname: $('#txtLastName').val(),
					username: $('#txtUsername').val(),
					password: $('#txtPassword').val(),
					confirmPassword: $('#confirm_password').val()
					})
			};
			$.ajax({
				url: '/user/register',
				type: 'POST',
				data: jsonData,
				dataType: 'json',
				success: function(data, status, jqXHR){
					if(data.errorList.length == 0 && (confirmPassword == data.password)) {
						alert("User successfully registered!");
					} else {
						var msg = "";
						for (var i = 0; i < data.errorList.length; i++)
							msg += data.errorList[i] + "\n";
						alert(msg);
					}
				},
				error: function(jqXHR, status, error) {
					
				}
			});
		}); // end of adding user
	});
	
	$(function() {
		$('#btnLogin').click(function() {
			jsonData = {
					data: JSON.stringify({
						username: $('#txtUsername').val(),
						password: $('#txtPassword').val()
					})
			};
			$.ajax({
				url: '/user/verifyUser',
				type: 'POST',
				data: jsonData,
				dataType: 'json',
				success: function(data, status, jqXHR){
					if(data.errorList.length == 0) {
						window.location.href="/task/masterlist";
					} else {
						var msg = "";
						for (var i = 0; i < data.errorList.length; i++)
							msg += data.errorList[i] + "\n";
						$('#txtPassword').val('');
						$('#errorMessage').html(msg);
					}
				},
				error: function(jqXHR, status, error) {
					
				}
			});
		}); // end of logging in
	});
});