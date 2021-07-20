var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?stackoverflow\.com/;

chrome.runtime.onInstalled.addListener(() => {

  // Detect chaning tab
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
    if (request.greeting === "hello")
      sendResponse({ farewell: "goodbye" });
  }
  );

  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete'/* && detectPaymentGatway() == true */) {
      console.log("TAB UPDATED!");
   
      
      /*
      getTab().then(url => {
        console.log(url);

         chrome.tabs.sendMessage(tab.id, { action: 'getDOM' }, function (response) {
        console.log('I received the following DOM content:\n' + response.dom);
      });

      })
      */
    }
  });
});


async function getTab() {
  let queryOptions = { active: true, currentWindow: true };
  let tabs = await chrome.tabs.query(queryOptions);
  return tabs;
}



async function detectPaymentGatway() {


}

// Insert the coupon, use as call back
async function insertCoupon(coupon) {


}
