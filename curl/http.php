<?php
class Http
{
	/**
	 * 发起一个HTTP/HTTPS的请求
	 * @param $url 接口的URL
	 * @param $params 接口参数   array('content'=>'test', 'format'=>'json');
	 * @param $method 请求类型    GET|POST
	 * @param $multi 图片信息
	 * @param $extheaders 扩展的包头信息
	 * @return string
	 */
	public static function request( $url , $params = array(), $method = 'GET' , $multi = true, $extheaders = array())
	{
		if(!function_exists('curl_init')) exit('Need to open the curl extension');
		$method = strtoupper($method);
		$ci = curl_init();
		curl_setopt($ci, CURLOPT_USERAGENT, 'PHP-SDK OAuth2.0');
		curl_setopt($ci, CURLOPT_CONNECTTIMEOUT, 3);
		$timeout = $multi?30:3;
		curl_setopt($ci, CURLOPT_TIMEOUT, $timeout);
		curl_setopt($ci, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ci, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ci, CURLOPT_SSL_VERIFYHOST, false);
		curl_setopt($ci, CURLOPT_HEADER, false);
		$headers = (array)$extheaders;
		curl_setopt($ci, CURLINFO_HEADER_OUT, TRUE );
        curl_setopt($ci, CURLOPT_URL, $url);
        if($headers)
        {
            curl_setopt($ci, CURLOPT_HTTPHEADER, $headers );
        }

        $response = curl_exec($ci);
        if($response===false)
        {
        	echo 'Curl error: ' . curl_error($ci);
        	echo 'Curl error: ' . curl_error($ci)."\n";
        }
        curl_close ($ci);
        return $response;
	}
}