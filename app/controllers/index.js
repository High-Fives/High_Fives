function LoginClicked(e) {
	if ($.email.value.toUpperCase() == "DEMO" && $.password.value == "demo") {
		var HomePage = Alloy.createController('HomePage').getView();
		HomePage.open();
		$.index.close();
	} else {
		alert("Invalid email/password");
	}
};
function SignUpClicked(e) {
	$.SignUpButton_Athlete.visible = true;
	$.SignUpButton_Fan.visible = true;
	$.SignUp.visible = false;
};

function SignUpAthlete(e) {
	var SignUp_Athlete = Alloy.createController('SignUp_Athlete').getView();
	SignUp_Athlete.open();
	$.index.close();
};

function SignUpFan(e) {
	var SignUp_Fan = Alloy.createController('SignUp_Fan').getView();
	SignUp_Fan.open();
	$.index.close();
};


$.index.open({
	modal : true
}); 