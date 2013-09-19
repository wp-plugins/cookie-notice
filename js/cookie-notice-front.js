jQuery(document).ready(function($) {

	$(document).on('click', '#cn-accept-cookie', function(event) {
		event.preventDefault();

		//sets cookie
		var cnTime = new Date();
		var cnLater = new Date();

		cnLater.setTime(cnTime.getTime() + cnArgs.cookieTime);
		document.cookie = cnArgs.cookieName+"="+escape(cnArgs.cookieValue)+";expires="+cnLater.toGMTString()+';domain='+cnArgs.cookieDomain+';path='+cnArgs.cookiePath;

		//hides box
		if(cnArgs.hideEffect === 'fade') {
			$('#cookie-notice').fadeOut(300, function() {
				$(this).remove();
			});
		} else if(cnArgs.hideEffect === 'slide') {
			$('#cookie-notice').slideUp(300, function() {
				$(this).remove();
			});
		} else {
			$('#cookie-notice').remove();
		}
	});
});