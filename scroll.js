var prevTopTweetId;
$(window).load(function() {
	loadFromStorage();
	/* setInterval(function(){
    		window.scrollTo(0,document.body.scrollHeight);
	}, 2000); */
	$('#global-actions').append('<li id="scroll-button" style="cursor:pointer"><a class="js-nav" title="LastTweet"><span class="text">LastTweet</span></a></li>');
	$('#scroll-button').click(function() {
		var newTopTweet = $('#' + prevTopTweetId).prev();
		if (newTopTweet.length != 0) {
			$('html, body').animate({scrollTop: $(newTopTweet).offset().top - 46}, 1500);
			setTimeout(function(){
	    		$(newTopTweet).effect("highlight", {color: '#87cefa'}, 1500);
			}, 1000);
		}
	});
	$('.js-new-items-bar-container').click(function() {
		newTopNoScroll();
	});
	$('#global-nav-home').click(function() {
		newTopNoScroll();
	});
});

function loadFromStorage() {
	prevTopTweetId = localStorage['prev-top-tweet'];
	localStorage['prev-top-tweet'] = $('#stream-items-id li').first().attr('id');

}
function newTopNoScroll() {
	var id = $('#stream-items-id li').first().attr('id');
	prevTopTweetId = id;
	localStorage['prev-top-tweet'] = id;
}

function check(elementId) {
	var found = false;
	$('.js-navigable-stream').children('li').each(function(index) {
		found = found || ((elementId) == ($(this).attr('id')));
	});
	return found;
}