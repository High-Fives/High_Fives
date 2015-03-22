
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
    $.commentPage.close();
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
	$.commentPage.close();
}



/**
 * Opens index (home) page
 */
function openHome() {
    var HomePage = Alloy.createController('HomePage').getView();
    HomePage.open();
    $.commentPage.close();
}


/**
 *Opens Notifications Page
 *  
 */
function openNotifications() {
    var notifications = Alloy.createController('notifications').getView();
    notifications.open();
    $.commentPage.close();
}

/**
 *Opens Profile Page 
 */
function openProfile(e) {
	Titanium.App.Properties.setString('name', e.source.text);
    var profile = Alloy.createController('profileView').getView();
    profile.open();
    $.commentPage.close();
}

/**
 *Opens Explore Page 
 */
function openExplore(){
	var explore = Alloy.createController('explore').getView();
	explore.open();
	$.commentPage.close();
}
/////////////////////////End Page Open Statements/////////////////////////

function returnToPage() {
	 $.commentPage.close();
}
// This bit listens to the orientation change and re-establishes the width 
// of the "main" view, allowing the layout to survive after orientation changes
Ti.Gesture.addEventListener('orientationchange', function(e) {
    $.main.width=Ti.Platform.displayCaps.platformWidth;
});
$.commentPage.addEventListener('android:back', function(){
    this.close();
});
$.commentPage.open({modal: true, exitOnClose:false});