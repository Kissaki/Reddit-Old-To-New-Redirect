// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest
// https://developer.mozilla.org/en-US/docs/Web/API/URL
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log(details.url)
    const url = new URL(details.url)
    url.hostname = 'www.reddit.com'

    return { redirectUrl: url.href }
  },
  {
    urls: [
      "https://old.reddit.com/*"
    ],
    types: [
      "main_frame"
    ]
  },
  ["blocking"]
)
