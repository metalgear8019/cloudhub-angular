$(function() {
	$('input.button_default').on('click', function() {
		if ('Show' == $(this).val()) {
			for (var i = 0; i < $('p').length; i++) {
				if($('p').eq(i).is(':hidden')) {
					$('p').eq(i).slideDown();
					break;
				}
			}
		} else if ('Hide' == $(this).val()) {
			for (var i = $('p').length - 1; i >= 0; i--) {
				if($('p').eq(i).is(':visible')) {
					$('p').eq(i).slideUp();
					break;
				}
			}
		} else if ('Send' == $(this).val()) {
			for (var i = 0; i < $('.text_default').length; i++) {
				if ("" == $('.text_default').eq(i).val()) {
					$('.text_default').eq(i).addClass('text_error');
				} else {
					$('.text_default').eq(i).removeClass('text_error');
				}
			}
			
			for (var i = 0; i < $('.textarea_default').length; i++) {
				if ("" == $('.textarea_default').eq(i).val()) {
					$('.textarea_default').eq(i).addClass('text_error');
				} else {
					$('.textarea_default').eq(i).removeClass('text_error');
				}
			}
		} else if ('Cancel' == $(this).val()) {
			$('.text_default').val('').removeClass('text_error');
			$('.textarea_default').val('').removeClass('text_error');
		}
		
		if ($(this).hasClass('button_action')) {	
			$(this).closest('.wrapper').toggleClass('wrapper_action', 200).toggleClass('wrapper_action', 200);
		} else if( $(this).hasClass('button_danger')) {
			$(this).closest('.wrapper').toggleClass('wrapper_danger', 200).toggleClass('wrapper_danger', 200);
		}
		return false;
	});
	
	$('.table_wrapper').find('tr').on('hover', function() {
		$(this).toggleClass('wrapper_odd', 200);
	});
	
	$('.table_wrapper').find('tr').on('click', function() {
		$(this).toggleClass('wrapper_action', 200);
	});
});

function doScroll(id) {
	$('body').animate({scrollTop: $(id).offset().top}, 'slow');
}

