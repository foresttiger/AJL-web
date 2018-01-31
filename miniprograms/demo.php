<?php
// header("Content-type: text/html; charset=utf-8"); 
	$con = mysql_connect("bdm256444540.my3w.com:3306","bdm256444540","ajladmin888");//建立mysql连接
	if (!$con)//判断连接是否成功
	  {
	  	die('Could not connect: ' . mysql_error());//异常连接直接退出打印结果
	  }
	mysql_select_db("bdm256444540_db", $con);//选择数据库
	$result = mysql_query("SELECT * FROM hugezx");//执行查询Persons表
	while($row = mysql_fetch_array($result))//遍历查询结果
	  {
		 echo iconv("GB2312","UTF−8",$row['name']); 
		 echo iconv("GB2312","UTF−8",$row['cellname']); 
	 	 // echo $row['name'] . " " . $row['cellname'];//打印输出每行字段FirstName和LastName的值
	  	 echo "<br />";//换行符打印
	  }
	 mysql_close($con);//关闭连接


	 //初始化
    $curl = curl_init();
    //设置抓取的url
    curl_setopt($curl, CURLOPT_URL, 'http://rainingjoy.xin:9111/saveOrUpdate');
    //设置头文件的信息作为数据流输出
    curl_setopt($curl, CURLOPT_HEADER, 1);
    //设置获取的信息以文件流的形式返回，而不是直接输出。
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    //设置post方式提交
    curl_setopt($curl, CURLOPT_POST, 1);
    //设置post数据
    $post_data = array(
        "name" => "coder",
        "cellname" => "12345"
        );
    $context = json_decode($_REQUEST['instance'], true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $context);
    //执行命令
    $data = curl_exec($curl);
    //关闭URL请求
    curl_close($curl);
    //显示获得的数据
    print_r($data);




	// $url = 'http://rainingjoy.xin:9111/saveOrUpdate';
	// $data = array(
	//     'name' => 'test data',
	//     'cellname' => 'test cellname',
	// );
	// $content = http_build_query($data);
	// $content_length = strlen($content);
	// $options = array(
	//     'http' => array(
	//         'method' => 'POST',
	//         'header' =>
	//         "Content-type: application/x-www-form-urlencoded\r\n" .
	//         "Content-length: $content_length\r\n".
	//         "User-Agent: Mozilla/5.0(Windows: U; Windows NT 6.1; zh-CH; rv: 1.9.2.13) Gecko/20101203 Firefox/3.6.13"."\r\n",
	//         'content' => $content
	//     )
	// );
	// // echo file_get_contents($url, false, stream_context_create($options));
	// $context = stream_context_create($options);

	// $contents = file_get_contents('http://rainingjoy.xin:9111/saveOrUpdate', false, $context);



	// $data = [
	//     'name' => '白菜打下',
	//     'cellname' => 'info@aiyooyoo.com',
	// ];
	// $data = http_build_query($data);
	// $opts = [
	//     'http' => [
	//         'method' => 'POST',
	//         'header' => "Content-type:application/x-www-form-urlencoded\r\n".
	//                     "Content-Length: ".strlen($data)."\r\n".
	//                     "Cookie: PHPSESSID=13ROTEGFGJDFDFDOGDFGD"."\r\n".
	//                     "User-Agent: Mozilla/5.0(Windows: U; Windows NT 6.1; zh-CH; rv: 1.9.2.13) Gecko/20101203 Firefox/3.6.13"."\r\n".
	//                     "Referer:http://rainingjoy.xin:9111/saveOrUpdate"."\r\n",
	//         'content' => $data,
	//     ],
	// ];
	// $context = stream_context_create($opts);
	// $html = @file_get_contents('http://rainingjoy.xin:9111/saveOrUpdate', false, $context);

	//  $opts = array(
	//   'http'=>array(
	//     'method'=>"GET",
	//     'header'=>"Accept-language: en\r\n" .
	//               "Cookie: foo=bar\r\n"
	//   )
	// );
	// $context = stream_context_create($opts);

	// $file = file_get_contents('http://rainingjoy.xin:9111/saveOrUpdate', false, $context);



?>