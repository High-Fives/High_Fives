/*var currentWindow = Ti.UI.currentWindow;
//This will be used in the future to select a gender/date

var pickMonth = Ti.UI.createPicker({ bottom:60, width:150 }); 
var month = []; 
month.push(Titanium.UI.createPickerRow({title:'Jan'})); 
month.push(Titanium.UI.createPickerRow({title:'Feb'})); 
month.push(Titanium.UI.createPickerRow({title:'Mar'}));
month.push(Titanium.UI.createPickerRow({title:'Apr'}));
month.push(Titanium.UI.createPickerRow({title:'May'}));
month.push(Titanium.UI.createPickerRow({title:'Jun'}));
month.push(Titanium.UI.createPickerRow({title:'Jul'}));
month.push(Titanium.UI.createPickerRow({title:'Aug'}));
month.push(Titanium.UI.createPickerRow({title:'Sept'}));
month.push(Titanium.UI.createPickerRow({title:'Oct'}));
month.push(Titanium.UI.createPickerRow({title:'Nov'}));
month.push(Titanium.UI.createPickerRow({title:'Dec'}));  
pickMonth.add(month); currentWindow.add(pickMonth);
*/

$.SignUp_Athlete.open({
	modal : true
}); 

function signUp_Clicked(e) {
var index = Alloy.createController('index').getView();
	index.open();
	$.SignUp_Athlete.close();
};
