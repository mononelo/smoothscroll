Smooth Scroll
=============

Tired of looking for a plugin that would provide me the ability to navigate within a page without jumps, I decided to create my own code of internal navigation using anchors and jQuery.
You can check all the infomation at <a href="http://plugins.mononelo.es/smoothscroll/" target="_blank">plugins.mononelo.es/smoothscroll</a>


This is what the plugin does:

	<a href="#anchor">Anchor</a>
	
It replaces this anchor by this one:

	<a onclick="javascript:scrollto('#anchor');">Anchor</a>
	
In fact I mantain the href value but I change to href="javascript:void(0);" to prevent future errors of navigation.

The function that does this is very simple:

	function smoothscroll(){
		$('a[href^=#]').each(function(){
			var e = $(this);
			var id = e.attr('href');
			e.attr('href','javascript:void(0)');
			e.attr('onclick','javascript:smoothscrollto(\''+id+'\')');
		});
	}

And after that the other function that we need is scrollto():

	function smoothscrollto(id){
		var e = $(id);
		var p = e.offset().top;
		$('html, body').animate({ scrollTop: p },1500);
	}


Installation:

	<!-- Import jQuery -->
	<script src="http://media.mononelo.es/jquery-min.js"></script>
	
	<!-- Import Smooth Scroll -->
	<script src="js/smoothscroll.js"></script>
	
	<script>
		$(document).ready(function(){
			smoothscroll();
		});
	</script>