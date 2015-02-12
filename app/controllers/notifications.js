// dummy click event.  Add your own!
function testclick(e){
	alert('Clicked ' + '\'' + e.source.id + '\'');
}

// handles the "Like button"
function likeunlike(e){
	// change like/unlike image, based on the current image
	if (e.source.image==="/330-Dollar_30.png"){
		e.source.image="/Green-Dollar-Sign.png";
	}else{
		e.source.image="/330-Dollar_30.png";
	}
}

// shows or hide the menu
var menuOpen = false;
function showhidemenu(e){
	if (!menuOpen){
		moveTo="300dp";
		menuOpen=true;
	}else{
		moveTo="0";
		menuOpen=false;
	}
	
	// have to set the current width of the "main" view before moving it so it doesn't get squeezed
	// try commenting out the following line and setting the "newLeft" to 200 instead of 
	// 300 to see what I mean
	$.main.width=Ti.Platform.displayCaps.platformWidth;
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

function openExplore() {
    var explore = Alloy.createController('explore').getView();
    explore.open();
}


/**
 * Opens index (home) page
 */
function openHome() {
    var HomePage = Alloy.createController('HomePage').getView();
    HomePage.open();
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
function openProfile() {
    var profile = Alloy.createController('profileView').getView();
    profile.open();
}

/**
 *Opens Explore Page 
 */

/////////////////////////End Page Open Statements/////////////////////////




// This bit listens to the orientation change and re-establishes the width 
// of the "main" view, allowing the layout to survive after orientation changes
Ti.Gesture.addEventListener('orientationchange', function(e) {
    $.main.width=Ti.Platform.displayCaps.platformWidth;
});

$.notifications.open();