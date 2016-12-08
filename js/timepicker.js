$(function() {
	// $('.ct_timepicker').css('display', 'none'); // hiden the input elements itself
	// the plugin markup to be inserted after the time inputs
	var plugin_markup = '<div class="div_ct_timepicker">' +
		'<div class="ct_hour">' +
			'<h4>HH</h4>'+
			'<button type="button" class="btn btn-primary btn_increment"><i class="fa fa-chevron-up ct-up-hand"></i></button>'+
			'<h2 class="center_value">1</h2>' +
			'<button type="button" class="btn btn-primary btn_decrement"><i class="fa fa-chevron-down ct-down-hand"></i></button>'+
		'</div>' +
		'<div class="ct_minute">' +
			'<h4>MM</h4>'+
			'<button type="button" class="btn btn-primary btn_increment"><i class="fa fa-chevron-up ct-up-hand"></i></button>'+
			'<h2 class="center_value">1</h2>' +
			'<button type="button" class="btn btn-primary btn_decrement"><i class="fa fa-chevron-down ct-down-hand"></i></button>'+
		'</div>' +
		'<div class="ct_meridiem">' +
			'<h4>AM/PM</h4>'+
			'<button type="button" class="btn btn-primary btn_switch"><i class="fa fa-chevron-up ct-up-hand"></i></button>'+
			'<h2 class="center_value">AM</h2>' +
			'<button type="button" class="btn btn-primary btn_switch"><i class="fa fa-chevron-down ct-down-hand"></i></button>'+
		'</div>' +
		'<div style="clear:both"></div>'+

	'</div>';
	// insert the markup
	$('.ct_timepicker').after(plugin_markup);

	// initer 
	$('.ct_timepicker').each(function(index, obj) {
		if($(obj).val() != '') {
			var time = $(obj).val();
			var hours = parseInt(time.split(':')[0]);
			var minutes = parseInt(time.split(':')[1]);
			var meridiem = 'AM';
			if(hours > 12) {
				hours -= 12;
				meridiem = 'PM';
			}
			// assign the values to the control
			$(obj).next().find('.ct_hour').find('.center_value').text(hours);
			$(obj).next().find('.ct_minute').find('.center_value').text(minutes);
			$(obj).next().find('.ct_meridiem').find('.center_value').text(meridiem);

		}
	});

	/**
	 * HANDLERs
	 */
	
	// HOUR INCREMENTER
	$('body').on('click', '.ct_hour .btn_increment', function() {
		var hourCenterValue = $(this).closest('.ct_hour').children('.center_value');
		var current_val = parseInt( hourCenterValue.text() );
		if(current_val < 12) {
			current_val ++;
			hourCenterValue.text(current_val);
		}
		setTimeInField($(this).closest('.ct_hour').closest('.div_ct_timepicker'));
	});

	// HOUR DECREMENTER
	$('body').on('click', '.ct_hour .btn_decrement', function() {
		var hourCenterValue = $(this).closest('.ct_hour').children('.center_value');
		var current_val = parseInt( hourCenterValue.text() );
		if(current_val > 1) {
			current_val --;
			hourCenterValue.text(current_val);
		}
		setTimeInField($(this).closest('.hour').closest('.div_ct_timepicker'));
	});

	// MINUTE INCREMENTER
	$('body').on('click', '.ct_minute .btn_increment', function() {
		var minuteCenterValue = $(this).closest('.ct_minute').children('.center_value');
		var current_val = parseInt( minuteCenterValue.text() );
		if(current_val < 59) {
			current_val ++;
			minuteCenterValue.text(current_val);
		}
		setTimeInField($(this).closest('.ct_minute').closest('.div_ct_timepicker'));
	});

	// MINUTE DECREMENTER
	$('body').on('click', '.ct_minute .btn_decrement', function() {
		var minuteCenterValue = $(this).closest('.ct_minute').children('.center_value');
		var current_val = parseInt( minuteCenterValue.text() );
		if(current_val > 0) {
			current_val --;
			minuteCenterValue.text(current_val);
		}
		setTimeInField($(this).closest('.ct_minute').closest('.div_ct_timepicker'));
	});
	// MERIDIEM SWITCHER
	$('body').on('click', '.ct_meridiem .btn_switch', function() {
		var meridiemCenterValue = $(this).closest('.ct_meridiem').children('.center_value');
		var current_val = meridiemCenterValue.text();
		if(current_val == 'AM') {
			current_val = 'PM';
		} else {
			current_val = 'AM';
		}
		meridiemCenterValue.text(current_val);
		setTimeInField($(this).closest('.ct_meridiem').closest('.div_ct_timepicker'));
	});

	function setTimeInField(el) {
		var ct_hour = parseInt( el.find('.ct_hour').find('.center_value').text() );
		var ct_minute = parseInt( el.find('.ct_minute').find('.center_value').text() );
		var ct_meridiem = el.find('.ct_meridiem').find('.center_value').text();		
		if(ct_meridiem.trim() == 'PM') {
			ct_hour += 12;
		}
		el.prev().val(ct_hour + ":" + ct_minute);
		
	}
});