/**
 * Created by Administrator on 2017/2/23.
 */
$(function(){
    var $container = $('#container');
    var $imgShow = $('#img-show');
    var $lastShow = $('#last-show');
    var $firstShow = $('#first-show');
    var margin = 2;
    var iNow=0;
    for(var i=0;i<24;i++){
        $container.append('<li><img src="images/'+(i+1)+'.jpg"/></li>');

    }
    var liWidth=($(document.body).width()-3*margin)/4;
    $('li').css({
        width:liWidth,
        height:liWidth
    }).on('tap',function(e){
        var index=$(this).index();
        iNow=index;
        $container.hide();
        $imgShow.show().css({
            background:'url(images/'+(index+1)+'.jpg) no-repeat center',
            backgroundSize:'contain'
        });
        e.preventDefault();

    });
    $imgShow.on('tap',function(e){
        $container.show();
        $imgShow.hide();
        $lastShow.slideUp();
        e.preventDefault();
    }).on('swipeleft', function () {
        iNow++;
        if(iNow==24){
            iNow=23;
            $lastShow.slideDown();
        }
        $lastShow.slideUp();
        $imgShow.show().css({
            background:'url(images/'+(iNow+1)+'.jpg) no-repeat center',
            backgroundSize:'contain'
        });

    }).on('swiperight',function(){
        iNow--;
        if(iNow==-1){
            iNow=0;
            $firstShow.slideDown();
        }
        $firstShow.slideUp();
        $imgShow.show().css({
            background:'url(images/'+(iNow+1)+'.jpg) no-repeat center',
            backgroundSize:'contain'
        });
    })


});