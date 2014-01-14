// ==UserScript==
// @name         Repost remover
// @namespace    http://alex.renyov.vk/
// @version      0.2
// @description  cleans vk news garbage
// @match        http://vk.com/feed
// @copyright    2014, Alex Renyov
// @require      http://code.jquery.com/jquery-1.10.2.min.js
// ==/UserScript==

$(function() {
    window.setInterval(function() {
        $('[class*="repost"]').remove();
        $('.feed_row').has('.group_share').remove();
        // do not remove left_ads entirely, as it leads to vk javascript errors
        $('#left_ads').css('display', 'none');
    }, 1000);
});
