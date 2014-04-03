<?php
$pattern = '/^([0-9A-Za-z!@#$%*]{6,20}[^ ])$/';
$pattern = '/^[0-9A-Za-z!@#$%*]{6,20}$/';

// var_dump(preg_match($pattern, $_GET['pwd']));
// echo '<br />';
// echo $pattern;
// echo '<br />';
// var_dump($_GET['pwd']);

$pattern = '#(/s_)|(/m_)|(/b_)|(/org_)#';
var_dump(preg_match($pattern, $_GET['pwd']));