
// dummy click event.  Add your own!
if(Titanium.Platform.osname=='mobileweb'){
var mainWin = Titanium.UI.currentWindow;
mainWin.addEventListener('open', function() {
	setName();
	setPictre();
});
}

function searchDisplay(){
	$.searchBar.visible = true;
	$.cancel.visible = true;
	$.menubtn.visible = false;
	$.searchbtn.visible = false;
	$.logobtn.visible = false;
}

function cancelSearch(){
	$.searchBar.value="";
	$.searchBar.visible = false;
	$.cancel.visible = false;
	$.menubtn.visible = true;
	$.searchbtn.visible = true;
	$.logobtn.visible = true;
}

function setName() {
	$.profileName.text = "Sample Name";
	//This will be in need of revision once the database is implemented
	//$.profileName.text = Titanium.App.Properties.getString('name');
}

function setPicture() {
	
	$.profilePic.image = "/104-BusinessPerson_60@2x.png";
	$.profilePic.height = "80%";
	$.profilePic.top = "5%";
	$.profilePic.left = "1%";
	//This will be in need of revision once the database is implemented
	/**
	$.profilePic.image = "/" + Titanium.App.Properties.getString('profilePictureID') + ".png";
	$.profilePic.height = "90%";
	$.profilePic.top = "5%";
	$.profilePic.left = "1%";
**/
}

function testclick(e){
	alert('Clicked ' + '\'' + e.source.id + '\'');
}

function signOut() {
    var index = Alloy.createController('index').getView();
    index.open();
    $.d.close();
}
// handles the "Like button"
function likeunlike(e){
	// change like/unlike image, based on the current image
	if (e.source.image==="/330-Dollar_30.png"){
		e.source.image="/Green-Dollar-Sign.png";
	}else{
		e.source.image="/330-Dollar_30.png";
	}
};

// shows or hide the menu
var menuOpen = false;
function showhidemenu(e){
	if (!menuOpen){
		moveTo="60%";
		menuOpen=true;
	}else{
		moveTo="0";
		menuOpen=false;
	}
	
	// have to set the current width of the "main" view before moving it so it doesn't get squeezed
	// try commenting out the following line and setting the "newLeft" to 200 instead of 
	// 300 to see what I mean
	$.main.width=Ti.UI.FILL;
	$.main.animate({
		left:moveTo,
		duration:100
	});
}

/////////////////////////Begin Page Open Statements/////////////////////////
/**
 * Opens My_Roster Page
 */
function openMyRoster(){
	var my_Roster = Alloy.createController('my_Roster').getView();
	my_Roster.open();
	$.donatePage.close();
}



/**
 * Opens index (home) page
 */
function openHome() {
    var HomePage = Alloy.createController('HomePage').getView();
    HomePage.open();
    $.donatePage.close();
}


/**
 *Opens Notifications Page
 *  
 */
function openNotifications() {
    var notifications = Alloy.createController('notifications').getView();
    notifications.open();
    $.donatePage.close();
}

/**
 *Opens Profile Page 
 */
function openProfile(e) {
	Titanium.App.Properties.setString('name', e.source.text);
    var profile = Alloy.createController('profileView').getView();
    profile.open();
    $.donatePage.close();
}

/**
 *Opens Explore Page 
 */
function openExplore(){
	var explore = Alloy.createController('explore').getView();
	explore.open();
	$.donatePage.close();
}
/////////////////////////End Page Open Statements/////////////////////////

function returnToPage() {
	 $.donatePage.close();
}


function charityButtonClick(e) {
	e.source.visible = false;
	$.submitDonate.visible = true;
	$.cancelDonate.visible = true;
	$.donateField.visible = true;
}

function donateSubmitted() {
	alert("A third party window will appear so that credit card information will not be held by High Fives.");
}
///////////////////THESE ARE HARDCODED METHODS. ONLY ONE WILL BE KEPT WHEN DATABASE IS IMPLEMETNED/////////////

function charityButtonClick1(e) {
	e.source.visible = false;
	$.submitDonate1.visible = true;
	$.cancelDonate1.visible = true;
	$.donateField1.visible = true;
}
function cancelDonate1() {
	$.charityButton1.visible = true;
	$.submitDonate1.visible = false;
	$.cancelDonate1.visible = false;
	$.donateField1.visible = false;
}

function charityButtonClick2(e) {
	e.source.visible = false;
	$.submitDonate2.visible = true;
	$.cancelDonate2.visible = true;
	$.donateField2.visible = true;
}
function cancelDonate2() {
	$.charityButton2.visible = true;
	$.submitDonate2.visible = false;
	$.cancelDonate2.visible = false;
	$.donateField2.visible = false;
}

function charityButtonClick3(e) {
	e.source.visible = false;
	$.submitDonate3.visible = true;
	$.cancelDonate3.visible = true;
	$.donateField3.visible = true;
}
function cancelDonate3() {
	$.charityButton3.visible = true;
	$.submitDonate3.visible = false;
	$.cancelDonate3.visible = false;
	$.donateField3.visible = false;
}

function charityButtonClick4(e) {
	e.source.visible = false;
	$.submitDonate4.visible = true;
	$.cancelDonate4.visible = true;
	$.donateField4.visible = true;
}
function cancelDonate4() {
	$.charityButton4.visible = true;
	$.submitDonate4.visible = false;
	$.cancelDonate4.visible = false;
	$.donateField4.visible = false;
}

function charityButtonClick5(e) {
	e.source.visible = false;
	$.submitDonate5.visible = true;
	$.cancelDonate5.visible = true;
	$.donateField5.visible = true;
}
function cancelDonate5() {
	$.charityButton5.visible = true;
	$.submitDonate5.visible = false;
	$.cancelDonate5.visible = false;
	$.donateField5.visible = false;
}

////////////////////////////END HARDCODED METHODS







// This bit listens to the orientation change and re-establishes the width 
// of the "main" view, allowing the layout to survive after orientation changes
Ti.Gesture.addEventListener('orientationchange', function(e) {
    $.main.width=Ti.Platform.displayCaps.platformWidth;
});
$.donatePage.addEventListener('android:back', function(){
    this.close();
});
$.donatePage.open({modal: true, exitOnClose:false});