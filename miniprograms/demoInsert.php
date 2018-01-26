<?php
$con = mysql_connect("localhost","peter","abc123");//建立mysql连接
if (!$con)//判断连接是否成功
  {
  die('Could not connect: ' . mysql_error());//异常连接直接退出打印结果
  }

mysql_select_db("my_db", $con);//选择数据库

mysql_query("INSERT INTO Persons (FirstName, LastName, Age) 
VALUES ('Peter', 'Griffin', '35')");//执行往Persons表中插入数据 三个字段FirstName LastName Age的值分别为Peter Griffin 35

mysql_query("INSERT INTO Persons (FirstName, LastName, Age) 
VALUES ('Glenn', 'Quagmire', '33')");//同上

mysql_close($con);//关闭数据库连接
?>