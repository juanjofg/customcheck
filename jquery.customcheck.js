/*---------------------------------------------
* juanjofg custom checkboxes and radio buttons
* v 0.2
---------------------------------------------*/
//Custom checkbox & radio button
;(function($, doc, win){
	"use strict";
	
	var name = 'msn';

	function CustomInputs(el, opts){
		this.$el = $(el);

		this.defaults = {
			optA: 'a',
			optB: 'b'
		};

		var meta = this.$el.data(name + '-opts');
		this.opts = $.extend(this.defaults, opts, meta);

		this.$el.data(name, this);

		//Track elements in the plug-in
		this.$check = this.$el.find('input[type=checkbox]').before('<i>').css({opacity:0, marginLeft: -17});
		this.$radio = this.$el.find('input[type=radio]').before('<i>').css({opacity:0, marginLeft: -17});

		this.init();
	}

	function currentState (elem){
		if ( $(elem).is(':checked') && $(elem).is(':disabled') ){
			$(elem).prev('i').addClass('checkeddisabled');
		} else if ($(elem).is(':checked')){
			$(elem).prev('i').addClass('chk');
		} else if ($(elem).is(':disabled')){
			$(elem).prev('i').addClass('checkboxdisabled');
		}
	}

	CustomInputs.prototype.init = function(){
		var self = this;

		this.$check.prev('i').addClass('customCheck');
		this.$check.each(function(){
			var checkElem = $(this);
			currentState(checkElem);
		});
		this.$radio.prev('i').addClass('customRadio');
		this.$radio.each(function(){
			var radioElem = $(this);
			currentState(radioElem);
		});
		//check
		this.$check.on('hover', function(e){
			if($(this).is(':disabled')){
				return false;
			} else {
				$(this).prev('i').toggleClass('hoverchk');
			}
		});
		//radio
		this.$radio.on('hover', function(e){
			if($(this).is(':disabled')){
				return false;
			} else {
				$(this).prev('i').toggleClass('hoverrd');
			}
		});
		//check
		this.$check.on('change.' + name, function(e){
			e.preventDefault();
			if ($(this).is(':checked')){
				$(this).prev('i').addClass('chk');
			} else {
				$(this).prev('i').removeClass('chk');
			}
		});
		//radio
		this.$radio.on('change.' + name, function(e){

			var rdname = $(this).prop('name');
			e.preventDefault();
			if ($(this).is(':checked')){
				$(this).prev('i').addClass('chkrd');

				$('input[name=' + rdname + ']').not($(this)).each(function(){
					$(this).prev('i').removeClass('chkrd hoverchkrd');
				});
			}
		});
	};

	$.fn.customInputs = function(opts) {
		return this.each(function(){
			new CustomInputs(this, opts);
		});
	};
})(jQuery, document, window);