debugger;

/*
// Listen for messages
chrome.tabs.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("connection success")
    // If the received message has the expected format...
    if (request.action == "getDOM")
        sendResponse({ question: "Who's there?" });
    else
        sendResponse({ question: "Madame who?" }); // Send nothing..
});
*/

var id = "fachobicafhpmkpeaphgdhjfldckpmpd";


// Get HTML of current tab
let getButton = document.getElementById("getHTML");

getButton.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
        console.log(response.farewell);
    });

    chrome.scripting.executeScript(
        {
        target: { tabId: tab.id },
        function: getPageHTML,
    });
});

// Get current page html 
async function getPageHTML() {
    let tabHtml = document.body.innerHTML;
}

function traversal(html) {
    const checkout = document.querySelector(".checkout");
    const parents = Array.from(checkout.children);
    parents.forEach(element => {
        
    });
    return insertCoupon(coupon);
}