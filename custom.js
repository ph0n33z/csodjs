$(document).ready(function(){

    $(".smenu.sm.navTabs").append('<li><a href="javascript:;" title="Support" aria-haspopup="true" aria-expanded="false" aria-controls="menu-Support" class="has-submenu"><span class="sub-arrow">+</span>Support</a><ul class="navTabs-subTabList sm-nowrap" role="group" aria-labelledby="Support" aria-expanded="false" style="display: none; width: auto; min-width: 10em; max-width: 20em; top: auto; left: 0px; margin-left: 0px; margin-top: 0px"><li><a href="http://cp.carefusion.com" title="Change Password" tabindex="-1">Change Password</a></li><li><a href="/catalog/CustomPage.aspx?id=20000480&amp;tab_page_id=20000480" title="Contact Us" tabindex="-1">Contact Us</a></li><li><a href="/catalog/CustomPage.aspx?id=20000480&amp;tab_page_id=20000480" title="Frequently Asked Questions" tabindex="-1">Frequently Asked Questions</a></li></ul></li>');

	$smjquery('#main-menu').smartmenus('refresh')

	var box = $('#container2 span:contains("No assigned training")');
 	if(box.length > 0){
   	box.parents('#container2').children(':contains("No assigned training")').hide();
	}

	$('.cso-txt span:contains("Online Class")').each(function(){
 	$(this).html($(this).html().replace('Online Class','Web-Based Training'));
	});

	$('[title="Browse for Training"]').attr('Browse for Training','Browse Learning');

});