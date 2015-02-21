popIsUp = 0;

// dummy click event.  Add your own!
function testclick(e){
	alert('Clicked ' + '\'' + e.source.id + '\'');
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



// This bit listens to the orientation change and re-establishes the width 
// of the "main" view, allowing the layout to survive after orientation changes
Ti.Gesture.addEventListener('orientationchange', function(e) {
    $.main.width=Ti.Platform.displayCaps.platformWidth;
});

$.explore.open();