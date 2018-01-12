var obj = {
    "name": "AJL"
}
var option = {
    name: "AJL"
}
// fetch('http://rainingjoy.xin:9111/insert', {
//         method: 'POST',
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(obj)
//     }).then((response) => response.text())
//     .then((responseData) => { // 上面的转好的json
//         console.log(responseData)
//     })
// $.ajax({
//     type: "post",
//     url: "http://rainingjoy.xin:9111/insert",
//     dataType: "application/json",
//     data: JSON.stringify(obj),
//     success: function(data) {
//         console.log(data)
//     },
//     error: function(e) {
//         console.log(e)
//     }
// })
// $.ajax({
//     "url": 'http://rainingjoy.xin:9111/insert',
//     "type": "post",
//     contentType: 'application/json',
//     "data": JSON.stringify(obj)
// }).done(function(data) {
//     console.log(data);
// }).fail(function(e) {
//     console.log(e)
// });
/*获取*/
// rainingjoy.xin:9111/getList
// $.ajax({
//     "url": 'http://rainingjoy.xin:9111/getList?name="adasd"',
//     "type": "get",
// }).done(function (data) {
//     console.log(data);
// }).fail(function (e) {
//  console.log(e)
// });
layui.use('carousel', function() {
    var carousel = layui.carousel;
    //建造实例
    carousel.render({
        elem: '#test1',
        width: '100%', //设置容器宽度
        height: '540px', //设置容器高度
        arrow: 'always', //始终显示箭头
        anim:'fade',
        //,anim: 'updown' //切换动画方式
    });
});
$.ajax({
    "url": 'http://rainingjoy.xin:9111/getList?name=AJL',
    "type": "get",
}).done(function(data) {
    console.log(data);
}).fail(function(e) {
    console.log(e)
});