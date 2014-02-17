// ==UserScript==
// @name         Repost remover
// @namespace    http://alex.renyov.vk/
// @version      0.2
// @description  cleans vk news garbage
// @match        http://vk.com/feed
// @copyright    2014, Alex Renyov
// @require      http://code.jquery.com/jquery-1.10.2.min.js
// @require      http://underscorejs.org/underscore-min.js
// ==/UserScript==

$(function() {
    var blackList = ['http://vk.com/giftofgods'];
    var removeReposts = function() {
       	$('[class*="repost"]').remove();
       	$('.feed_row').has('.group_share').remove();
       	// do not remove left_ads entirely, as it leads to vk javascript errors
       	$('#left_ads').css('display', 'none');
        
        $('div.feed_row').each(function() {
            var html = this.innerHTML;
            var found = _.find(blackList, function(s) { return html.indexOf(s) >= 0; });
            if (typeof(found) !== 'undefined') {
                var $el = $(this);
                $el.css({height: '1px', "max-height": '1px', overflow: "hidden"});
            }
        });
    };
    $(document.body).bind('DOMSubtreeModified', removeReposts);
    //window.setInterval(removeReposts, 1000);
});
