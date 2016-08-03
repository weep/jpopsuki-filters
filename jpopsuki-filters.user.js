// ==UserScript==
// @name         jpopsuki filter
// @namespace    http://weep.se/
// @version      0.1
// @description  try to take over the world!
// @author       Weep
// @updateURL	 https://raw.githubusercontent.com/weep/jpopsuki-filters/master/jpopsuki-filters.meta.js
// @downloadURL  https://raw.githubusercontent.com/weep/jpopsuki-filters/master/jpopsuki-filters.user.js
// @match        http://jpopsuki.eu/artist.php*
// @grant        none
// ==/UserScript==	

(function() {
    'use strict';

    // Your code here...
    var filters = document.querySelector(".artist_filter");

    var af_format = document.querySelector("#af_format");
    var af_bitrate = document.querySelector("#af_bitrate");
    var af_media = document.querySelector("#af_media");

    CreateButton("Save filters", filters, SetFilters);

    GetFilters().then(function(){
        artist_filter();
    });

    function GetFilters() {
        return new Promise(function(resolve, reject){
            var filters = JSON.parse(window.localStorage.getItem("customjpopfilter"));
            af_format.value = filters.af_format;
            af_bitrate.value = filters.af_bitrate;
            af_media.value = filters.af_media;
            resolve();
        });
    }

    function SetFilters() {
        var filters = {
            af_format: af_format.value,
            af_bitrate: af_bitrate.value,
            af_media: af_media.value
        }
        console.log("set filters", filters);
        window.localStorage.setItem("customjpopfilter", JSON.stringify(filters));
    }

    function CreateButton(text, context, onclick){
        var button = document.createElement("input");
        button.type = "button";
        button.value = text;
        button.onclick = onclick;

        context.appendChild(button);
    }
})();