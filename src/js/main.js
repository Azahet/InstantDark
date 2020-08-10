 import '../scss/main.scss'

import {runMarketplace} from "./marketplace";
import {runReplace} from "./replace";
import {runThemeCreatorRank} from  "./themeCreatorRank";

chrome.extension.sendMessage({}, function(response) {
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);

            runMarketplace();
            runReplace();
            runThemeCreatorRank();

        }}, 10);
});