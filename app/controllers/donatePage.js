
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

// shows or hide the menu
var menuOpen = false;
function showhidemenu(e){
	if (!menuOpen){
		moveTo="60%";
		menuOpen=true;
	}else{
		moveTo="0%";
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
 * Opens home page
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
    notifications.open({modal:true,
    	 _parent: Titanium.UI.currentWindow,
    	 exitOnClose:false
    	 });
}

function openExplore() {
	var explore = Alloy.createController('explore').getView();
	explore.open();
}

/**
 *Opens Profile Page 
 */
function openProfile(e) {
    
    //alert($.nateJones.text);
    Titanium.App.Properties.setString('profilePictureID', e.source.id);
    Titanium.App.Properties.setString('name', e.source.text);
    var profile = Alloy.createController('profileView').getView();
    profile.open();
}

/////////////////////////End Page Open Statements/////////////////////////




// This bit listens to the orientation change and re-establishes the width 
// of the "main" view, allowing the layout to survive after orientation changes
Ti.Gesture.addEventListener('orientationchange', function(e) {
    $.main.width=Ti.Platform.displayCaps.platformWidth;
});


$.donatePage.open({modal: true, exitOnClose: true});