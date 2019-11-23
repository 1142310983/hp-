define(["jquery"],function($){
    //侧边导航
    function navigation(){
        $("#sidebar").find(".sidebar_d1").mouseenter(function(){
            $(".sidebar_e").css("display","block").mouseenter(function(){
            })
        }).mouseleave(function(){
            $(".sidebar_e").css("display","none")
        })
        $("#sidebar").find(".sidebar_d2").mouseenter(function(){
            $(".sidebar_f").css("display","block")
        }).mouseleave(function(){
            $(".sidebar_f").css("display","none")
        })
        $("#sidebar").find(".sidebar_d3").mouseenter(function(){
            $(".sidebar_g").css("display","block")
        }).mouseleave(function(){
            $(".sidebar_g").css("display","none")
        })
        $("#sidebar").find(".sidebar_d4").mouseenter(function(){
            $(".sidebar_h").css("display","block")
        }).mouseleave(function(){
            $(".sidebar_h").css("display","none")
        })
    }
    function headerNav(){
        $("#header_nav").find(".header_nav1,.header_div1").mouseenter(function(){
            $("#header_nav").find(".header_div1").show();
            $(".header_nav1").css("color","#0199d5")
        }).mouseleave(function(){
            $("#header_nav").find(".header_div1").hide();
            $(".header_nav1").css("color","#5a5a5a");
        })

        $("#header_nav").find(".header_nav2,.header_div2").mouseenter(function(){
            $("#header_nav").find(".header_div2").show();
            $(".header_nav2").css("color","#0199d5")
        }).mouseleave(function(){
            $("#header_nav").find(".header_div2").hide();
            $(".header_nav2").css("color","#5a5a5a");
        })

        $("#header_nav").find(".header_nav3,.header_div3").mouseenter(function(){
            $("#header_nav").find(".header_div3").show();
            $(".header_nav3").css("color","#0199d5")
        }).mouseleave(function(){
            $("#header_nav").find(".header_div3").hide();
            $(".header_nav3").css("color","#5a5a5a");
        })

        $("#header_nav").find(".header_nav4,.header_div4").mouseenter(function(){
            $("#header_nav").find(".header_div4").show();
            $(".header_nav4").css("color","#0199d5")
        }).mouseleave(function(){
            $("#header_nav").find(".header_div4").hide();
            $(".header_nav4").css("color","#5a5a5a");
        })

        $("#header_nav").find(".header_nav5,.header_div5").mouseenter(function(){
            $("#header_nav").find(".header_div5").show();
            $(".header_nav5").css("color","#0199d5")
        }).mouseleave(function(){
            $("#header_nav").find(".header_div5").hide();
            $(".header_nav5").css("color","#5a5a5a");
        })

        $("#header_nav").find(".header_nav6,.header_div6").mouseenter(function(){
            $("#header_nav").find(".header_div6").show();
            $(".header_nav6").css("color","#0199d5")
        }).mouseleave(function(){
            $("#header_nav").find(".header_div6").hide();
            $(".header_nav6").css("color","#5a5a5a");
        })

        $("#header_nav").find(".header_nav7,.header_div7").mouseenter(function(){
            $("#header_nav").find(".header_div7").show();
            $(".header_nav7").css("color","#0199d5")
        }).mouseleave(function(){
            $("#header_nav").find(".header_div7").hide();
            $(".header_nav7").css("color","#5a5a5a");
        })

        $("#header_nav").find(".header_nav9,.header_div9").mouseenter(function(){
            $("#header_nav").find(".header_div9").show();
            $(".header_nav9").css("color","#0199d5")
        }).mouseleave(function(){
            $("#header_nav").find(".header_div9").hide();
            $(".header_nav9").css("color","#5a5a5a");
        })
    }
    function data_interaction(){
        $("#userid").find("button").click(function(){
            $.ajax({
                type:"post",
                url:"phplogin.php",
                data:{
                    username: $(".number").val(),
                    password: $(".password").val(),
                },
                success:function(result){
                     // var obj = JSON.parse(result)
                     var obj = JSON.parse(result);
                     if(obj.code){
                         $("#warning").css("color","red");
                     }else{
                        $("#warning").css("color","green");
                         open("Hphome.html");
                         
                     }
                     oPassword_p.html(obj.message);
                     oPassword_p.css("display","block");
                 },
                error:function(msg){
                    console.log(msg)
                    
                }
            })
        })
        
    }
    return {
        navigation:navigation,
        headerNav:headerNav,
        data_interaction:data_interaction,
    }
})