<?php

namespace App\Http\Controllers;

use App\Models\ShortUrl;
use App\Models\Sing;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function showMp3($api_youtube)
    {
        $root_url = env('URL_API_DOWNLOAD_MP3') . $api_youtube;
        $short_url = ShortUrl::where('root_url', $root_url)->first();
        if (!empty($short_url)) {
            $short_url = env('SHORT_URL') . $short_url->id_url;
            return response()->json([
                'short_url' => $short_url
            ]);
        }
    }
    public function getTopLagu123()
    {
        $html = $this->cUrl('https://lagu123.blog/download-lagu-lagu-pop.html');
        preg_match_all('/<tr class=\"plmenu\">
        <td rowspan=\"2\">.*?<\/td>
        <td><a href=\"(.*?)\">(.*?)<\/a><\/td>
    <\/tr>
    <tr class=\"plmenu\">
        <td><b class=\"play-count\">(.*?)<\/b><\/td>
    <\/tr>/', $html, $result);
        $links = $result[1];
        $names = $result[2];
        $views = $result[3];
        $response = [];
        $i = 0;
        foreach ($names as $name) {
            $response[] = [
                'name' => $name,
                'link' => $links[$i],
                'view' => $views[$i],
            ];
            $i++;
        }
        return json_encode($response);
    }
    public function cUrl($url)
    {
        $user_agent = 'Mozilla/5.0 (Windows NT 6.1; rv:8.0) Gecko/20100101 Firefox/8.0';

        $options = array(

            CURLOPT_CUSTOMREQUEST => "GET",        //set request type post or get
            CURLOPT_POST => false,        //set to GET
            CURLOPT_USERAGENT => $user_agent, //set user agent
            CURLOPT_COOKIEFILE => "cookie.txt", //set cookie file
            CURLOPT_COOKIEJAR => "cookie.txt", //set cookie jar
            CURLOPT_RETURNTRANSFER => true,     // return web page
            CURLOPT_HEADER => false,    // don't return headers
            CURLOPT_FOLLOWLOCATION => true,     // follow redirects
            CURLOPT_ENCODING => "",       // handle all encodings
            CURLOPT_AUTOREFERER => true,     // set referer on redirect
            CURLOPT_CONNECTTIMEOUT => 120,      // timeout on connect
            CURLOPT_TIMEOUT => 120,      // timeout on response
            CURLOPT_MAXREDIRS => 10,       // stop after 10 redirects
        );

        $ch = curl_init($url);
        curl_setopt_array($ch, $options);
        $content = curl_exec($ch);
        $err = curl_errno($ch);
        $errmsg = curl_error($ch);
        $header = curl_getinfo($ch);
        curl_close($ch);
        $header['errno'] = $err;
        $header['errmsg'] = $errmsg;
        $header['content'] = $content;
        return $content;
    }
}
