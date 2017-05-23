$(document).ready(function(){ 
	$(".scroll").click(function(event){
		event.preventDefault();
		$("html,body").animate({scrollTop:$(this.hash).offset().top}, 300);
		$('.navbar-default a').removeClass('selected');
		$(this).addClass('selected');
    	});
});

 $(document).ready(function(){
     $(".projects>li>a").on("click", function(e){
        e.preventDefault();
        var li=$(this).parent(),
            li_height = li.height(),
            details=li.find(".details"), 
            details_height=details.height(),
            new_height=details_height+140; 
        li.toggleClass("current").animate({
            paddingBottom: new_height
        }, { duration: 200, queue: false }).siblings().removeClass("current");
        $(".projects li:not(.current)").animate({
            paddingBottom: '0'
        }, { duration: 200, queue: false }).find(".details").slideUp(200);
        $(".current").find(".details").slideDown(200);
    });
 });   

 window.onload=function ()
    {
        var aDiv=document.getElementsByClassName('div1');
        var aBtn=document.getElementsByClassName('nav');
        //var aBt=aDiv;
        for(var i=0;i<aDiv.length;i++)
        {
            aDiv[i].onmouseover = function(){
                startMove(this, 'width', 700);
            }
            aDiv[i].onmouseout = function(){
                startMove(this, 'width', 100);
            }
        }
        
        aBtn.onmouseover = function(){
           startMove(this, 'width', 150);
        }
        aBtn.onmouseout = function(){
            startMove(this,'width', 100);
        }
    };


    // 这个直接在style 上做出改动，就不需要offset了
    function getStyle(obj, name)
    {
        if(obj.currentStyle)
        {
            return obj.currentStyle[name];
        }
        else
        {
            return getComputedStyle(obj, false)[name];
        }
    }

    function startMove(obj, attr, iTarget)
    {
        clearInterval(obj.timer);
        obj.timer=setInterval(function (){
            var cur=0;

            if(attr=='opacity')
            {
                cur=Math.round(parseFloat(getStyle(obj, attr))*100);
            }
            else
            {
                cur=parseInt(getStyle(obj, attr));
            }

            var speed=(iTarget-cur)/6;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);

            if(cur==iTarget)
            {
                clearInterval(obj.timer);
            }
            else
            {
                if(attr=='opacity')
                {
                    obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                    obj.style.opacity=(cur+speed)/100;

                    document.getElementById('txt1').value=obj.style.opacity;
                }
                else
                {
                    obj.style[attr]=cur+speed+'px';
                }
            }
        }, 30);
    }