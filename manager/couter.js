  $(function() {
      $.ajax({
          "url": 'http://rainingjoy.xin:9111/getAll',
          "type": "get",
      }).done(function(data) {
          renderTable(data)
      }).fail(function(e) {
          console.log(e)
      });

      function renderTable(data) {
          layui.use('table', function() {
              var table = layui.table;

              //展示已知数据
              table.render({
                  elem: '#demo',
                  cols: [
                      [ //标题栏
                          { field: 'userId', title: 'ID', width: 80, sort: true, align: "center" },
                          { field: 'cellname', title: '小区名', width: 120 },
                          { field: 'address', title: '地址' },
                          { field: 'area', title: '面积', width: 80, align: "center" },
                          { field: 'style', title: '风格', width: 80, align: "center" },
                          { field: 'budget', title: '预算', width: 80, align: "center" },
                          { field: 'components', title: '户型', sort: true, width: 120 },
                          { field: 'type', title: '类型', sort: true, width: 80, align: "center" },
                          { field: 'name', title: '名字', sort: true, width: 100, align: "center" },
                          { field: 'mobilephone', title: '手机号码', sort: true, width: 120, align: "center" },
                          { field: 'other', title: '备注', sort: true },
                          { field: 'date', title: '日期', sort: true, align: "center" },
                          { field: 'status', title: '状态', sort: true, align: "center" }
                      ]
                  ],
                  data: data
                      //,skin: 'line' //表格风格
                      ,
                  even: true,
                  page: true, //是否显示分页
                  limits: [10, 15, 20],
                  limit: 10 //每页默认显示的数量
              });
          });

      };
  })
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