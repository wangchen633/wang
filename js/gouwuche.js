$(".jia").on("click",function(){
        var num=$(this).prev().val(); 
        $(this).prev().val(Number(num)+1);
        var buynum=$(this).prev().val();   
        var price=$(this).parent().prev().html();    
        $(this).parent().next().html((buynum*Number(price)));
        allPrice();
        checkNum();
    });

    $(".jian").on("click",function(){
        var num=$(this).next().val();           
        if(num>1){
        $(this).next().val(Number(num)-1);
        var buynum=$(this).next().val();
        var price=$(this).parent().prev().html();
        $(this).parent().next().html((buynum*Number(price)));
        }
        allPrice();
        checkNum();
    });
    $(".allSelect").click(function(){
        if(this.checked==true){
            $("[name=sd]").prop("checked",true);
        }else{
            $("[name=sd]").prop("checked",false);
        }
        allPrice();
        checkNum();
    });
    $(".check").click(function(){
        var check=$(".check").length;
        var checked=$(".check:checked").length;
        if(check==checked){
            $(".allSelect").prop("checked",true);
        }else{
            $(".allSelect").prop("checked",false);
        }
        allPrice();
        checkNum();
    });
	$('[name=sd]').click(function(){
		if(this.checked==true){
			allPrice();
			checkNum();
		}else{
			var c = $('.shang').html();
			var d = $('#way_money').html();
			var a=$(this).parent().parent().children('span').children().eq(1).children('input').val();
			var b=$(this).parent().parent().children('span').children().eq(2).html();
			var w = c - a;
			var e = d - b;
			$('.shang').html(w);
			$('#way_money').html(e)
		}
	})
	$('.shan').click(function(){
		var rss = confirm('确认是否删除')
		if (rss == true) {
		 $(this).parent().parent().parent().hide();
		}	
	});
	$('#quans').click(function(){
		var rss = confirm('确认是否删除')
		$('[name=sd]').each(function(){
			if (this.checked==true&&rss==true) {
				$(this).parent().parent().parent().hide();
			}
		})
		
	})


    function checkNum(){
        var num=0;
        $("[name=sd]").each(function(){
            if(this.checked==true){
                var b=$(this).parent().parent().children('span').children().eq(2).html();
			
                num+=parseInt(b);
            }
        });
        $("#way_money").html(num);
    }
	  function allPrice(){
	        var sum=0;
	        $("[name=sd]").each(function(){
	            if(this.checked==true){
	               var a=$(this).parent().parent().children('span').children().eq(1).children('input').val();
				   sum+=Number(a);
	            }
	        });
	        $(".shang").html(sum);
	    }