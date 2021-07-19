debugger;
// Listen for messages
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    // If the received message has the expected format...
    if (request.action == "getDOM")
        sendResponse({ dom:document.all[0].outerHTML });
    else
        sendResponse({}); // Send nothing..
});


function traversal(html) {
    const checkout = document.querySelector(".checkout");
    const parents = Array.from(checkout.children);
    parents.forEach(element => {
        
    });
    return insertCoupon(coupon);
}