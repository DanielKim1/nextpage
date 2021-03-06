chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (tab.url.match(/\d+\.\d+$/)) {
    chrome.pageAction.show(tab.id);
  }
});

chrome.pageAction.onClicked.addListener(function (tab) {
  var nextPageUrl = tab.url.replace(/\d+\.\d+$/, function(match){
      var nextPageSuffix = parseFloat(match) + 1;
			return nextPageSuffix.toFixed(4);
  })
  chrome.tabs.update({url: nextPageUrl});
});
