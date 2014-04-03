<?php
$arr = array(
	'a1'=>array('av1', array('e1'=>array('ev1', 'ev2', 'ev3')), 'av3'),
	'b1'=>array('bv1', 'bv2', 'bv3'),
	'c1'=>array('cv1', 'cv2', 'cv3'),
);
$recursiveIteror = new RecursiveArrayIterator($arr);
$recursiveIterorIteror = new RecursiveIteratorIterator($recursiveIteror);
foreach ($recursiveIterorIteror as $k=>$v)
{
	echo "<pre>{$k}:{$v}</pre>";
}