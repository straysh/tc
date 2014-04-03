<?php
//http://www.urbanspoon.com/reservations/lb/70/best-restaurants-Sydney?page=

require_once(dirname(__FILE__).'/http.php');
$connection = mysql_connect('localhost', 'root', '123456');
mysql_query("set names utf8");
mysql_select_db('yummy');

for($i=1; $i<10000; $i++)
{
	echo "[INFO]starting @ page {$i}\n";
	$url = "http://www.urbanspoon.com/reservations/lb/70/best-restaurants-Sydney?page={$i}";
	$data = http::request($url);
	if(empty($data))
		continue;
	$pattern = '#<li.*?class=["\']row-fluid restaurant["\'].*?>(.*?)</li>#si';
	preg_match_all($pattern, $data, $matches);
	unset($matches[0]);
	if(!isset($matches[1]) || !is_array($matches[1]))
	{
		var_dump($data);
		continue;
	}
	foreach ($matches[1] as $item)
	{
		preg_match('#<div.*?class=["\']title["\'].*?>(.*?)</div>#is', $item, $title);
		if(isset($title[1]))
			preg_match('#<a.*?title=["\'](.*?)["\']#is', $title[1], $title);
	
		preg_match('#<div.*?class=["\']info["\'].*?>(.*?)</div>#is', $item, $info);
		if(isset($info[1]))
		{
			preg_match('#<span.*?class=["\']neighborhood["\'].*?>(.*?)</span>#is', $info[1], $neighborhood);
			preg_match('#<span.*?class=["\']cuisines["\'].*?>(.*?)</span>#is', $info[1], $cuisines);
			preg_match('#<span.*?class=["\']address["\'].*?>(.*?)</span>#is', $info[1], $address);
		}
	
		$title = isset($title[1]) ? mysql_escape_string(trim($title[1])) : '';
		$neighborhood = isset($neighborhood[1]) ? mysql_escape_string(trim($neighborhood[1])) : '';
		$cuisines = isset($cuisines[1]) ? mysql_escape_string(trim($cuisines[1])) : '';
		$address = isset($address[1]) ? mysql_escape_string(trim($address[1])) : '';
		$c_time = time();
	
		mysql_query("insert into urban_sydney_restaurant (name, neighborhood, cuisines, address, c_time) VALUES ('{$title}', '{$neighborhood}', '{$cuisines}', '{$address}', {$c_time})") or die(mysql_error($connection));
		echo "[INFO]{$title}---{$neighborhood}---{$cuisines}---{$address}--------------------------------------------------\n";
	}
	sleep(10);
}