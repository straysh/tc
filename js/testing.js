$(document).ready(function(){
    setInterval(showTime, 0);
    function showTime(){
        var today = new Date();
        var weekday = new Array(7)
        weekday[1] = "Mon."
        weekday[2] = "Tue."
        weekday[3] = "Wed."
        weekday[4] = "Thu."
        weekday[5] = "Fri."
        weekday[6] = "Sat."
        weekday[0] = "Sun."
        var currentDate = weekday[today.getDay()];
        $(".restaurant_time_w").text(currentDate);
    }
});
$(document).ready(function () {
/* Switch city */
/*$(function(){
    $(".location").hover(function(){
        $(this).find('.location_city').show();
    }, function () {
        $(this).find('.location_city').hide();
    });
});*/

/* location city */
/*function current_id(c_id){
	$(function(){
		alert(c_id);
		$("#city_id_s").val(c_id);
	});
}
$(function(){
	$(".location_city").find("td").click(function(){
		$("#location_city").text($(this).find("a").text());						
		cityName=$("#location_city").text($(this).find("a"));	
		info("location -  "+cityName,0);
		$('.location_city').hide();
	 });     
});*/

/*$(function(){
    $(".switch_city_list").find("td").click(function(){
			$(".search").width("555");
            w=$("#location_city").width()-57;       
            cw=$(".search").width()-w;
            iw=$("#search").width()-w;
            //alert(cw);
            $(".search").width(cw);
            $("#search").width(iw);   			          
    });     
});*/	

/* Messages and settings */
/*jQuery(function(){
    jQuery(".message").hover(function(){
        jQuery(this).find('.message_list').show();
    }, function(){
        jQuery(this).find('.message_list').hide();
    });

    jQuery(".setting").hover(function(){
        jQuery(this).find('.setting_list').show();
    }, function(){
        jQuery(this).find('.setting_list').hide();
    });
});*/
/* Tab controller */
jQuery(function(){
    jQuery(".tab_control:gt(0)").hide();
    if(jQuery("#main")[0]){
        var oLi = jQuery("#main .main_center .right .comment ul li");
    }else{
        var oLi = jQuery("#u_main .u_main_center .u_left .comment ul li");
    }
    oLi.click(function () {
      //  jQuery(this).addClass("active").siblings().removeClass("active");
        jQuery(".tab_control").eq(oLi.index(this)).show().siblings().hide();
        oLi.eq(oLi.index(this)).css("background", "#11d7e3").show().siblings().css("background", "#fff");
    	$(".post_review_submit").css("background", "#11d7e3");
	});
	jQuery(".post_review_submit").mouseover(function(){
        $(".post_review_submit").css("background", "#63656d");
    });
    jQuery(".post_review_submit").mouseout(function(){
        $(".post_review_submit").css("background", "#11d7e3");
    });
});

/* Report spam to Yummy Admin */
jQuery(function(){
    jQuery(".com_review").hover(function () {
        jQuery(this).find('.com_report_spam').show();
        jQuery(this).find('.com_add_to_favourite').show();
    }, function () {
        jQuery(this).find('.com_report_spam').hide();
        jQuery(this).find('.com_add_to_favourite').hide();
    });
/*    jQuery("#main .main_center .right .comment .contents .tab_control .merchant_reply").hover(function () {
        jQuery(this).find('.com_report_spam').show();
    }, function () {
        jQuery(this).find('.com_report_spam').hide();
    });*/
});
/* Add to favourites */
/*jQuery(function () {
    jQuery("#main .main_center .right .comment .contents .tab_control .com_review").hover(function () {
        jQuery(this).find('.com_add_to_favourite,').show();
    }, function () {
        jQuery(this).find('.com_add_to_favourite').hide();
    });

    jQuery("#main .main_center .right .comment .contents .tab_control .merchant_reply").hover(function () {
        jQuery(this).find('.com_add_to_favourite').show();
    }, function () {
        jQuery(this).find('.com_add_to_favourite').hide();
    });

});*/

/* Weekly view */
function simple_tooltip(target_items, name) {
    jQuery(target_items).each(function (i) {
        jQuery("body").append("<div class='" + name + "' id='" + name + i + "'><p>" + jQuery(this).attr('title') + "</p></div>");
        var my_tooltip = jQuery("#" + name + i);

        jQuery(this).removeAttr("title").mouseover(function () {
            my_tooltip.css({
                opacity: 0.9,
                display: "none"
            }).fadeIn(400);
        }).mousemove(function (kmouse) {
            my_tooltip.css({
                left: kmouse.pageX + (-450),
                top: kmouse.pageY + 15
            });
        }).mouseout(function () {
            my_tooltip.fadeOut(200);
        });
    });
}
jQuery(document).ready(function () {
    simple_tooltip("#main .main_center .right .rating_hours .weekly_view a", "sunflowamedia");
});
/* jquery undenfind */
jQuery(function () {
    jQuery("#sunflowamedia0 p").css("display", "none");
});
/* mouseover favourite */
jQuery(function(){
    jQuery("#top .top_center .favourite").mouseover(function(){
        jQuery("#top .top_center .add .favourite_over_font").show();
    });
    jQuery("#top .top_center .favourite").mouseout(function(){
        jQuery("#top .top_center .add .favourite_over_font").hide();
    });

    jQuery("#top .top_center .wishlist").mouseover(function(){
        jQuery("#top .top_center .add .wishlist_over_font").show();
    });
    jQuery("#top .top_center .wishlist").mouseout(function(){
        jQuery("#top .top_center .add .wishlist_over_font").hide();
    });

    jQuery("#top .top_center .share_to").mouseover(function(){
        jQuery("#top .top_center .add .share_to_over_font").show();
    });
    jQuery("#top .top_center .share_to").mouseout(function(){
        jQuery("#top .top_center .add .share_to_over_font").hide();
    });
});

/* sarch input font color */
jQuery(function (){
    jQuery(".search_input").focus(function(){
        jQuery(this).css("color","#000");
        jQuery(this).css("font-family","Verdana, Geneva, sans-serif");  
    });
});
});

/* back to top */
$(function () {
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 100) {
                $("#back_to_top").fadeIn(100);
            }
            else {
                $("#back_to_top").fadeOut(100);
            }
    });
    $("#back_to_top").click(function () {
        $('body,html').animate({ scrollTop: 0 }, 0);
            return false;
        });
    });
	
	browserWidth=$(window).width();
	localWidth=(browserWidth-1000) / 2 - 70;
	$("#back_to_top").css("right", "" + localWidth + "px");
});


/* submit form */
$(document).ready(function(){
    $("#plain_search_bt").click(function(){
        $("#plain_search").submit();
    }); 
});


/* album not backgroundcolor */
$(function(){
    $(".albums").find("li").click(function(){
           $(".albums").find("li").css("backgroundColor","#fff");       	          
    });     
});	


    /* 格式化时间戳 */

    function getTime(times){



        var myDate = new Date(times * 1000);
        //月 日 年
        var month;

        switch(myDate.getMonth()){
            case 0:
                    month = 'Jan';
                    break;
            case 1:
                    month = 'Feb';
                    break;                  
            case 2:
                    month = 'Mar';
                    break;
            case 3:
                    month = 'Apr';
                    break;
            case 4:
                    month = 'May';
                    break;
            case 5:
                    month = 'Jun';
                    break;
            case 6:
                    month = 'Jul';
                    break;
            case 7:
                    month = 'Aug';
                    break;
            case 8:
                    month = 'Sep';
                    break;
            case 9:
                    month = 'Oct';
                    break;
            case 10:
                    month = 'Nov';
                    break;
            case 11:
                    month = 'Dec';
                    break;                  

        }

        var date = 1;

        if(myDate.getDate() < 10){
            date = '0'+myDate.getDate();
        }else{
            date = myDate.getDate();
        }

        var result = month+' '+date+','+myDate.getFullYear();

        return result;
    }
    /**
    * 数据请求检验
    */
    function getCheck(){
        var documentH = document.documentElement.clientHeight;
        var scrollH = document.documentElement.scrollTop || document.body.scrollTop;
        var pubu = document.getElementById('tab_control_pubu');
        return (1500+scrollH)>=getLastH(pubu,'com_review') ?true:false;
    }

    /**
    * 获得最后一个box所在列的高度
    */
    function getLastH(pubu,cname){
        var boxs = getClass(pubu,cname);
        return boxs[boxs.length-1].offsetTop+boxs[boxs.length-1].offsetHeight;    
    }

    /* 获取所有class */
    function getClass(wrap,className){
      var obj = wrap.getElementsByTagName('*');
      var arr = [];
      for(var i=0;i<obj.length;i++){
        if(obj[i].className == className){
          arr.push(obj[i]);
        }
      }
      return arr;
    }


/* back to top */
/*$(function () {
	$(function () {
		$(window).scroll(function () {
			if ($(window).scrollTop() > 100) {
				$("#back_to_top").fadeIn(100);
			}
			else {
				$("#back_to_top").fadeOut(100);
			}
	});
	$("#back_to_top").click(function () {
		$('body,html').animate({ scrollTop: 0 }, 0);
			return false;
		});
	});
});*/

/* location city */
/*$(function(){
	$(".switch_city_list").find("td").click(function(){
		//	$("#location_city").text($(this).find("a").text());
			w=$("#location_city").width()-57;		
			cw=$(".search").width()-w;
			iw=$("#search").width()-w;
			//alert(cw);
			$(".search").width(cw);
			$("#search").width(iw);				
	});		
});*/


/* submit form */
/*$(document).ready(function(){
	$("#plain_search_bt").click(function(){
		$("#plain_search").submit();
	});	
});*/


    /* 消息框消失 */
    function hiddenPopup(){

        $("#popup_message").fadeOut("slow");

		var popup_message = document.getElementById("popup_message");
		document.body.removeChild(popup_message);

    }

    /* 弹出消息框 */
    function info(content,type){

        var popup_message = document.createElement("div");
        popup_message.setAttribute("id","popup_message");

        var popup_message_bg = document.createElement("div");
        popup_message_bg.setAttribute("id","popup_message_bg");

        popup_message.appendChild(popup_message_bg);

        var oks = document.createElement("div");
        oks.className = "ok";

        var imgs = document.createElement("img");

        if(type == 0){
            imgs.src = "/Public/images/pm_tick.png";
        }else{
            imgs.src = "/Public/images/pm_error.png";
        }
        
        oks.appendChild(imgs);

        popup_message.appendChild(oks);

        var message = document.createElement("div");

        message.className = "message";

        message.innerHTML = content;

        popup_message.appendChild(message);

        popup_message.style.position = 'fixed';
		popup_message.style.zIndex = 999999;
   

		document.body.appendChild(popup_message);

        setTimeout("hiddenPopup()",1000);//2秒，可以改动        
    }


      function comMouseOver(){

          jQuery(".com_review").hover(function () {
              jQuery(this).find('.com_report_spam').show();
              jQuery(this).find('.com_add_to_favourite').show();
              jQuery(this).find('.com_delete').show();
          }, function () {
              jQuery(this).find('.com_report_spam').hide();
              jQuery(this).find('.com_add_to_favourite').hide();
              jQuery(this).find('.com_delete').hide();
          });
              
      }



function fancyboxImg(){

  $("div.merchant_show_pic a").click(function() {  
      var aFancyboxGalleryClass = $(this).attr('class');

      $("."+aFancyboxGalleryClass).fancybox({
          // fitToView: false, // avoid the adjusting size to viewport
          // autoSize: false, // avoid set size based on content
          prevEffect    : 'none',
          nextEffect    : 'none',       
          beforeShow: function(){
            //transparent background
            $(".fancybox-skin").css("background","transparent");
            //remove dropshadow
            $(".fancybox-skin").css("-webkit-box-shadow","0 0 0 rgba(0, 0, 0, 0)");
            $(".fancybox-skin").css("-moz-box-shadow","0 0 0 rgba(0, 0, 0, 0)");
            $(".fancybox-skin").css("box-shadow","0 0 0 rgba(0, 0, 0, 0)");
          }
      });
  }); 

}

function fancyboxAjax(){


  $('.fancybox').fancybox({
        // fitToView: false, // avoid the adjusting size to viewport
        // autoSize: false, // avoid set size based on content
        prevEffect    : 'none',
        nextEffect    : 'none',
    /*   
        beforeShow: function(){
          //transparent background
          $(".fancybox-skin").css("background","transparent");
      //remove dropshadow
          $(".fancybox-skin").css("-webkit-box-shadow","0 0 0 rgba(0, 0, 0, 0)");
          $(".fancybox-skin").css("-moz-box-shadow","0 0 0 rgba(0, 0, 0, 0)");
          $(".fancybox-skin").css("box-shadow","0 0 0 rgba(0, 0, 0, 0)");
        }
    */
  });

  $("div.com_pic a").click(function() {  
      var aFancyboxGalleryClass = $(this).attr('class');

      $("."+aFancyboxGalleryClass).fancybox({
          // fitToView: false, // avoid the adjusting size to viewport
          // autoSize: false, // avoid set size based on content
          prevEffect    : 'none',
          nextEffect    : 'none',
      /*     
          beforeShow: function(){
            //transparent background
            $(".fancybox-skin").css("background","transparent");
            //remove dropshadow
            $(".fancybox-skin").css("-webkit-box-shadow","0 0 0 rgba(0, 0, 0, 0)");
            $(".fancybox-skin").css("-moz-box-shadow","0 0 0 rgba(0, 0, 0, 0)");
            $(".fancybox-skin").css("box-shadow","0 0 0 rgba(0, 0, 0, 0)");
          }
      */
      });
  });

}

function fancyboxBombBox($obj){
	$obj.each(function(){
		var _this = $(this);
		_this.off('click')
		.on('click', function(){
			_this.fancybox({
				prevEffect    : 'none',
				nextEffect    : 'none',       
		        beforeShow: function(){
		        	//transparent background
		        	$(".fancybox-skin").css("background","transparent");
		        	//remove dropshadow
		        	$(".fancybox-skin").css("-webkit-box-shadow","0 0 0 rgba(0, 0, 0, 0)");
		        	$(".fancybox-skin").css("-moz-box-shadow","0 0 0 rgba(0, 0, 0, 0)");
		        	$(".fancybox-skin").css("box-shadow","0 0 0 rgba(0, 0, 0, 0)");
		        },
			});
	});
	});
/*	$obj.off('click')
		.on('click', function(){
			$(this).fancybox({
				prevEffect    : 'none',
				nextEffect    : 'none',       
		        beforeShow: function(){
		        	//transparent background
		        	$(".fancybox-skin").css("background","transparent");
		        	//remove dropshadow
		        	$(".fancybox-skin").css("-webkit-box-shadow","0 0 0 rgba(0, 0, 0, 0)");
		        	$(".fancybox-skin").css("-moz-box-shadow","0 0 0 rgba(0, 0, 0, 0)");
		        	$(".fancybox-skin").css("box-shadow","0 0 0 rgba(0, 0, 0, 0)");
		        },
			});
	});*/
	$obj.trigger('click');
	//return false;
}