$("#logo_out").click(function() {
    delCookie();
    window.open("www.gxajl.com/manager", '_self')
})

function delCookie() {
    var name = "QWpsbWFuYWdlcg"
    var date = new Date();
    date.setTime(date.getTime() - 10000);
    document.cookie = name + "=a; expires=" + date.toGMTString();
}