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
	$.SignUp_Athlete.visible = true;
	$.SignUp_Fan.visible = true;
	$.SignUp.visible = false;
};



$.index.open({
	modal : true
}); 