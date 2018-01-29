var base = new Base64();
/*设置Cookie*/
function addCookies(name, value, expiresHours) {
    // value = URLEncoder.encode(name, "utf-8");
    // value = decodeURI
    var cookieString = name + "=" + value;
    //判断是否设置过期时间 
    if (expiresHours > 0) {
        var date = new Date();
        date.setTime(date.getTime + expiresHours * 3600 * 1000);
        cookieString = cookieString + "; expires=" + date.toGMTString();
    }
    document.cookie = cookieString;
}
/*读取Cookie*/
function readCookies() {
    var has = false;
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        if (arr[0] == "QWpsbWFuYWdlcg"){
            has = true;
        };
    }
    return has;
}
if (readCookies()) {
    window.open("manager.html", '_self')
}
(function($) {
    var base = new Base64();
    $(".btn").on('click', function() {
        var user = base.encode($("#user").val());
        var pwd = base.encode($("#pwd").val());
        if (user == "") {
            $('<div id="msg" />').html("用户名不能为空！").appendTo('.sub').fadeOut(2000);
            $("#user").focus();
            return false;
        }
        if (pwd == "") {
            $('<div id="msg" />').html("密码不能为空！").appendTo('.sub').fadeOut(2000);
            $("#pwd").focus();
            return false;
        }
        $.ajax({
            type: "POST",
            url: "login.php?action=login",
            dataType: "json",
            data: { "user": user, "pwd": pwd },
            beforeSend: function() {
                $('<div id="msg" />').addClass("loading").html("正在登录...").css("color", "#999").appendTo('.sub');
            },
            success: function(json) {
                addCookies(user, pwd, 168)
                if (json.success == 1) {
                    $("#login_form").remove();
                    var div = "<div id='result'><p><strong></strong> 恭喜您登录成功！</p></div>"
                    $("#login").append(div);
                    setTimeout(function() {
                        window.open("manager.html", '_self')
                    }, 1000)
                } else {
                    $("#msg").remove();
                    $('<div id="errmsg" />').html(json.msg).css("color", "#999").appendTo('.sub').fadeOut(2000);
                    return false;
                }
            }
        });
    });
    // //1.加密  
    // var str = '124中文内容';
    // var base = new Base64();
    // var result = base.encode(str);
    // console.log(result)
    // //document.write(result);  
    // //2.解密  
    // var result2 = base.decode(result);
    // console.log(result2)


})(jQuery);