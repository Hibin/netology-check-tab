
$(function(){

	var CountToReview = 0;
	var CountToReviewLabel = $('');

	let widget = $('div.timetable');
	let prev   = widget.find('span.btn_prev');

	let attent = prev.clone();
	attent.text('Проверить');
	$(attent).addClass('btn_check');

	CountToReviewLabel = $('<span class="counter_info"></span>');

	attent.append( CountToReviewLabel );
	prev.after( attent );

	let items = $('.classes-past').find('.counter_info');

	for( let i = 0; i < items.length; i++ ) {
		let count = $( items[i] ).text();
		count = isNaN( parseInt( count ) ) ? 0 : count;

		CountToReview += parseInt( count );
	}

	CountToReviewLabel.text( CountToReview );

	$('body').on('click', '.classes-nav .btn_default', function() {
		let items = $('.classes-past .classes-item');
		let itemsToHide = [];

		for( let i = 0; i < items.length; i++ ) {
			let item = $( items[i] );

			let count = item.find('.counter_info').text();
			count = parseInt( isNaN( parseInt( count ) ) ? 0 : count );

			if( !count ) {
				itemsToHide.push( item );
			}
		}

		if ($(this).hasClass('btn_check')) {
			/* Скрыть ненужные строки */
			$(itemsToHide).each(function(){ this.addClass('hidden'); })
		}
		else {
			/* Показать ненужные строки */
			$(itemsToHide).each(function(){ this.removeClass('hidden'); })
		}
	});
});
