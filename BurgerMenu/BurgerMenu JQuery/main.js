$('.menu-toggle').click(function () {
	$(this).toggleClass('active')
	$('.menu-items').slideToggle(300, function () {
		if($(this).css('display') === 'none') {
			$(this).removeAttr('style')
		}
	})
})