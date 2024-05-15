chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "openInGMaps",
        title: "Open in Gmaps",
        contexts: ["page"]
    }, () => {
        if (chrome.runtime.lastError) {
            console.error("Error creating context menu: ", chrome.runtime.lastError.message);
        }
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "openInGMaps") {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            files: ['js/app.js']
        }).catch(err => console.error("Error executing script: ", err));
    }
});