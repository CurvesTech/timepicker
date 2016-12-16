$(function() {
	$('.ct_timepicker').addClass('hidden'); // hiden the input elements itself
	// the plugin markup to be inserted after the time inputs
	var plugin_markup = '<div class="div_ct_timepicker">' +
		'<div class="ct_hour">' +
			'<h4>HH</h4>'+
			'<button type="button" class="btn btn-primary btn_increment"><i class="fa fa-chevron-up ct-up-hand"></i></button>'+
			'<input type="number" class="center_value" value="1">' +
			'<button type="button" class="btn btn-primary btn_decrement"><i class="fa fa-chevron-down ct-down-hand"></i></button>'+
		'</div>' +
		'<div class="ct_minute">' +
			'<h4>MM</h4>'+
			'<button type="button" class="btn btn-primary btn_increment"><i class="fa fa-chevron-up ct-up-hand"></i></button>'+
			'<input type="number" class="center_value" value="1">' +
			'<button type="button" class="btn btn-primary btn_decrement"><i class="fa fa-chevron-down ct-down-hand"></i></button>'+
		'</div>' +
		'<div class="ct_meridiem">' +
			'<h4>AM/PM</h4>'+
			'<button type="button" class="btn btn-primary btn_switch"><i class="fa fa-chevron-up ct-up-hand"></i></button>'+
			'<input type="text" class="center_value" value="AM" readonly>' +
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
			} else if(hours == 12) {
				// then that means 12 PM right. 
				meridiem = 'PM';
			} else if(hours == 0) {
				// then it means midnight.
				hours = 12;
			}

			if(hours.toString().length == 1) {
				hours = '0' + hours;
			}
			if(minutes.toString().length == 1) {
				minutes = '0' + minutes;
			}
			// assign the values to the control
			$(obj).next().find('.ct_hour').find('.center_value').val(hours);
			$(obj).next().find('.ct_minute').find('.center_value').val(minutes);
			$(obj).next().find('.ct_meridiem').find('.center_value').val(meridiem);

		}
	});

	/**
	 * HANDLERs
	 */
	
	// HOUR INCREMENTER
	$('body').on('click', '.ct_hour .btn_increment', function() {
		var hourCenterValue = $(this).closest('.ct_hour').children('.center_value');
		var current_val = parseInt( hourCenterValue.val() );
		if(current_val < 12) {
			current_val ++;
			if(current_val.toString().length == 1) {
				current_val = '0' + current_val;
			}
			hourCenterValue.val(current_val);
		}
		setTimeInField($(this).closest('.ct_hour').closest('.div_ct_timepicker'));
	});

	// HOUR DECREMENTER
	$('body').on('click', '.ct_hour .btn_decrement', function() {
		var hourCenterValue = $(this).closest('.ct_hour').children('.center_value');
		var current_val = parseInt( hourCenterValue.val() );
		if(current_val > 1) {
			current_val --;
			if(current_val.toString().length == 1) {
				current_val = '0' + current_val;
			}
			hourCenterValue.val(current_val);
		}
		setTimeInField($(this).closest('.ct_hour').closest('.div_ct_timepicker'));
	});

	// MINUTE INCREMENTER
	$('body').on('click', '.ct_minute .btn_increment', function() {
		var minuteCenterValue = $(this).closest('.ct_minute').children('.center_value');
		var current_val = parseInt( minuteCenterValue.val() );
		if(current_val < 59) {
			current_val ++;
			if(current_val.toString().length == 1) {
				current_val = '0' + current_val;
			}
			minuteCenterValue.val(current_val);
		}
		setTimeInField($(this).closest('.ct_minute').closest('.div_ct_timepicker'));
	});

	// MINUTE DECREMENTER
	$('body').on('click', '.ct_minute .btn_decrement', function() {
		var minuteCenterValue = $(this).closest('.ct_minute').children('.center_value');
		var current_val = parseInt( minuteCenterValue.val() );
		if(current_val > 0) {
			current_val --;
			if(current_val.toString().length == 1) {
				current_val = '0' + current_val;
			}
			minuteCenterValue.val(current_val);
		}
		setTimeInField($(this).closest('.ct_minute').closest('.div_ct_timepicker'));
	});
	// MERIDIEM SWITCHER
	$('body').on('click', '.ct_meridiem .btn_switch', function() {
		var meridiemCenterValue = $(this).closest('.ct_meridiem').children('.center_value');
		var current_val = meridiemCenterValue.val();
		if(current_val == 'AM') {
			current_val = 'PM';
		} else {
			current_val = 'AM';
		}
		meridiemCenterValue.val(current_val);
		setTimeInField($(this).closest('.ct_meridiem').closest('.div_ct_timepicker'));
	});

	function setTimeInField(el) {
		var ct_hour = parseInt( el.find('.ct_hour').find('.center_value').val() );
		var ct_minute = parseInt( el.find('.ct_minute').find('.center_value').val() );
		var ct_meridiem = el.find('.ct_meridiem').find('.center_value').val();	
		// the am edge case.	
		if( (ct_hour == 12) && (ct_meridiem.trim() == 'AM') ) {
			ct_hour -= 12;
		} else if(ct_meridiem.trim() == 'PM') {
			ct_hour += 12;
			// the pm edge case.
			if(ct_hour == 24) {
				ct_hour = 12;
			}
		}
		// adding the trailing zeros.
		if(ct_hour.toString().length == 1) {
			ct_hour = '0' + ct_hour;
		}

		if(ct_minute.toString().length == 1) {
			ct_minute = '0' + ct_minute;
		}

		el.prev().val(ct_hour + ":" + ct_minute);
		
	}
});
