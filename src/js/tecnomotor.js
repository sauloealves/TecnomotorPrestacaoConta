$('input').on("keypress", function(e) {
	var self = $(this)
	  , form = self.parents('form:eq(0)')
	  , focusable
	  , next
	  ;
	if (e.keyCode == 13) {
		focusable = form.find('input,a,select,button,textarea').filter(':visible');
		next = focusable.eq(focusable.index(this)+1);
		if (next.length) {
			next.focus();
		} else {
			$("#btnEntrar").trigger('click');
		}
		return false;
	}
});