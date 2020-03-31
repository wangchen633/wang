 $(".plus").on("click",function(){
        var num=$(this).prev().html();           //获取商品初始数量1
        $(this).prev().html(Number(num)+1);//此时已将数字直接写入标签内，是动作
        var buynum=$(this).prev().html();   //得到+1之后的商品数量，即购买数量
        var price=$(this).parent().prev().children().children().html();     //获取商品单价
        $(this).parent().next().children().children().html((buynum*Number(price)).toFixed(2));
//        console.log(smallPrice);
        allPrice();
        checkNum();
    });

    $(".minus").on("click",function(){
        var num=$(this).next().html();           //获取此时商品数量
        if(num>1){
        $(this).next().html(Number(num)-1);//此时已将数字直接写入标签内，是动作
        var buynum=$(this).next().html();   //得到-1之后的商品数量，即购买数量
        var price=$(this).parent().prev().children().children().html();     //获取商品单价
        $(this).parent().next().children().children().html((buynum*Number(price)).toFixed(2));
        }
        allPrice();
        checkNum();
    });
    //全选
    $(".allSelect").click(function(){
//        console.log(this);
        if(this.checked==true){
            $(".check").prop("checked",true);
        }else{
            $(".check").prop("checked",false);
        }
        allPrice();
        checkNum();
    });
    //单选
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


    function checkNum(){
        var num=0;
        $(".check").each(function(){
            if(this.checked==true){
                var b=$($(this).parent().next().next().next().next().children()[1]).html();
                num+=Number(b);
            }
        });
        $(".fontColor1").html(num);
    }


    function allPrice(){
        var sum=0;
        $(".check").each(function(){
            if(this.checked==true){
               var a=$($(this).parent().next().next().next().next().next().children().children()[0]).html();    //单类商品数量
//                console.log($($(this).parent().next().next().next().next().next().children().children()[0]).html());
               sum+=Number(a);
            }
        });
        $(".allPrice1").html(sum);
    }