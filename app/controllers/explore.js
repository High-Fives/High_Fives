openFilter = 0;
//HARD CODED CHECK STATEMENTS -- NEED TO BE FIXED ONCE DATABASE COMES IN TO PLAY
checked1 = false;
checked2 = false;
checked3 = false;
checked4 = false;
checked5 = false;
checked6 = false;
checked7 = false;
checked8 = false;
checked9 = false;
checked10 = false;
checked11 = false;
checked12 = false;
checked13 = false;
//END HARDCODED CHECK STATEMENTS
popIsUp = 0;

// dummy click event.  Add your own!
function testclick(e){
	alert('Clicked ' + '\'' + e.source.id + '\'');
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

function signOut() {
    var index = Alloy.createController('index').getView();
    index.open();
}

// handles the "Like button"
function likeunlike(e){
	// change like/unlike image, based on the current image
	if (e.source.image==="/330-Dollar_30.png"){
		e.source.image="/Green-Dollar-Sign.png"
	}else{
		e.source.image="/330-Dollar_30.png"
	}
}


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
}

/**
 * Opens index (home) page
 */
function openHome() {
    var index = Alloy.createController('HomePage').getView();
    index.open();
}

/**
 *Opens Notifications Page
 *  
 */
function openNotifications() {
    var notifications = Alloy.createController('notifications').getView();
    notifications.open();
}

/**
 *Opens Profile Page 
 */
function openProfile(e) {
	Titanium.App.Properties.setString('name', e.source.text);
Titanium.App.Properties.setString('profilePictureID', e.source.id);
    var profile = Alloy.createController('profileView').getView();
    profile.open();
}

function openExplore(){
	var explore = Alloy.createController('explore').getView();
	explore.open();
}
/////////////////////////End Page Open Statements/////////////////////////


/**
 *Operate the Sports Filter 
 */

function sportsFilter(){
	if(popIsUp == 0){
		$.popup.top = '5%';
		$.popup.left = '15%';
		$.popup.height = '60%';
		$.popup.width = '70%';
		$.popupSpace.top = '5%';
		$.popupSpace.left = '15%';
		$.popupSpace.height = '100%';
		$.popupSpace.width = '70%';
		popIsUp = 1;
	}
	else if(popIsUp == 1){
		$.popup.top = '0%';
		$.popup.left = '0%';
		$.popup.height = '0%';
		$.popup.width = '0%';
		$.popupSpace.top = '0%';
		$.popupSpace.left = '0%';
		$.popupSpace.height = '0%';
		$.popupSpace.width = '0%';
		popIsUp = 0;
	}
};

////////////////////////////////////////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 *Operate the Sports Filter 
 */

function openFilter(){
	if(openFilter == 0){
		$.filterList.height = '80%';
		$.exploreFeed.height = "0%";
		openFilter = 1;
		
	}
	else if(openFilter == 1){
		$.filterList.height = '0%';
		$.exploreFeed.height = "80%";
		openFilter = 0;
	}
	
}










 
//hard coded checkmark statements. These will need ot be fixed for database usage. Should only keep one when switching over to dB
function selectCheck1() {
	if(checked1 == false) {
		$.checkMark1.visible = true;
		checked1 = true;
	}
	else {
		$.checkMark1.visible = false;
		checked1 = false;
	}
}
function selectCheck2() {
	if(checked2 == false) {
		$.checkMark2.visible = true;
		checked2 = true;
	}
	else {
		$.checkMark2.visible = false;
		checked2 = false;
	}
}
function selectCheck3() {
	if(checked3 == false) {
		$.checkMark3.visible = true;
		checked3 = true;
	}
	else {
		$.checkMark3.visible = false;
		checked3 = false;
	}
}
function selectCheck4() {
	if(checked4 == false) {
		$.checkMark4.visible = true;
		checked4 = true;
	}
	else {
		$.checkMark4.visible = false;
		checked4 = false;
	}
}
function selectCheck5() {
	if(checked5 == false) {
		$.checkMark5.visible = true;
		checked5 = true;
	}
	else {
		$.checkMark5.visible = false;
		checked5 = false;
	}
}
function selectCheck6() {
	if(checked6 == false) {
		$.checkMark6.visible = true;
		checked6 = true;
	}
	else {
		$.checkMark6.visible = false;
		checked6 = false;
	}
}
function selectCheck7() {
	if(checked7 == false) {
		$.checkMark7.visible = true;
		checked7 = true;
	}
	else {
		$.checkMark7.visible = false;
		checked7 = false;
	}
}
function selectCheck8() {
	if(checked8 == false) {
		$.checkMark8.visible = true;
		checked8 = true;
	}
	else {
		$.checkMark8.visible = false;
		checked8 = false;
	}
}
function selectCheck9() {
	if(checked9 == false) {
		$.checkMark9.visible = true;
		checked9 = true;
	}
	else {
		$.checkMark9.visible = false;
		checked9 = false;
	}
}
function selectCheck10() {
	if(checked10 == false) {
		$.checkMark10.visible = true;
		checked10 = true;
	}
	else {
		$.checkMark10.visible = false;
		checked10 = false;
	}
}
function selectCheck11() {
	if(checked11 == false) {
		$.checkMark11.visible = true;
		checked11 = true;
	}
	else {
		$.checkMark11.visible = false;
		checked11 = false;
	}
}
function selectCheck12() {
	if(checked12 == false) {
		$.checkMark12.visible = true;
		checked12 = true;
	}
	else {
		$.checkMark12.visible = false;
		checked12 = false;
	}
}
function selectCheck13() {
	if(checked13 == false) {
		$.checkMark13.visible = true;
		checked13 = true;
	}
	else {
		$.checkMark13.visible = false;
		checked13 = false;
	}
}


///////////END HARD CODED METHODS////////////////////////////


// This bit listens to the orientation change and re-establishes the width 
// of the "main" view, allowing the layout to survive after orientation changes
Ti.Gesture.addEventListener('orientationchange', function(e) {
    $.main.width=Ti.Platform.displayCaps.platformWidth;
});

$.explore.open();