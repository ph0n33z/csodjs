$(document).ready(function()    {
        
$ smjquery('#main-menu').smartmenus('refresh')

$('.cso-txt span:contains("Online Class")').each(function(){
 $(this).html($(this).html().replace('Online Class','Web-Based Training'));
});

$('[data-original-title="Online Class"]').attr('data-original-title', 'changed tooltip');
     $('.tooltip-cso').tooltip();

$('.cso-li-filter li:contains("Popular")').hide();

$('.item.oc').css({'background','url("https://placeholdit.imgix.net/~text?txtsize=33&txt=61×61&w=61&h=61")'});

var box = $('#container2 span:contains("No assigned training")');
 if(box.length > 0){
   box.parents('#container2').children(':contains("No assigned training")').hide();
}

}); 