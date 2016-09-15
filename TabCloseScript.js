chrome.browserAction.onClicked.addListener(function(tab) {  
   closeLeftTabs();
});


function closeLeftTabs() {

  performActionOnCurrentTab(function(activeTab){
     if(activeTab) {
        chrome.tabs.query({currentWindow : true,pinned: false},function(tabs) {
             for (var i = 0; i < tabs.length; i++) {
                 if (tabs[i].index < activeTab.index){
                     chrome.tabs.remove(tabs[i].id, null);
                 }
             }
         });
     }
 });


}

function performActionOnCurrentTab(tabCallback) {
   chrome.tabs.query({ currentWindow : true, active : true },function (tabArray) { tabCallback(tabArray[0]); });
}