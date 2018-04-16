chrome.browserAction.onClicked.addListener(function(activeTab){

chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
     var newURL = tabs[0].url;

var url = "https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2F";

var newURLL;

newURLL = url.concat(newURL.slice(newURL.indexOf('//')+2,newURL.indexOf('/',8 ) +1));

chrome.tabs.create({ url: newURLL});
});
});
