function signUp_Clicked(e) {
var index = Alloy.createController('index').getView();
	index.open();
	$.SignUp_Fan.close();
};

$.SignUp_Fan.open({
	modal : true
}); 