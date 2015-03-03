
function LoginClicked(e){
if($.email.value.toUpperCase() == "DEMO" && $.password.value == "demo"){
var HomePage = Alloy.createController('HomePage').getView();
HomePage.open();
}
else{
alert("Invalid email/password");
}
};
function SignUpClicked(e){
alert("SignUp clicked.");
};
$.index.open({modal: true});