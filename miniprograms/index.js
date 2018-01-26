    function getQuote(options) {
        fetch('http://rainingjoy.xin:9111/saveOrUpdate', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(options)
            }).then((response) => response.text())
            .then((responseData) => { // 上面的转好的json
                console.log(responseData)

            })
    }

    function getQueryParameter(qs) {
        var s = location.href;
        s = s.replace("?", "?&").split("&"); //这样可以保证第一个参数也能分出来 
        var re = "";
        for (i = 1; i < s.length; i++)
            if (s[i].indexOf(qs + "=") == 0)
                re = s[i].replace(qs + "=", ""); //取代前面的参数名，只剩下参数值  

        return re;
    }

    var name = getQueryParameter('name') //获取user
    var cellname = getQueryParameter('cellname') //获取pwd
    alert('你传入的user是：' + name)
    alert('你传入的pwd是：' + cellname)
    var options = {
        "name": name,
        "cellname": cellname
    }
    getQuote(options)