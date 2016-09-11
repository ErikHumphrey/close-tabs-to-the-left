function closeLeftTabs() { 
	var curTab;
	chrome.tabs.getSelected( null , function(tab) {  
		curTab=tab;
	});
	chrome.tabs.getAllInWindow(null,function(tabs) {
		for (var i = 0; i < tabs.length; i++) {
			if (tabs[i].index<curTab.index){
				chrome.tabs.remove(tabs[i].id, null);
			}
		}
	});
} 
chrome.browserAction.onClicked.addListener(function(tab) {    
	  closeLeftTabs();
  });