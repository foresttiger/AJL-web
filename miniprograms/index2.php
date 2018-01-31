<?php

	$name = $_GET['name'];
	$cellname = $_GET['cellname'];

	$con = mysql_connect("bdm256444540.my3w.com:3306","bdm256444540","ajladmin888");//建立mysql连接
	if (!$con)//判断连接是否成功
	  {
	  die('Could not connect: ' . mysql_error());//异常连接直接退出打印结果
	  }

	mysql_select_db("bdm256444540_db", $con);//选择数据库

	// $query = mysql_query("INSERT INTO user (user_id,user,year,phone,pwd) 
	// VALUES ('1', '1', '1','17717375328','111111')");

	mysql_query("set names 'utf8'");


	$sql = mysql_query("INSERT INTO Persons (FirstName, LastName, Age) 
	VALUES ('Peter','Griffin','35')");

	// $sql = mysql_query("INSERT INTO wetchat_order(user_id,callname,address,area,style,budget,price,components,type,name,mobilephone,other,data,status) 
	//  VALUES ('1', '1','1','1','1', '1','1', '1','1', '1','1', '1','1','1')");//执行往Persons表中插入数据 三个字段FirstName LastName Age的值分别为Peter Griffin 35
	if (mysql_query($sql,$con)){ 
	    $arr['msg'] = "新记录插入成功";
	} else {
	    $arr['msg'] = "Error: " . mysql_error() . "<br>";
	}

	$arr['success'] = 1; 
	$arr['name'] = $name; 
	$arr['cellname'] = $cellname; 
    // $arr['msg'] =	 '写入成功'; 
    echo json_encode($arr);
	mysql_close($con);//关闭数据库连接
?>