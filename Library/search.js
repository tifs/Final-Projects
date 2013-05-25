$(function() {
	$('#search').keyup(function() {
   		var text = $(this).val();
    	$('.book span').each(function() {
        	var match = !!$(this).text().toLowerCase().match(text.toLowerCase());
        	$(this).toggle(match);
    	});
	});

	var authors = [];
	$('.book').each(function() {
		authors.push({
			'sort': $(this).data('author-sort'),
			'id': '',
			'name': $(this).data('author')
		});
		//console.log($(this).data('title'));
		//console.log($(this).data('author'));
	});
	console.log(authors);

	var authors = _.sortBy(authors, function(v) {
		return v.sort;
	});
	
	//authors = _.uniq(authors, true, function(v) { return v.sort};);
	
	$.each(authors, function(key, val){
		var $a = $('<a>', {
			'href': '#',
			'text': val.name
		});
		$('#authors').append($a);
	});

	$('#authors a').click(function() {
		var author = $(this).text();
		$('.book').each(function() {
			$(this).toggle($(this).data('author') == author);
		});
		return false;
	})
});


$(function() {
	$('#search').keyup(function() {
   		var text = $(this).val();
    	$('.book span').each(function() {
        	var match = !!$(this).text().toLowerCase().match(text.toLowerCase()); // <-- Something about this is wronggggg
        	$(this).toggle(match); // <-- this too
    	});
	});

	var titles = [];
	$('.book').each(function() {
		titles.push({
			'sort': $(this).data('title-sort'),
			'id': '',
			'name': $(this).data('title')
		});
		//console.log($(this).data('title'));
		//console.log($(this).data('author'));
	});
	console.log(titles);

	var titles = _.sortBy(titles, function(v) {
		return v.sort;
	});

	$.each(titles, function(key, val){
		var $a = $('<a>', {
			'href': '#',
			'text': val.name
		});
		$('#titles').append($a);
	});

	$('#titles a').click(function() {
		var title = $(this).text();
		$('.book').each(function() {
			$(this).toggle($(this).data('title') == title);
		});
		return false;
	})

	(function($){

	$.fn.shuffle = function() {
		return this.each(function(){
			var items = $(this).children().clone(true);
			return (items.length) ? $(this).html($.shuffle(items)) : this;
		});
	}
	
	$.shuffle = function(span) {
		for(var j, x, i = span.length; i; j = parseInt(Math.random() * i), x = span[--i], span[i] = span[j], span[j] = x);
		return span;
	}
	
	})(jQuery);

	$('span').onloadstart(function(){
		$('#column-center').shuffle();
	});

});