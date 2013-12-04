
	
	/*
	 * Smooth Scroll
	 * Author:			Pol EScarpenter (a.k.a. mononelo)
	 * Date:			01-12-13
	 * URL:				http://plugins.mononelo.es/smoothscroll/
	 * Version:			1.0
	 * 
	 * A simple jQuery powered navigation plugin
	 */

	function smoothscroll(){
		$('a[href^=#]').each(function(){
			var e = $(this);
			var id = e.attr('href');
			e.attr('href','javascript:void(0)');
			e.attr('onclick','javascript:smoothscrollto(\''+id+'\')');
		});
	}
	
	function smoothscrollto(id){
		var e = $(id);
		var p = e.offset().top;
		$('html, body').animate({ scrollTop: p },1500);
	}