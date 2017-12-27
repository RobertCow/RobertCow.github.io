(function($){
	$(document).ready(function (){

	$(".nav li").each(function() {
        $(this).has(".nav-son").click(function(a){
				$(this).toggleClass("active").find(".nav-son").toggle().toggleClass("active");
				$(this).siblings().removeClass("active").find(".nav-son").hide().removeClass("active");
				 a.stopPropagation();
				});
    });
	
	$(document).click(function(){
        $(".nav-son").fadeOut("fast").parent().removeClass("active");
		});
	
	$(".index-banner").slidesjs({
		 width: 200,
        height: 310,
        navigation: {
          active: false
        },
        pagination: {
		  active: true,
          effect: "fade"
        },
        effect: {
          fade: {
            speed: 500
          }
        },
		play: {
		  active: false,
		  auto: true,
		  effect: "fade",
		  interval: 5000, 
		  swap: false,
		  pauseOnHover:true,
		  restartDelay:5000
		  }
      });
	  
	$(".team").find(".team-guy").slideUp("fast");
	$(".team li").click(function(){
		$(this).find(".team-guy").slideToggle("fast");	
    });
	
	$("#container").height($("#container").width()/1.5);
	
	$(".job").ready(function(m) {
		if($(".job .h-h3").length > 1){
		 $(this).find(".menu").html("<ul class='menu-list'></ul>");
	   }; 
	     $(".job .h-h3").each(function() {
		   var htid = $(".job .h-h3").index(this);
		   $(this).attr("id","to"+htid);
		   var hid = "#"+$(this).attr("id");
		   $("<li><a href='"+hid+"'>"+$(this).html()+"</a></li>").appendTo(".menu-list");
		   $(".menu-list li").first().addClass("active");
       });
	   $(".menu-list a").click(function(){
		   	var href = $(this).attr("href");
			var pos = $(href).offset().top-100;
			$("html,body").animate({scrollTop: pos}, 500);	
			return false;
		   });
   	   });
	
	if($(window).width() < 1000){

//$(".head-box").on('click','.nav',function(){
//	   $(this).toggleClass("active");
 // });
		$(".head-box").click(function(){
			$(".nav").toggleClass("active");
			});
//		$(".nav").click(function(){
//			$(this).toggleClass("active");
//			});
		};
	
	
	//返回顶部
	var $backToTopTxt = "返回顶部", $backToTopEle = $('<div class="backtotop"></div>').appendTo($("body")).attr("title", $backToTopTxt).click(function() {
            $("html, body").animate({ scrollTop: 0 }, 200);
    }), $backToTopFun = function() {
        var st = $(document).scrollTop(), winh = $(window).height();
        (st > 0)? $backToTopEle.show(): $backToTopEle.hide();    
        //IE6下的定位
        if (!window.XMLHttpRequest) {
            $backToTopEle.css("top", st + winh - 200);    
        }
    };
    $(window).bind("scroll", $backToTopFun);
    $(function() { $backToTopFun(); });
	
	

});
})(window.jQuery);

window.onload=function(){
	var sh = $(".slidesjs-slide img").height();
	$(".slidesjs-slide").height(sh);
	$(".slidesjs-control").height(sh);
};

  
(function($){
	$(window).resize(function (){
       var rsh = $(".slidesjs-slide img").height();
	   $(".slidesjs-slide").height(rsh);
	   $(".slidesjs-control").height(rsh);
});
})(window.jQuery);



	/** 顶部fiex插件化  **/
    $.fn.fixed = function (option) {
        var _$win = $(window); 
        return this.each(function () {
        var $this = $(this),top = $this.offset().top,h = $this.height();
			
            _$win.bind("scroll", _move);

            function _move() {
                var st = _$win.scrollTop();
                if (st > 1 ) {
                    if (window.XMLHttpRequest) {
                        $this.addClass("active");
						$(".count").css("margin-top",63);
                    } else {
                        $this.css({top: st });
						$(".count").css("margin-top",63);
                    }
                } else {
                    $this.removeClass("active");
					$(".count").css("margin-top",103);
                }
            }
        });
    };

    //
    void function ($) {
        if($(window).width()>1000){$(".head").fixed()};
    }(jQuery);